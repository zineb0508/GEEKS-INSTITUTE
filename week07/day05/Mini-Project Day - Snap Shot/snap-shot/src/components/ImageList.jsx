// ImageList.jsx
import ImageCard from './ImageCard';
const ImageList = ({ images }) => (
  <div className="gallery">
    {images.map((img) => (
      <ImageCard key={img.id} image={img} />
    ))}
  </div>
);
export default ImageList;
