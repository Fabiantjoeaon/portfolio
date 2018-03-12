import React, {Component} from 'react';
import styled, {injectGlobal} from 'styled-components';
import WebFont from 'webfontloader';

import AnimatedTitle from '../components/styled/AnimatedTitle';
import Content from '../components/styled/Content';

injectGlobal`
.gatsby-resp-image-wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
    max-width: 100% !important;
}
.comment {
    color: #909090 !important;
}
tt,
code {
    background-color: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    font-family: 'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono', 'Liberation Mono', Menlo, Courier, monospace;
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
.embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    height: auto;
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
pre code {
    overflow-x: scroll;
    color: #fff !important;
}

.language-javascript {
    border: 1px solid #a5abff;
}

code[class*='language-'],
pre[class*='language-'] {
    color: #fff !important;
    background: rgba(20, 20, 20, 0.8) !important;
    word-wrap: normal !important;
}
img,
video {
    width: 100%;
    /* border-image: linear-gradient(to bottom right, #fff 0%, #bfacfc 100%);
    border-image-slice: 1; */
    margin: 30px 0px 50px;
}
`;

const AnimatedContent = styled(Content)`
    video {
        width: 100% !important;
        height: auto !important;
    }

    iframe {
        margin: 0 auto;
        display: block;
    }

    h2 {
        font-family: 'Asul', sans-serif;
        margin: 80px 0px 20px 0px;
    }

    p {
        code {
            background-color: #fff;
            padding: 5px;
            margin: 0px 5px 0px 7px;

            &::after {
                letter-spacing: -0.6em;
            }
        }
    }

    blockquote {
        border-left: 3px solid rgb(30, 30, 30);
        margin-left: 0px;
        padding-left: 1.45rem;
        p {
            font-family: 'Chivo', sans-serif;
            font-style: italic;

            font-weight: 100;
            color: rgb(30, 30, 30);
        }
    }

    li {
        line-height: 2em;
    }
`;

const BlogFooter = styled.div`
    border-top: 1px solid #000;
    width: 80%;
    margin: 50px auto 0px;
    height: 100px;
    // background-color: #fff;
    display: flex;
    justify-content: center;
    p {
        align-self: center;
        margin: 0px;
        font-weight: 400;
        font-style: italic;

        @media (max-width: 1000px) {
            padding-top: 20px;
        }
    }
`;

const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    // flex-flow: column nowrap;
    justify-content: center;

    p,
    ${AnimatedTitle} {
        // align-self: center;
    }
`;

const StyledTools = styled.div`
    display: flex;
    width: 80%;
    flex-flow: row wrap;

    justify-content: space-around;
    margin: 50px auto 50px auto;
    span {
        text-transform: uppercase;
        background-color: #fff;
        letter-spacing: 1px;
        padding: 10px 15px;
        color: #000;
        font-size: 0.9em;
        font-style: italic;
        border: 1px solid #000;
        margin: 10px 0px;
    }

    @media only screen and (max-width: 910px) {
        width: 100%;
        justify-content: center;
        margin: 0px auto 50px auto;

        span {
            margin: 10px;
            font-size: 0.7em;
        }
    }
`;

const Tools = ({ tools }) => (
    <StyledTools>{tools.map(t => <span key={t}>{t}</span>)}</StyledTools>
);

export default class Template extends Component {
    componentDidMount() {
        WebFont.load({
            google: {
              families: ['Asul', 'sans-serif']
            }
          });
    }
    render() {
        const { data, transition } = this.props;

        if (data) {
            const { markdownRemark } = data;
            const { frontmatter, html } = markdownRemark;

            return (
                <div
                    className={`blog-post-container ${transition &&
                        transition.status}`}
                    style={transition && transition.style}
                >
                    <div className="blog-post">
                        <TitleWrapper>
                            <AnimatedTitle
                                className={transition && transition.status}
                            >
                                {frontmatter.title}
                            </AnimatedTitle>
                        </TitleWrapper>
                        <AnimatedContent
                            className={`blog-post-content ${transition &&
                                transition.status}`}
                        >
                            {frontmatter.tools && (
                                <Tools tools={frontmatter.tools} />
                            )}
                            <div dangerouslySetInnerHTML={{ __html: html }} />
                            <BlogFooter>
                                <p>
                                    Thanks for reading! HMU if you have anything to
                                    talk about!
                                </p>
                            </BlogFooter>
                        </AnimatedContent>
                    </div>
                </div>
            );
        }

        return (
            <div
                className={`blog-post-container ${transition && transition.status}`}
                style={transition && transition.style}
            >
                <h1>Whoops! Something went wrong!</h1>
            </div>
        );
    }
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                tools
            }
        }
    }
`;
