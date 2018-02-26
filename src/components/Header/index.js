import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { Transition } from 'react-transition-group';

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

const Header = ({ isHome }) => {
    return (
        <Transition timeout={0}>
            {status => (
                <Navigation>
                    <Name to="/">
                        <TransitionText className={status}>
                            {isHome ? 'Fabian Tjoe-A-On' : 'Back to home'}
                        </TransitionText>
                    </Name>

                    <Icons>
                        <a
                            target="_blank"
                            href="https://github.com/fabiantjoeaon"
                        >
                            <IconWrapper>
                                <i className="fa fa-github" />
                            </IconWrapper>
                        </a>
                        <a
                            target="_blank"
                            href="https://twitter.com/fabiantjoe_a_on"
                        >
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
                        <a
                            target="_blank"
                            href="mailto:fabiantjoeaon@gmail.com"
                        >
                            <IconWrapper>
                                <i className="fa fa-at" />
                            </IconWrapper>
                        </a>
                    </Icons>
                </Navigation>
            )}
        </Transition>
    );
};

export default Header;
