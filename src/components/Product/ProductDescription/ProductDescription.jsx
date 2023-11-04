import React from 'react';
import { useSelector } from 'react-redux';
import './ProductDescription.css';
import { getProductCardData } from '../../../store';

const ProductDescription = () => {
  const { description, video } = useSelector(getProductCardData).productCard;

  return (
    <div className='product__description description'>
      <p className='description__text'>{description}</p>
      {video && (
        <div className='description__videos'>
          <h2 className='description__heading'>Видеообзор</h2>
          <iframe
            className='description__link'
            title='product-video'
            src={video}
            frameBorder='0'
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
