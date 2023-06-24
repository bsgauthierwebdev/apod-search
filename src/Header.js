import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className = 'Header'>
                <div className = 'Header-blocking'>
                    <div className = 'Header-blocking-home-link'>
                        <Link to = '/'>
                            <span className = 'Header-blocking-title'>
                                Welcome to APOD Search!
                            </span>
                        </Link>
                    </div>
                    <div className = 'Header-blocking-nav'>
                        <div className = 'Header-blocking-nav-links'>
                            <span>
                                <Link to = '/test'>Test</Link>
                                {' | '}
                                <Link to = '/today'>Today's Image</Link>
                                {' | '}
                                <Link to = '/single'>Search Images</Link>
                                {' | '}
                                <Link to = '/range'>Search Range</Link>
                            </span>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </>


        // <>
        //     <h1>Welcome to APOD Search!</h1>
            // <h2><Link to = '/today'>Click here</Link> to see today's Astronomy Picture Of the Day</h2>
            // <h2><Link to = '/single'>Click here</Link> to search for a single image.</h2>
            // <h2><Link to = '/range'>Click here</Link> to see images from a range of dates.</h2>
        // </>
    )
}

export default Header;