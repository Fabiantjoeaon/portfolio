import React from 'react';
import styled from 'styled-components';

import AnimatedTitle from '../components/styled/AnimatedTitle';
import Content from '../components/styled/Content';

const Wrapper = styled.div`
    // TODO: Write custom transition status
`;

const AnimatedContent = styled(Content)`
    video {
        width: 100% !important;
        height: auto !important;
    }

    h2 {
        font-family: 'Asul', sans-serif;
        margin: 30px 0px 20px 0px;
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
        font-weight: 900;
        font-style: italic;
    }
`;

export default function Template({ data, transition, ...props }) {
    if (data) {
        const { markdownRemark } = data;
        const { frontmatter, html } = markdownRemark;

        return (
            <Wrapper
                className={`blog-post-container ${transition.status}`}
                style={transition && transition.style}
            >
                <div className="blog-post">
                    <AnimatedTitle className={transition.status}>
                        {frontmatter.title}
                    </AnimatedTitle>
                    <AnimatedContent
                        className={`blog-post-content ${transition.status}`}
                    >
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                        <BlogFooter>
                            <p>
                                Thanks for reading! HMU if you have anything to
                                talk about!
                            </p>
                        </BlogFooter>
                    </AnimatedContent>
                </div>
            </Wrapper>
        );
    }

    return (
        <Wrapper
            className={`blog-post-container ${transition.status}`}
            style={transition && transition.style}
        >
            <h1>Whoops! Something went wrong!</h1>
        </Wrapper>
    );
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`;
