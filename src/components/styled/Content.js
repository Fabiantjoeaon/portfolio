import styled from 'styled-components';

const Content = styled.div`
    margin-top: 100px;
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
`;

export default Content;
