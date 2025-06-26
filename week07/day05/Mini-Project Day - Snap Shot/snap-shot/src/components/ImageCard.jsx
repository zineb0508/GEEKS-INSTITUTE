import React from 'react';
import './ImageCard.css';

const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img
        src={image.src.medium}
        alt={image.alt}
        className="image-card-img"
      />
    </div>
  );
};

export default ImageCard;

