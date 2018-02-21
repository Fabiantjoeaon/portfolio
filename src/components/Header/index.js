import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Navigation = styled.header`
    height: 90px;
    color: #fff;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-bottom: 50px;

    a:link,
    a:visited,
    a:focus,
    a:active {
        color: #fff;
        text-decoration: none;
    }
`;

const Name = styled(Link)`
    align-self: center;
    text-decoration: none;
    cursor: pointer;
    margin-left: 40px;
`;

const Icons = styled.div`
    margin-right: 40px;
    align-self: center;
    display: flex;
    width: 150px;
    justify-content: space-between;

    a:hover {
        ${IconWrapper} {
            color: red;
        }
    }
`;

const IconWrapper = styled.div`
    font-size: 1.2em;

    &:hover {
        // background-color: red;
        color: red;
    }
`;

const Header = ({ isHome }) => (
    <Navigation>
        <Name to="/">
            <span>{isHome ? 'Fabian Tjoe-A-On' : 'Back to home'}</span>
        </Name>

        <Icons>
            <a target="_blank" href="https://github.com/fabiantjoeaon">
                <IconWrapper>
                    <i className="fa fa-github" />
                </IconWrapper>
            </a>
            <a target="_blank" href="https://twitter.com/fabiantjoe_a_on">
                <IconWrapper>
                    <i className="fa fa-twitter" />
                </IconWrapper>
            </a>
            <a
                target="_blank"
                href="https://www.linkedin.com/in/fabiantjoeaon/"
            >
                <IconWrapper>
                    <i className="fa fa-linkedin" />
                </IconWrapper>
            </a>
            <a target="_blank" href="mailto:fabiantjoeaon@gmail.com">
                <IconWrapper>
                    <i className="fa fa-at" />
                </IconWrapper>
            </a>
        </Icons>
    </Navigation>
);

export default Header;
