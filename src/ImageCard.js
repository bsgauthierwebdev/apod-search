import React from 'react';

const ImageCard = ({image}) => {
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

export default ImageCard;