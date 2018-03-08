import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Navigation = styled.header`
    height: 70px;
    color: #fff;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    top: 0px;
    position: fixed;
    width: 100%;
    z-index: 99;
    transition: all 0.55s ease-in;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0%;
        display: block;
        background-color: #000;
        transition: height 0.3s cubic-bezier(1, 0.005, 0.33, 1);
        will-change: height;
        z-index: 98;
    }

    * {
        z-index: 99;
    }

    a:link,
    a:visited,
    a:focus,
    a:active {
        color: #fff;
        text-decoration: none;
    }

    &.active {
        &::before {
            height: 100%;
        }

        span,
        i {
            color: #fff !important;
        }
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

    @media (max-width: 800px) {
        width: 110px;

        ${IconWrapper} {
            font-size: 1em;
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

const TransitionText = styled.span`
    opacity: 1;
    transition: all 0.3s ease-out;
    // transition-delay: 1.4s;
    &.entering {
        opacity: 1;
    }
    &.entered {
        opacity: 1;
    }

    &.exiting {
        opacity: 0;
        transition-delay: 0s;
    }
    &.exited {
        opacity: 1;
        transition-delay: 0s;
    }
`;

const Header = ({ isHome, setHeaderRef, scrolledPastHeader }) => {
    return (
        <Navigation
            ref={setHeaderRef}
            className={scrolledPastHeader ? 'active' : ''}
        >
            <Name to="/">
                <TransitionText className={status}>
                    {isHome ? 'Fabian Tjoe-A-On' : 'Back to home'}
                </TransitionText>
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
};

export default Header;
