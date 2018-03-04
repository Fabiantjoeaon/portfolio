import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import AnimatedTitle from '../components/styled/AnimatedTitle';
import Content from '../components/styled/Content';

const IndexContainer = styled.div``;

const IndexContent = styled.div`
    // min-height: 50vh;
    margin-top: 150px;
    
    p {
        margin-bottom: 250px;
    }

    // ${IndexTitleWrapper} {
    //     margin-top: 50px;
    // }
`;

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

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const IndexTitle = styled(AnimatedTitle)`
    font-size: 2.3em;
    text-align: center;
    // font-family: 'Chivo Italic',
    font-weight: 700;
    margin-bottom: 30px;
    text-transform: uppercase;
    letter-spacing: 1px;

    &::before {
        left: -3px;
    }
`;

const StyledProjectTitle = styled.h4`
    text-decoration: none;
    font-family: 'Chivo', sans-serif;
    font-size: 4em;
    font-weight: 100;
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
            <IndexContent>
                <p>
                    I'm Fabian Tjoe - A - On, a 22 year old full-stack(web)
                    developer from Rotterdam, and I mostly do Javascript. While
                    being a sucker for well - designed, functional interfaces
                    and web - apps, I also find my passion in trying to find
                    ways to combine audio with code, which is in most cases
                    WebGL. <br />
                    <br />
                    Oh and I love spinning vinyl, if you're into electronic music, check out my recordings :) <br />
                    
                    <br />
                    I am currently looking for an internship. If you're
                    interested in any of my work, or just want to chat, holla!{' '}
                </p>{' '}
            </IndexContent>
            <IndexTitleWrapper>
                <IndexTitle>My output</IndexTitle>
            </IndexTitleWrapper>
            <StyledProjectTitle>
                Recordings
            </StyledProjectTitle>{' '}
            <br />
            <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2Ffabian-tjoe-a-on%2Fobscurityelation%2F" frameborder="0" ></iframe>
            <br />
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/393574845&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <br />
            <br />
            <StyledLink to="/projects/web-synthesizer">
                <StyledProjectTitle>
                    Web synthesizer with visualisation
                </StyledProjectTitle>{' '}
            </StyledLink>
            <br />
            <Link to="/blog/building-my-web-synth--rendering-knobs">
                <div>
                    <span> Rendering responsive synthesizer knobs using React and D3 </span>{' '}
                </div>{' '}
            </Link>{' '}
            <br />
            <Link to="/blog/building-my-web-synth--handling-octaves">
                <div>
                    <span> Handling octaves with Redux </span>{' '}
                </div>{' '}
            </Link>{' '}
            
            <br />
            <br />
            <StyledLink to="/projects/changeroo">
                <div>
                    <StyledProjectTitle> Changeroo </StyledProjectTitle>
                </div>
            </StyledLink>
            
            <br />
            <StyledProjectTitle> WebGL Experiments </StyledProjectTitle> <br />
            
            <div>
                <a
                    target="_blank"
                    href="https://fabiantjoeaon.github.io/sphere-perlin-vertex"
                >
                    <span> Animated perlin noise shader </span>{' '}
                </a>{' '}
            </div>
            <br/>
            <div>
                <a
                    target="_blank"
                    href="https://fabiantjoeaon.github.io/gravitational-attraction-marching-cubes"
                >
                    <span>
                        Gooey effect with gravitational attraction using
                        marching cubes{' '}
                    </span>{' '}
                </a>{' '}
            </div>
                
            
        </Content>{' '}
    </IndexContainer>
);

export default IndexPage;
