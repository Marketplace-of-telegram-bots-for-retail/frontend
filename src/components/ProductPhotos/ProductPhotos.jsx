import React from 'react';
import './ProductPhotos.css';
import photo from '../../images/Picture.jpg';

const ProductPhotos = () => {
  return (
    <div className='product-photos'>
      <ul className='product-photos__photos'>
        <li>
          <img className="product-photos__photo-small" src={photo} alt='фото товара' />
        </li>
        <li>
          <img className="product-photos__photo-small" src={photo} alt='фото товара' />
        </li>
        <li>
          <img className="product-photos__photo-small" src={photo} alt='фото товара' />
        </li>
      </ul>
      <img className="product-photos__photo-big" src={photo} alt='фото товара' />
    </div>
  );
};

export default ProductPhotos;