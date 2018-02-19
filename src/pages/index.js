import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ transition }) => (
    <div style={transition && transition.style}>
        <h1
            onClick={() => {
                console.log('clicked');
            }}
        >
            Welcome to my portfolio!
        </h1>
        <Link to="/blog/building-my-web-synth--handling-octaves">
            <span>Building my web synth: Handling octaves</span>
        </Link>
    </div>
);

export default IndexPage;
