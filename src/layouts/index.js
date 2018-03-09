import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled, { injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css';
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

// injectGlobal`

// `;

class TemplateWrapper extends Component {
    state = {
        isFirstVisit: false,
        scrolledPastHeader: false,
        isSmallScreen: false
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        renderScene(findDOMNode(this.root), window);
        const { clientHeight } = findDOMNode(this.header);
        const sceneColorMap = interpolate(['#fff', '#a5abff']);
        const planeColorMap = interpolate(['#a5abff', '#fff']);

        window.addEventListener('scroll', e => {
            this.shouldSetHeaderBackground(clientHeight);
            this.updateSceneColorInterpolations(sceneColorMap, planeColorMap);
        });
        window.addEventListener('resize', e => {
            this.shouldSetHeaderBackground(clientHeight);
            this.detectSmallScreen();
        });
        this.updateSceneColorInterpolations(sceneColorMap, planeColorMap);
        this.shouldSetHeaderBackground(clientHeight);
        this.detectSmallScreen();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.shouldSetHeaderBackground);
        window.removeEventListener('resize', this.shouldSetHeaderBackground);
    }

    detectSmallScreen() {
        const matches = window.matchMedia('(max-width: 992px)').matches;

        if (!this.state.isSmallScreen && matches)
            this.setState({ isSmallScreen: true });
        if (this.state.isSmallScreen && !matches)
            this.setState({ isSmallScreen: false });
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
        const { scrolledPastHeader, isSmallScreen } = this.state;

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
                        isSmallScreen={isSmallScreen}
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
