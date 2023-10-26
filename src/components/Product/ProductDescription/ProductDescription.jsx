import React from 'react';
import { useSelector } from 'react-redux';
import './ProductDescription.css';
import testVideo from '../../../images/video.jpg';

const ProductDescription = () => {
  const { productCard } = useSelector((state) => state.productCardData);
  const { video } = productCard;

  return (
    <div className='product__description'>
      <p className='product__description-text'>{productCard.description}</p>
      {video !== '' && (
        <div className='product__description-videos'>
          <h2 className='product__description-heading'>Видеообзор</h2>
          <iframe
            className='product__description-link'
            title='product-video'
            src={video || testVideo}
            frameBorder='0'
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
