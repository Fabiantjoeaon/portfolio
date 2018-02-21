import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import AnimatedTitle from '../components/styled/AnimatedTitle';
import Content from '../components/styled/Content';

const IndexContainer = styled.div``;

const IndexTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    // flex-flow: column nowrap;
    justify-content: center;

    p,
    ${IndexTitle} {
        // align-self: center;
    }
`;

const IndexTitle = styled(AnimatedTitle)`
    font-size: 1.9em;

    &::before {
        left: -3px;
    }
`;

const StyledProjectTitle = styled(Link)`
    text-decoration: none;
`;

const IndexPage = ({ transition }) => (
    <IndexContainer
        style={transition && transition.style}
        className={transition.status}
    >
        <IndexTitleWrapper>
            <IndexTitle className={transition.status}>
                Whazzaaaaaap!?
            </IndexTitle>
        </IndexTitleWrapper>

        <Content>
            <p>
                Hi there! My name is Fabian Tjoe-A-On, a 22 year old full stack
                (web) developer from Rotterdam, and I mostly do Javascript.
            </p>
            <br />
            <br />
            <h2>My output</h2>
            <StyledProjectTitle to="/projects/web-synthesizer">
                <h4>Web synthesizer with visualisation</h4>
            </StyledProjectTitle>
            <Link to="/blog/building-my-web-synth--handling-octaves">
                <div>
                    <span>Building my web synth: Handling octaves</span>
                </div>
            </Link>
            <br />
            <h4>Changeroo</h4>
            <br />
            <h4>WebGL Experiments</h4>
            <ul>
                <li>
                    <a
                        target="_blank"
                        href="https://fabiantjoeaon.github.io/sphere-perlin-vertex"
                    >
                        <span>Animated perlin noise shader</span>
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href="https://fabiantjoeaon.github.io/gravitational-attraction-marching-cubes"
                    >
                        <span>
                            Gooey effect with gravitational attraction using
                            marching cubes
                        </span>
                    </a>
                </li>
            </ul>
        </Content>
    </IndexContainer>
);

export default IndexPage;
