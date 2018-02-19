import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled, { injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import renderScene from './scene';

const Container = styled.div`
    z-index: -1;
`;

const Content = styled.div`
    z-index: 1;
    position: relative;
`;

const Scene = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    max-height: 100vh;
    max-width: 100vw;

    canvas {
        width: 100%:
        height: 100%;
    }
`;

const ContentInner = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

injectGlobal`
    * {
        color: #fff;
        
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

`;

class TemplateWrapper extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        renderScene(findDOMNode(this.root));
    }

    render() {
        const { children } = this.props;
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
                    <Header />
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
