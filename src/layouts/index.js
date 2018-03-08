import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled, { injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import renderScene from './scene';
import interpolate from '../utils/colorInterpolate';
import scrollTo from '../utils/scrollTo';
import { saturateZeroOne, saturatePercentage } from '../utils/saturateValue';
import '../../node_modules/font-awesome/css/font-awesome.css';
import 'prism-themes/themes/prism-atom-dark.css';

const Container = styled.div`
    z-index: -1;
    // HINT: header height margin
    margin-top: 100px;
    padding-bottom: 70px;
`;

const Content = styled.div`
    z-index: 1;
    position: relative;
    min-height: 100vh;
`;

const Scene = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    canvas {
        width: 100%:
        height: 100%;
    }
`;

const ContentInner = styled.div`
    max-width: 960px !important;
    margin: 0 auto;

    padding: 0px 1.0875rem 1.45rem;

    @media only screen and (max-width: 1065px) and (min-width: 800px) {
        padding: 0px 5.0875rem 1.45rem;
    }

    // @media (max-width: 800px) {
    //     padding: 0px 1.0875rem 1.45rem;
    // }
`;

injectGlobal`
    html {
    }
    body {
        background: -moz-linear-gradient(top,  #fff 0%, #a5abff 100%); 
        background: -webkit-linear-gradient(top,  #fff 0%,  #a5abff 100%); 
        background: linear-gradient(to bottom,  #fff 0%,  #a5abff 100%);      

        &.entering {
            background-size: 100% 100%;
        }
         
         &.exiting {
            background-size: 400% 400%;
         }
        transition: all 0.5s ease-out;
        
    }
    * {
        color: #000;
        -webkit-font-smoothing: antialiased;
    }
    tt,
    code {
        background-color: hsla(0, 0%, 0%, 0.04);
        border-radius: 3px;
        font-family: 'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono',
            'Liberation Mono', Menlo, Courier, monospace;
        padding: 0;
        padding-top: 0.2em;
        padding-bottom: 0.2em;
    }
    pre code {
        background: none;
        line-height: 1.42;
    }
    code:before,
    code:after,
    tt:before,
    tt:after {
        letter-spacing: -0.2em;
        content: ' ';
    }
    pre code:before,
    pre code:after,
    pre tt:before,
    pre tt:after {
        content: '';
    }

    iframe {
        border: 0px !important;
    }
    @media only screen and (max-width: 480px) {
        html {
            font-size: 100%;
        }
    }
    img, video {
        width: 100%;
        
        /* border-image: linear-gradient(to bottom right, #fff 0%, #bfacfc 100%);
        border-image-slice: 1; */
        margin: 10px 0px;
    }

    @media (max-width: 900px) {
        img, video {
            border: 0px;
            margin: 30px 0px;
        }
    }

    p {
        line-height: 2em;
    }
    /* .gatsby-highlight {
        
    } */
    .language-javascript {
        border: 1px solid #a5abff;
    }
    code[class*="language-"], pre[class*="language-"] {
        color: #fff !important;
        background: rgba(20,20,20, 0.8) !important;
    }
    .interpolation {
        color: #fff;
    }
    pre {
        code {
            overflow-x: scroll;
            color: #fff !important;
        }
    }
    .comment {
        color: #909090 !important;
    }
`;

class TemplateWrapper extends Component {
    state = {
        isFirstVisit: false,
        scrolledPastHeader: false
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        renderScene(findDOMNode(this.root));
        const { clientHeight } = findDOMNode(this.header);
        const sceneColorMap = interpolate(['#fff', '#a5abff']);
        const planeColorMap = interpolate(['#a5abff', '#fff']);

        window.addEventListener('scroll', e => {
            this.shouldSetHeaderBackground(clientHeight);
            this.updateSceneColorInterpolations(sceneColorMap, planeColorMap);
        });
        window.addEventListener('resize', e => {
            this.shouldSetHeaderBackground(clientHeight);
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.shouldSetHeaderBackground);
        window.removeEventListener('resize', this.shouldSetHeaderBackground);
    }

    setHeaderRef = header => {
        this.header = header;
    };

    shouldSetHeaderBackground(clientHeight) {
        let scrolledPastHeader;

        // TODO: Width should be variable: contentwidth minus the sides
        if (window.matchMedia('screen and (max-width: 1300px)').matches)
            scrolledPastHeader = window.pageYOffset > clientHeight;

        if (this.state.scrolledPastHeader !== scrolledPastHeader)
            this.setState({ scrolledPastHeader });
    }

    updateSceneColorInterpolations(sceneColorMap, planeColorMap) {
        const { body, documentElement } = document;
        const height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            documentElement.clientHeight,
            documentElement.scrollHeight,
            documentElement.offsetHeight
        );

        const scrollTop = documentElement.scrollTop || body.scrollTop;

        const val = saturateZeroOne(0, height, scrollTop);
        window.sceneColor = sceneColorMap(val);
        window.planeColor = planeColorMap(val);
    }

    render() {
        const { children, location } = this.props;
        const { scrolledPastHeader } = this.state;

        return (
            <Container>
                <Helmet
                    title="Fabian Tjoe-A-On's Portfolio"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' }
                    ]}
                />
                <Scene ref={root => (this.root = root)} />
                <Content>
                    <Header
                        setHeaderRef={this.setHeaderRef}
                        isHome={location.pathname === '/'}
                        scrolledPastHeader={scrolledPastHeader}
                    />
                    <ContentInner style={{}}>{children()}</ContentInner>
                </Content>
            </Container>
        );
    }
}

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
