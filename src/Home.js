import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <h3>Search for a <Link to = '/single'>single</Link> image, or search for a <Link to = 'range'>date range</Link>.</h3>
    );
}
export default Home;