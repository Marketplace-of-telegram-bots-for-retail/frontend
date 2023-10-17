import React from 'react';
import './ProductDescription.css';
import testVideo from '../../../images/video.jpg';

const ProductDescription = ({ card }) => {
  const { video } = card;

  return (
    <div className='product__description'>
      <p className="product__description-text">{card.description}</p>
      {video !== '' && (
        <div className='product__description-videos'>
          <h2 className='product__description-heading'>Видеообзор</h2>
          <iframe className='product__description-link' title='product-video' src={card.video || testVideo} frameBorder='0' allowFullScreen></iframe>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;