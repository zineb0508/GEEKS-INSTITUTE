import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = () => {
  return (
    <Carousel
      showThumbs={true}
      showStatus={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
    >
      <div>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Paris" />
        <p className="legend">Paris</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1494526585095-c41746248156" alt="New York" />
        <p className="legend">New York</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e" alt="Sydney" />
        <p className="legend">Sydney</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1500534623283-312aade485b7" alt="Rome" />
        <p className="legend">Rome</p>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;

