import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled, { injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import renderScene from './scene';
import scrollTo from '../utils/scrollTo';
import '../../node_modules/font-awesome/css/font-awesome.css';
import 'prism-themes/themes/prism-duotone-dark.css';

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
`;

injectGlobal`
    html {
        /* background: linear-gradient(0deg, #fff, #ff9e69); */
    }
    body {
        
        background: -moz-linear-gradient(top,  #fff 0%, #ff9e69 100%); 
        background: -webkit-linear-gradient(top,  #fff 0%,  #ff9e69 100%); 
        background: linear-gradient(to bottom,  #fff 0%,  #ff9e69 100%);      

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
    @media only screen and (max-width: 480px) {
        html {
            font-size: 100%;
        }
    }
    img {
        width: 100%;
        border: 40px solid transparent;
        /* border-image: linear-gradient(to bottom right, #fff 0%, #bfacfc 100%);
        border-image-slice: 1; */
        margin: 10px 0px;
    }

    p {
        line-height: 2em;
    }
    /* .gatsby-highlight {
        
    } */
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
        isFirstVisit: false,
        scrolledPastHeader: false
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        renderScene(findDOMNode(this.root));
        const { clientHeight } = findDOMNode(this.header);

        window.addEventListener('scroll', e => {
            this.shouldSetHeaderBackground(clientHeight);
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
        //FIXME: Performance issue due to setState calls every scroll
        window.pageYOffset > clientHeight &&
        window.matchMedia('screen and (max-width: 1300px)').matches
            ? this.setState({
                  scrolledPastHeader: true
              })
            : this.setState({
                  scrolledPastHeader: false
              });
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
