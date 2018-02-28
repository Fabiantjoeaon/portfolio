import styled from 'styled-components';

const Content = styled.div`
    margin: 100px auto 0px auto;
    transition: all 0.3s ease-out;
    transition-delay: 1.4s;
    opacity: 0;
    &.entering {
        opacity: 0;
    }
    &.entered {
        opacity: 1;
    }

    &.exiting {
        opacity: 1;
        transition-delay: 0s;
    }

    @media (max-width: 900px) {
        width: 85%;
    }
`;

export default Content;
