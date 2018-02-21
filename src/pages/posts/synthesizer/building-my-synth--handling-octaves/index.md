---
path: "/blog/building-my-web-synth--handling-octaves"
date: "2017-11-07"
title: "Building my web synth: handling octaves (with Redux)"
attachments:
  - "./sequencer.mp4"
---

## Staying in sync

Both my keyboard and my step sequencer make use of octaves so that a specific range of notes can be displayed, and then played.
However, a proper synth should use of a wide set of notes, consisting of multiple octaves, with flexible controls.
I needed a way to display and control octaves properly for the sequencer as well as my keyboard.

<video muted autoplay loop>
  <source src="./sequencer.mp4" type="video/mp4">
  
  Your browser does not support the video tag.
</video>
<br><br>

My synth is build using Redux, and I figured it would be best to handle most of my state management in a seperate reducer for my octaves.
<br>
<br>

## Mapping notes

Generating notes was fairly easy, as every octave has the same format of notes:

```javascript
/* Basic format of notes */
const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

/* Great piece of code I keep on reusing,
 * which allows you to instantly create an array based on a number.
 * Props to @getify and @hwk73
 * https://twitter.com/hwk73/status/922009762988003329
 */
const octavesRange = [...5];

/* Maps notes to a octave */
const mapNotesToOctave = octave => notes.map(note => `${note}${octave}`);

/* Using lodash's flattenDeep function because we have a multidimensional array
 */
const allNotes = flattenDeep(
    octavesRange.map(octave => mapNotesToOctave(octave))
);

// Output: ['C0', 'C#0', 'D0' ...]
```

<br>
<br>

## Zooming in

Next, having this long array of notes, I needed to map it to my synth. As I only want to map a certain 'set' of notes, I figured it would
be best to 'zoom in' on a particular location of my array. This would perfectly fit the interface I had in mind, making it possible to switch between octaves, and to move notes from left to right. The amount of notes to be moved doesn't matter, as with this implementation, it's just changing the location of my 'zoom'. With this in mind, I implemented my reducer as follows:

```javascript
const initialState = {
    allNotes,

    // Current zoom position
    currentPos: notes.length * 3
};

const octaveReducer = (state = initialState, action) => {
    /// ...reducer code
};
```

<br>
Now with my reducer and initial state in place, I created a selector to grab a certain 'slice' of notes, based on the current location.
<br><br>

```javascript
// General function to grab a single slice
const getNotesAsSingleOctave = (allNotes, pos, octave) => {
    const requestedLength = octave * notes.length;

    // Slice full notes from position
    const fromPosition = allNotes.slice(pos, allNotes.length);

    // Then slice octave from position
    const slice = fromPosition.slice(0, requestedLength);

    // Push notes to slice when missing
    const missingNotes = requestedLength - slice.length;
    if (missingNotes) {
        // slice.push(allNotes[0]);
        [...missingNotes].forEach(note =>
            // Index of the missing note range is the same as the index in allNotes :)
            slice.push(allNotes[note])
        );
    }

    return slice;
};

/**
 * Selector I pass to my components that implements the function above.
 * Get an amount of octaves from all available notes.
 */
export const getNotesAsOctaves = (state, octave) =>
    getNotesAsSingleOctave(state.allNotes, state.currentPos, octave);
```

<br>

Done! Now, if you're familiar with the React-redux package, I now only have to map my selector as state to my components, and a dispatch method to call actions.

```javascript
const mapStateToProps = state => ({
    sequencerNotes: getNotesAsOctaves(state.octave, 1),
    keyboardNotes: getNotesAsOctaves(state.octave, 2),
    currentOctave: getCurrentOctave(state.octave),
    ...state
});

const mapDispatchToProps = dispatch => ({
    // I have 2 actions for my reducers,
    // one to set an octave immediately, like,
    // go to octave 1, or 2
    setOctave(octave) {
        dispatch(setOctave(octave));
    },

    // And another one to just move a few positions
    slideOctave(movement) {
        dispatch(slideOctave(movement));
    }
});
```

<br>

There's only one thing left, how to detect which octave we are in? To do this, with the current data I have, it seemed reasonable to detect what notes appear most in the current selection. For this, I wrote this selector:

```javascript
/**
 * Detect current octave by checking
 * which number appears most in current octave slice
 */
export const getCurrentOctave = (state, previousOctave) => {
    const currentNoteSlice = getNotesAsSingleOctave(
        state.allNotes,
        state.currentPos,
        1
    );

    // Get all occurring octaves by pulling out the numbers
    const allOccurringOctaves = currentNoteSlice.map(
        note => note.match(/\d+/g)[0]
    );

    // Return whatever occurs most using lodash's mode function
    return mode(allOccurringOctaves);
};
```

<br>

And that's it, perfectly in sync :)!
