import styled from 'styled-components';

const AnimatedTitle = styled.span`
    font-size: 1.5em;
    padding: 15px 25px;
    color: #fff;
    position: relative;
    z-index: 0;
    box-decoration-break: clone;
    display: inline-block;
    -webkit-box-decoration-break: clone;
    // opacity: 1;
    padding: 15px 20px;
    transition: all 0.8s cubic-bezier(0.14, 1, 0.34, 1);

    &::before {
        content: '';
        z-index: -1;
        position: absolute;
        left: -1px;
        bottom: 0px;
        width: 0%;
        height: 100%;
        display: inline-block;

        background-color: #fff;
        transition: all 0.45s cubic-bezier(0.84, 0, 0.25, 1);
    }

    &.entering {
        // opacity: 0;
    }
    &.entered {
        color: #ebaa73;
        &::before {
            width: 100%;
            transition-delay: 0.8s;
        }
        transition-delay: 0.7s;
    }

    &.exiting {
        color: #ebaa73;
        &::before {
            width: 100%;
        }
    }
`;

export default AnimatedTitle;
