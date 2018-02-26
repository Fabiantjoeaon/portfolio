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
    font-size: 2.3em;
    // font-family: 'Chivo Italic',
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;

    &::before {
        left: -3px;
    }
`;

const StyledProjectTitle = styled(Link)`
    text-decoration: none;
    font-family: 'Chivo', sans-serif;
    font-size: 4em;
`;

const OutputTitle = styled.h1`
    text-align: center;
    font-style: italic;
    text-transform: uppercase;
    font-size: 2em;
`;

const IndexPage = ({ transition }) => (
    <IndexContainer
        style={transition && transition.style}
        className={transition.status}
    >
        <IndexTitleWrapper>
            <IndexTitle className={transition.status}>Hi there!</IndexTitle>{' '}
        </IndexTitleWrapper>
        <Content className={transition.status}>
            <p>
                I'm Fabian Tjoe - A - On, a 22 year old full-stack(web)
                developer from Rotterdam, and I mostly do Javascript. While
                being a sucker for well - designed, functional interfaces and
                web - apps, I also find my passion in trying to find ways to
                combine audio with code, which is in most cases WebGL. <br />
                <br />
                Oh and I love spinning vinyl! <br />
                <br />
                I am currently looking for an internship. If you're interested
                in any of my work, or just want to chat, holla!{' '}
            </p>{' '}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <IndexTitleWrapper>
                <IndexTitle>My output</IndexTitle>
            </IndexTitleWrapper>
            <br />
            <StyledProjectTitle to="/projects/web-synthesizer">
                Web synthesizer with visualisation
            </StyledProjectTitle>{' '}
            <br />
            <Link to="/blog/building-my-web-synth--handling-octaves">
                <div>
                    <span> Building my web synth : Handling octaves </span>{' '}
                </div>{' '}
            </Link>{' '}
            <br />
            <br />
            <StyledProjectTitle> Changeroo </StyledProjectTitle> <br />
            <br />
            <br />
            <StyledProjectTitle> WebGL Experiments </StyledProjectTitle> <br />
            <br />
            <br />
            <ul>
                <li>
                    <a
                        target="_blank"
                        href="https://fabiantjoeaon.github.io/sphere-perlin-vertex"
                    >
                        <span> Animated perlin noise shader </span>{' '}
                    </a>{' '}
                </li>{' '}
                <li>
                    <a
                        target="_blank"
                        href="https://fabiantjoeaon.github.io/gravitational-attraction-marching-cubes"
                    >
                        <span>
                            Gooey effect with gravitational attraction using
                            marching cubes{' '}
                        </span>{' '}
                    </a>{' '}
                </li>{' '}
            </ul>{' '}
        </Content>{' '}
    </IndexContainer>
);

export default IndexPage;