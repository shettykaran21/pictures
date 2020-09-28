import React from 'react';
import ImageCard from './ImageCard';
import '../App.css';

const ImageList = ({ images }) => {
  const imageList = images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));

  return <div className="image-list">{imageList}</div>;
};

export default ImageList;
