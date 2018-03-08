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
    width: 100%;

    justify-content: space-around;
    margin: 30px 0px 50px;
    span {
        text-transform: uppercase;
        background-color: #000;
        letter-spacing: 1px;
        padding: 10px 15px;
        color: #fff;
    }
`;
const Tools = ({ tools }) => (
    <StyledTools>{tools.map(t => <span>{t}</span>)}</StyledTools>
);

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
                    <TitleWrapper>
                        <AnimatedTitle className={transition.status}>
                            {frontmatter.title}
                        </AnimatedTitle>
                    </TitleWrapper>
                    <AnimatedContent
                        className={`blog-post-content ${transition.status}`}
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
                tools
            }
        }
    }
`;
