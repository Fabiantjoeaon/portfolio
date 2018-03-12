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

        strong,
        span
         {
            color: #fff !important;
        }

        svg {
            path {
                fill: #fff;
            }
        }
    }
`;

const Name = styled(Link)`
    align-self: center;
    text-decoration: none;
    cursor: pointer;
    margin-left: 45px;
`;

const Icons = styled.div`
    margin-right: 45px;
    align-self: center;
    display: flex;
    width: 150px;
    justify-content: space-between;

    

    @media (max-width: 800px) {
        width: 140px;

        
        
    }
`;

const Icon = styled.div`
    width: 20px;
    height: 20px;

    svg {
        width: 100%;
        height: 100%;

        path {
            will-change: fill;
            transition: fill 0.3s ease-out;
        }
    }

    @media (max-width: 800px) {
        width: 16px;
        height: 16px;

        
        
    }
`;

const Header = ({
    isHome,
    setHeaderRef,
    scrolledPastHeader,
    isSmallScreen
}) => (
    <Navigation
        ref={setHeaderRef}
        className={scrolledPastHeader ? 'active' : ''}
    >
        <Name to="/">
            {isHome ? (
                isSmallScreen ? (
                    <strong>F&nbsp;&nbsp;T</strong>
                ) : (
                    <span>Fabian Tjoe-A-On</span>
                )
            ) : (
                <span>Home</span>
            )}
        </Name>

        <Icons>
            <a target="_blank" href="https://github.com/fabiantjoeaon">    
                <Icon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.5 438.5">
                        <path d="M409.1 114.6A218.3 218.3 0 0 0 219.3 5.4 218.3 218.3 0 0 0 0 224.7c0 47.7 14 90.7 41.8 128.8a216 216 0 0 0 108 79.3c5.2 1 9 .2 11.5-2 2.5-2.3 3.7-5.2 3.7-8.6a6589.9 6589.9 0 0 0-.3-40.8l-6.5 1.1a120.7 120.7 0 0 1-35.7-1c-6.9-1.2-13.3-4-19.2-8.5a36.2 36.2 0 0 1-12.5-17.6l-2.9-6.6a71.3 71.3 0 0 0-9-14.5c-4-5.4-8.2-9-12.4-10.9l-2-1.4a21 21 0 0 1-6.3-7.4c-.5-1.4 0-2.5 1.5-3.3 1.5-.9 4.3-1.3 8.2-1.3l5.8.9c3.8.7 8.5 3 14 6.8a46 46 0 0 1 14 14.9 50.3 50.3 0 0 0 15.8 17.8c6.2 4 12.4 6.1 18.7 6.1a60.2 60.2 0 0 0 29.1-5.7 46.3 46.3 0 0 1 14-29.4 195.5 195.5 0 0 1-29.3-5.1c-8.6-2.3-17.6-6-26.8-11.2a76.9 76.9 0 0 1-23-19 92 92 0 0 1-15-30 142.6 142.6 0 0 1-5.8-42.9c0-23 7.5-42.6 22.5-58.8-7-17.3-6.4-36.7 2-58.3 5.5-1.7 13.7-.4 24.6 3.9a171.7 171.7 0 0 1 36 18.7 203 203 0 0 1 109.6 0l10.8-6.8c7.5-4.6 16.2-8.8 26.3-12.6 10-3.8 17.8-4.9 23.1-3.1 8.6 21.5 9.4 40.9 2.3 58.2a83.3 83.3 0 0 1 22.6 58.8c0 16.2-2 30.5-5.9 43a88.4 88.4 0 0 1-15.1 30 79.8 79.8 0 0 1-23.1 19c-9.3 5-18.2 8.8-26.9 11a187 187 0 0 1-29.2 5.2c9.9 8.6 14.8 22.1 14.8 40.6v60.2c0 3.4 1.2 6.3 3.6 8.6 2.4 2.2 6.1 3 11.3 2a215 215 0 0 0 108-79.3 213.1 213.1 0 0 0 41.8-128.9c0-39.7-9.8-76.4-29.4-110z"/>
                    </svg>
                </Icon>
            </a>
            <a target="_blank" href="https://twitter.com/fabiantjoe_a_on">
                <Icon>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 612 612">
                        <path fill="#010002" d="M612 116c-23 10-47 17-72 20 26-15 46-40 55-69-24 14-51 24-80 30a125 125 0 0 0-217 86c0 10 1 19 3 29-104-6-196-56-258-132a125 125 0 0 0 39 168c-21-1-40-6-57-16v2c0 61 43 111 100 123a127 127 0 0 1-56 2c16 50 62 86 117 87A252 252 0 0 1 0 498a355 355 0 0 0 550-301l-1-16c25-17 46-40 63-65z"/>
                    </svg>
                </Icon>
            </a>
            <a
                target="_blank"
                href="https://www.linkedin.com/in/fabiantjoeaon/"
            >   
                <Icon>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 430 430">
                        <path d="M430 262v159h-92V272c0-37-13-63-47-63-25 0-40 18-47 34-3 6-3 14-3 23v155h-92V143h92v40h-1 1c12-19 34-46 83-46 61 0 106 39 106 125zM52 10C21 10 0 30 0 57s20 48 51 48h1c32 0 52-21 52-48-1-27-20-47-52-47zM5 421h93V143H5v278z"/>
                    </svg>
                </Icon> 
            </a>
            <a target="_blank" href="mailto:fabiantjoeaon@gmail.com">
                <Icon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.2 490.2">
                        <path d="M421 61.8C376.1 20.6 320.5 0 254.1 0 184.6 0 125 23.4 76 70.3S2 175.5 2 245.3c0 66.9 23.4 124.4 70.1 172.6 47 48.2 110 72.3 189.2 72.3 47.9 0 94.8-9.8 140.8-29.5a29.9 29.9 0 0 0-23.4-54.9 296.2 296.2 0 0 1-117.5 25.8c-60.8 0-107.9-18.5-141.3-55.6-33.3-37-50-80.5-50-130.4 0-54.2 18-99.4 53.6-135.7A177.4 177.4 0 0 1 255 55.5c48 0 88.4 14.9 121.4 44.7S426 167.5 426 212.7c0 30.9-7.6 56.7-22.7 77.2-15 20.6-30.8 30.8-47 30.8-8.9 0-13.3-4.7-13.3-14.2 0-7.7.6-16.7 1.7-27.1l18.6-152.1h-64l-4 14.9a83 83 0 0 0-53.7-20c-30.8 0-57.2 12.3-79 36.8-22 24.5-33 56.1-33 94.7 0 37.7 9.7 68.2 29.2 91.3 19.5 23.2 43 34.7 70.3 34.7a79.7 79.7 0 0 0 62.8-30.8c13.1 19.7 32.4 29.5 58 29.5 37.4 0 69.8-16.3 97.1-49 27.3-32.6 41-72 41-118.1 0-58.4-22.3-108.3-67-149.5zM273.5 291.9c-11.4 15.2-24.9 22.9-40.6 22.9-10.6 0-19.2-5.6-25.7-16.8a81 81 0 0 1-10-41.8c0-20.6 4.6-37.2 13.8-49.8s20.7-19 34.3-19c11.8 0 22.3 4.7 31.5 14.2s13.8 22.1 13.8 37.9a86.6 86.6 0 0 1-17.1 52.4z"/>
                    </svg>
                </Icon>
            </a>
        </Icons>
    </Navigation>
);

export default Header;
