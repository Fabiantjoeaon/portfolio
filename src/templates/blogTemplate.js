import React from 'react';
import styled from 'styled-components';
import AnimatedTitle from '../components/styled/AnimatedTitle';

const Wrapper = styled.div`
    // TODO: Write custom transition status
`;

export default function Template({ data, transition }) {
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
                <h2>{frontmatter.date}</h2>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
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
