import React, { useState } from 'react';
import './ProductDetail.css';
import ProductPhotos from '../ProductPhotos/ProductPhotos';
import award from '../../images/Pixel-36.svg';
import ProductDescription from '../ProductDescription/ProductDescription';
import ProductReviews from '../ProductReviews/ProductReviews';

const ProductDetail = () => {
  const [isShown, setIsShown] = useState(false);

  function handleSectionClick() {
    setIsShown((current) => !current);
  }

  return (
    <div className='product__good-detail'>
      <ProductPhotos />
      <div className='product__good-award'>
        <img className='product__good-prize' src={award} alt='награда' />
        <h2 className='product__good-heading'>Лучший продавец ботов</h2>
      </div>
      <div className='product__good-items'>
        <h3 className='product__good-item product__good-item_active' onClick={handleSectionClick}>Описание</h3>
        <h3 className='product__good-item' onClick={handleSectionClick}>Отзывы (0)</h3>
      </div>
      {isShown ? <ProductReviews /> : <ProductDescription />}
    </div>
  );
};

export default ProductDetail;