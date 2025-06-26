import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchImages } from '../api/pexels';
import ImageCard from '../components/ImageCard';
import '../components/ImageCard.css';

const Category = () => {
  const { type } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages(type).then(setImages);
  }, [type]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Category: {type}</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {images.map((img) => (
          <ImageCard key={img.id} image={img} />
        ))}
      </div>
    </div>
  );
};

export default Category;
