import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Navigation = styled.header`
    height: 80px;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    margin-left: 40px;

    a {
        align-self: center;
        text-decoration: none;
    }

    a:link,
    a:visited,
    a:focus,
    a:active {
        color: #fff;
        text-decoration: none;
    }
`;

const Header = () => (
    <Navigation>
        <a href="/">Fabian Tjoe-A-On</a>
    </Navigation>
);

export default Header;
