import React from 'react';

const ImageDisplay = ({image}) => {
    return (
        <div className = 'single-image'>
            <div>
                <img 
                    src = {image.url}
                    alt = {image.title}
                />
            </div>
            <div>
                <p>{image.date}</p>
                <p>{image.copyright}</p>
                <p>{image.explanation}</p>
            </div>
        </div>
    )
}

export default ImageDisplay;