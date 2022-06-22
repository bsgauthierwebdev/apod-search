import React from 'react';

const ImageDisplay = ({image}) => {
    return (
        <div>
            <img 
                src = {image.url}
                alt = {image.title}
            />
            <p>{image.date}</p>
            <p>{image.explanation}</p>
        </div>
    )
}

export default ImageDisplay;