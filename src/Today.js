import React, {useState, useEffect} from 'react';
import config from './config';

const Today = () => {
    const [image, setImage] = useState([]);

    const todaysImage = async (date) => {
        const response = await fetch(`${config.API_URL}?api_key=${config.API_KEY}`);
        const data = await response.json();
        console.log(`Searching for today's image`);
    
        setImage(data);
    };

    // document.addEventListener("DOMContentLoaded", function() {
    //     todaysImage();
    //   });  

    useEffect(() => {
        todaysImage();
    }, []);

    return (
        <>
            <div>
                <h1>Today's Astronomy Picture Of the Day!</h1>
                <hr />
                {/* <button
                    onClick = {() => todaysImage()}>
                    Check it out!
                </button> */}
            </div>
            <hr />
            <div className = 'imageDisplay'>
                <div className = 'single-image'>
                    <div className = 'single-img'>
                        <img 
                            src = {image.url}
                            alt = {image.title}
                        />
                    </div>
                    <div className = 'single-date'>
                        <p>{image.date}</p>
                        <div className = 'single-title'>
                            <h3>{image.title}</h3>
                        </div>
                        <div className = 'single-explanation'>
                            <p>{image.explanation}</p>
                        </div>
                        <div className = 'single-copyright'>
                            <p>Copyright: {image.copyright}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Today;