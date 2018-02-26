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
        // font-style: italic;
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
                        <p>Follow me on twitter!</p>
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
