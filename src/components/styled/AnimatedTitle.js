import styled from 'styled-components';

const AnimatedTitle = styled.span`
    font-size: 1.5em;
    padding: 15px 25px;
    color: #000;
    position: relative;
    text-align: center;
    z-index: 0;
    box-decoration-break: clone;
    font-style: italic;
    font-weight: 700;
    display: inline-block;
    -webkit-box-decoration-break: clone;

    padding: 25px 50px;
    transition: all 0.8s cubic-bezier(0.14, 1, 0.34, 1);

    &::before,
    &::after {
        content: '';
        position: absolute;
        height: 100%;
        width: 0%;
        display: inline-block;
    }

    &::before {
        z-index: -1;

        left: -1px;
        bottom: 0px;

        background-color: #7577cd;
        transition: all 0.45s cubic-bezier(0.84, 0, 0.25, 1);
    }

    &::after {
        z-index: -2;

        // left: 20px;
        top: 20px;
        right: -20px;

        background-color: #080957;
        transition: all 0.45s cubic-bezier(0.74, 0.3, 0.25, 1);
    }

    &.entering {
        // opacity: 0;
    }
    &.entered {
        color: #fff;
        &::before {
            width: 100%;
            transition-delay: 0.6s;
        }

        &::after {
            width: 100%;

            transition-delay: 0.6s;
        }

        transition-delay: 0.7s;
    }

    &.exiting {
        color: #fff;
        &::before,
        &::after {
            width: 0%;
        }
    }

    @media only screen and (max-device-width: 667px) {
        width: 80%;
        font-size: 1.4em;
        padding: 15px 20px;
    }
`;

export default AnimatedTitle;
