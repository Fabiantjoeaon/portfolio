import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Navigation = styled.header`
    height: 80px;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 50px;
    a {
        align-self: center;
        text-decoration: none;
        cursor: pointer;
        margin-left: 40px;
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
        <Link to="/">
            <span>Fabian Tjoe-A-On</span>
        </Link>
    </Navigation>
);

export default Header;
