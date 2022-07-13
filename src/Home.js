import React from 'react';
import {Link} from 'react-router-dom';
import config from './config';

const Home = () => {
    return (
        <>
            <h3>On June 16th, 1995, NASA published their first APOD, or Astronomy Picture Of the Day. Since that day, NASA has published a unique astronomy image for the public to view, as well as provide a brief explanation written by a professional astronomoer.</h3>
            <h3>You can use the APOD Search tool to explore the catalog of images, either by looking up a single image or searching a range of dates.</h3>
            <img 
                src = 'https://apod.nasa.gov/apod/image/2207/MilkWayTree.jpg'
                alt = 'APOD' 
            />
        </>
    );
}
export default Home;