/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector } from 'react-redux';
import './ProductDetail.css';
import ProductPhotos from '../ProductPhotos/ProductPhotos';
import award from '../../../images/Pixel-36.svg';
import ProductDescription from '../ProductDescription/ProductDescription';
import ProductReviews from '../ProductReviews/ProductReviews';

const ProductDetail = ({ state, setState, star, setStar }) => {
  const { productReviews } = useSelector((state) => state.productCardData);

  return (
    <div className='product__good-detail'>
      <ProductPhotos />
      <div className='product__good-award'>
        <img className='product__good-prize' src={award} alt='награда' />
        <h2 className='product__good-heading'>Лучший продавец ботов</h2>
      </div>
      <div className='product__good-items'>
        <h3
          className={`product__good-item ${
            state === 'description'
              ? 'product__good-item_active'
              : 'product__good-item product'
          }`}
          onClick={() => setState('description')}
        >
          Описание
        </h3>
        <h3
          className={`product__good-item ${
            state === 'review'
              ? 'product__good-item_active'
              : 'product__good-item product'
          }`}
          onClick={() => setState('review')}
        >{`Отзывы (${productReviews?.length || 0})`}</h3>
      </div>
      {state === 'description' && <ProductDescription />}
      {state === 'review' && (
        <ProductReviews
          reviews={productReviews}
          setState={setState}
          star={star}
          setStar={setStar}
        />
      )}
    </div>
  );
};

export default ProductDetail;
