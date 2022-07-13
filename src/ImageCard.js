import React from 'react';

const ImageCard = ({image}) => {
    return (
        <div className = 'card'>
            <div className = 'image-card'>
                <div>
                    <p>{image.date}</p>
                </div>
                <div>
                    <img 
                        src = {image.url}
                        alt = {image.title}
                    />
                </div>
                <div>
                    <span>{image.title}</span>
                    <p>{image.copyright}</p>
                </div>
            </div>
            <div className = 'see-more'>
                <p>See More</p>
            </div>
        </div>
    )
}

export default ImageCard;