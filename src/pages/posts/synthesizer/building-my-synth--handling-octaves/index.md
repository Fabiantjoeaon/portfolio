---
path: "/blog/building-my-web-synth--handling-octaves"
date: "2017-11-07"
title: "Building my web synth: handling octaves"
---

## Staying in sync

Both my keyboard and my step sequencer make use of octaves so that a specific range of notes can be displayed, and then played.
However, a proper synth should use of a wide set of notes, consisting of multiple octaves, with flexible controls.
I needed a way to display and control octaves properly for the sequencer as well as my keyboard.

My synth is build using Redux, and I figured it would be best to handle most of my state management in a seperate reducer for my octaves.

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
/* Use lodash's flattenDeep function because we have a multidimensional array
 */
const allNotes = flattenDeep(
    octavesRange.map(octave => mapNotesToOctave(octave))
);

// Output: ['C0', 'C#0', 'D0' ...]
```
