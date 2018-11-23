import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import styled from "styled-components";
import Link, { navigateTo, withPrefix } from "gatsby-link";

import AnimatedTitle from "../components/styled/AnimatedTitle";
import Content from "../components/styled/Content";
import resume from "../resume.pdf";

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
    letter-spacing: 4px;

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
    font-family: "Chivo", sans-serif;
    font-size: 3.5em;
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
    will-change: transform;

    &::before {
        content: "";
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

    @media (max-width: 1065px) {
        font-size: 3em;
    }

    @media (max-width: 800px) {
        font-size: 2.2em;
    }
`;

const StyledProjectWrapper = styled.div`
    cursor: pointer;
    margin-bottom: 10px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    &:hover ${StyledProjectTitle} {
        color: #fff;
        transform: translate3D(0px, 0px, 0px);
        &::before {
            width: 100%;
        }
    }
`;

const OutputTitle = styled.h1`
    text-align: center;
    font-style: italic;
    text-transform: uppercase;
    font-size: 2em;
`;

const Fade = styled.div`
    transition: all 0.8s cubic-bezier(1, 0.005, 0.35, 1);
    will-change: transform;
    opacity: 0;
    max-height: 0px;

    &.entering,
    &.entered {
        opacity: 1;
        max-height: 500px;

        a,
        span {
            transform: translate3D(40px, 0px, 0px);
            opacity: 1;
        }

        a:nth-of-type(1) {
            transition-delay: 0.3s;
        }

        a:nth-of-type(2) {
            transition-delay: 0.4s;
        }
        a:nth-of-type(3) {
            transition-delay: 0.5s;
        }

        span:nth-of-type(1) {
            transition-delay: 0.3s;
        }

        span:nth-of-type(2) {
            transition-delay: 0.4s;
        }

        span:nth-of-type(3) {
            transition-delay: 0.5s;
        }
    }

    a,
    span {
        display: block;
        opacity: 0;
        margin: 20px 0px;
        transform: translate3D(-50px, 0px, 0px);
        transition: all 0.7s cubic-bezier(0.14, 1, 0.34, 1);
        will-change: transform;
    }
`;

const ProjectWrapper = ({ children, title, activeId, id, setActiveId }) => (
    <StyledProjectWrapper
        onClick={() => {
            setActiveId(id);
        }}
    >
        <div>
            <StyledProjectTitle>{title}</StyledProjectTitle>
        </div>
        <Transition in={activeId === id} timeout={0}>
            {status => <Fade className={status}>{children}</Fade>}
        </Transition>
    </StyledProjectWrapper>
);

class IndexPage extends Component {
    state = {
        activeId: null
    };

    setActiveId = activeId => {
        this.setState({ activeId });
    };

    getAge = dateString => {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    render() {
        const { transition } = this.props;
        const { setActiveId } = this;
        return (
            <IndexContainer
                style={transition && transition.style}
                className={transition && transition.status}
            >
                <IndexTitleWrapper>
                    <IndexTitle className={transition && transition.status}>
                        Sup?
                    </IndexTitle>{" "}
                </IndexTitleWrapper>
                <Content className={transition && transition.status}>
                    <IndexContent>
                        <p>
                            I'm Fabian Tjoe-A-On, a {this.getAge("1995/04/01")}{" "}
                            year old full-stack(web) developer from Rotterdam,
                            and I mostly do Javascript. While I adore
                            well-designed, functional interfaces and web-apps, I
                            also find my passion in trying to find ways to
                            combine audio with code, which is in most cases
                            WebGL. You can download my resume&nbsp;
                            <a href={resume} download>
                                here.
                            </a>
                            <br />
                            <br />
                            Scroll down to have a look at some of my projects
                            and blog posts. Oh and I love spinning vinyl, if
                            you're into electronic music, check out my
                            recordings :) <br />
                        </p>{" "}
                    </IndexContent>
                    <IndexTitleWrapper>
                        <IndexTitle>My output</IndexTitle>
                    </IndexTitleWrapper>
                    <ProjectWrapper
                        title="WebGL Experiments"
                        activeId={this.state.activeId}
                        id={3}
                        setActiveId={setActiveId}
                    >
                        <a
                            style={{
                                display: "block",
                                textDecoration: "none"
                            }}
                            target="_blank"
                            href="https://fabiantjoeaon.github.io/grid-vertex-displacement"
                        >
                            WebGL image & video manipulation (DESKTOP ONLY!)
                            (regl){" "}
                        </a>
                        <a
                            style={{
                                display: "block",
                                textDecoration: "none"
                            }}
                            target="_blank"
                            href="https://fabiantjoeaon.github.io/grid-vertex-displacement"
                        >
                            Vertex displacement on a grid (regl){" "}
                        </a>
                        <a
                            style={{
                                display: "block",
                                textDecoration: "none"
                            }}
                            target="_blank"
                            href="https://fabiantjoeaon.github.io/sphere-perlin-vertex"
                        >
                            Animated perlin noise shader{" "}
                        </a>
                        <a
                            style={{
                                display: "block",
                                textDecoration: "none"
                            }}
                            target="_blank"
                            href="https://fabiantjoeaon.github.io/gravitational-attraction-marching-cubes"
                        >
                            Gooey effect with gravitational attraction using
                            marching cubes{" "}
                        </a>{" "}
                    </ProjectWrapper>
                    <ProjectWrapper
                        activeId={this.state.activeId}
                        id={1}
                        title="Web synthesizer with visualisation"
                        setActiveId={setActiveId}
                    >
                        <span
                            onClick={e => {
                                e.preventDefault();
                                navigateTo("/projects/web-synthesizer");
                            }}
                        >
                            To project &rarr;
                        </span>
                        <span
                            onClick={e => {
                                e.preventDefault();
                                navigateTo(
                                    "/blog/building-my-web-synth--rendering-knobs"
                                );
                            }}
                        >
                            Rendering responsive synthesizer knobs using React
                            and D3{" "}
                        </span>{" "}
                        <span
                            onClick={e => {
                                e.preventDefault();
                                navigateTo(
                                    "/blog/building-my-web-synth--handling-octaves"
                                );
                            }}
                        >
                            Handling octaves with Redux{" "}
                        </span>
                    </ProjectWrapper>
                    <ProjectWrapper
                        title="Changeroo"
                        activeId={this.state.activeId}
                        id={2}
                        setActiveId={setActiveId}
                    >
                        <StyledLink to="/projects/changeroo">
                            To project &rarr;
                        </StyledLink>
                    </ProjectWrapper>

                    <ProjectWrapper
                        title="Internship portfolio"
                        activeId={this.state.activeId}
                        id={4}
                        setActiveId={setActiveId}
                    >
                        <StyledLink to="/internship-portfolio/optimizing-to-pwa">
                            Optimizing my portfolio to a Progressive Web App
                        </StyledLink>
                    </ProjectWrapper>
                    <StyledProjectWrapper>
                        <StyledProjectTitle>Recordings</StyledProjectTitle>{" "}
                        <br />
                        <br />
                        <iframe
                            width="100%"
                            height="60"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Ffabian-tjoe-a-on%2Ffreestyling-from-the-bedroom%2F"
                            frameborder="0"
                        />
                        <br />
                        {/* <iframe
                            width="100%"
                            height="60"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Ffabian-tjoe-a-on%2Fobscurityelation%2F"
                            frameBorder="0"
                        />
                        <br /> */}
                        <iframe
                            width="100%"
                            height="60"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Ffabian-tjoe-a-on%2Flate_night_session%2F"
                            frameBorder="0"
                        />
                        <br />
                    </StyledProjectWrapper>
                </Content>{" "}
            </IndexContainer>
        );
    }
}

export default IndexPage;
