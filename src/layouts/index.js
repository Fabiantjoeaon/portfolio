import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled, { injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import renderScene from './scene';
import '../../node_modules/font-awesome/css/font-awesome.css';
import 'prism-themes/themes/prism-duotone-dark.css';

const Container = styled.div`
    z-index: -1;
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
`;

injectGlobal`
    body {
        
        /* background: -moz-linear-gradient(top,  #11e8bb 0%, #8200c9 100%);
        background: -webkit-linear-gradient(top,  #a6575f 0%,#bfe9ff 100%); 
        background: linear-gradient(to bottom,  #a6575f 0%,#718692 100%); */
        background: #fff;
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
    @media only screen and (max-width: 480px) {
        html {
            font-size: 100%;
        }
    }
    .gatsby-highlight {
        
    }
    .language-javascript {
        border: 1px solid #bfacfc;
    }
    code[class*="language-"], pre[class*="language-"] {
        background: rgba(255,255,255, 0.9) !important;
    }
    .comment {
        color: #909090 !important;
    }
`;

class TemplateWrapper extends Component {
    state = {
        isFirstVisit: false
    };

    componentDidMount() {
        renderScene(findDOMNode(this.root));
        this.setState({ isFirstVisit: false });

        if (!localStorage['isFirstVisit']) {
            localStorage.setItem('isFirstVisit', '1');
            this.setState({ isFirstVisit: true });
        }
        window.onbeforeunload = function() {
            window.scrollTo(0, 0);
        };
    }

    componentWillUnmount() {
        localStorage.removeItem('isFirstVisit');
    }

    render() {
        const { children, location } = this.props;

        return (
            <Container isFirstVisit={this.state.isFirstVisit}>
                <Helmet
                    title="Fabian Tjoe-A-On's Portfolio"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' }
                    ]}
                />
                <Scene ref={root => (this.root = root)} />
                <Content>
                    <Header isHome={location.pathname === '/'} />
                    <ContentInner
                        style={{
                            margin: '0 auto',
                            maxWidth: 960,
                            padding: '0px 1.0875rem 1.45rem',
                            paddingTop: 0
                        }}
                    >
                        {children()}
                    </ContentInner>
                </Content>
            </Container>
        );
    }
}

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
