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

    @media (max-width: 1065px) {
        p {
            margin-bottom: 150px;
        }
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


    @media (max-width: 1065px) {
        margin-top: 50px;
        margin-bottom: 0px;
    }
`;

const StyledProjectTitle = styled.span`
    text-decoration: none;
    font-family: 'Chivo', sans-serif;
    font-size: 4em;
    font-weight: 100;
    display: inline-block;
    box-decoration-break: clone;
    font-style: italic;
    font-weight: 700;
    color: #000;
    display: inline-block;
    -webkit-box-decoration-break: clone;
    margin: 40px 0px 20px;
    padding: 5px 25px;
    transform: translate3D(-25px, 0px, 0px);
    position: relative;
    z-index: 2;

    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        z-index: -1;
        background-color: #000;
        width: 0%;
        
        transition: all 0.5s 0.1s cubic-bezier(0.14, 1, 0.34, 1);
    }

    transition: all 0.7s cubic-bezier(0.14, 0.7, 0.34, 1);

    &:hover, &:active {
        color: #fff;
        transform: translate3D(0px, 0px, 0px);
        &::before {
            width: 100%;
        }
    }

    @media (max-width: 1065px) {
        font-size: 3em;
    }

    @media (max-width: 800px) {
        font-size: 2.2em;
    }
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
                    Scroll down to have a look at some of my projects and blog posts.
                    Oh and I love spinning vinyl, if you're into electronic music, check out my recordings :) <br />
                    
                    <br />
                    I am currently looking for an internship. If you're
                    interested in any of my work, or just want to chat, holla!{' '}
                </p>{' '}
            </IndexContent>
            <IndexTitleWrapper>
                <IndexTitle>My output</IndexTitle>
            </IndexTitleWrapper>
            
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
            <br />
            <StyledProjectTitle>
                Recordings
            </StyledProjectTitle>{' '}
            <br />
            <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2Ffabian-tjoe-a-on%2Fobscurityelation%2F" frameBorder="0" ></iframe>
            <br />
            <iframe width="100%" height="300" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/393574845&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            
        </Content>{' '}
    </IndexContainer>
);

export default IndexPage;
