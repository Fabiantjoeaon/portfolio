import styled from 'styled-components';

const AnimatedTitle = styled.span`
    font-size: 1.5em;
    padding: 15px 25px;
    color: #fff;
    position: relative;
    z-index: 0;
    // opacity: 1;

    transition: all 0.8s cubic-bezier(0.14, 1, 0.34, 1);

    &::before {
        content: '';
        z-index: -1;
        position: absolute;
        bottom: 0px;
        width: 0%;
        height: 100%;
        display: block;
        background-color: #fff;
        transition: all 0.45s cubic-bezier(0.84, 0, 0.25, 1);
    }

    &.entering {
        // opacity: 0;
    }
    &.entered {
        color: #000;
        &::before {
            width: 100%;
            transition-delay: 0.8s;
        }
        transition-delay: 0.7s;
    }

    &.exiting {
        color: #000;
        &::before {
            width: 100%;
        }
    }
`;

export default AnimatedTitle;
