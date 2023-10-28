/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductDetail.css';
import ProductPhotos from '../ProductPhotos/ProductPhotos';
import award from '../../../images/Pixel-36.svg';
import ProductDescription from '../ProductDescription/ProductDescription';
import ProductReviews from '../ProductReviews/ProductReviews';
import { getProductCardData } from '../../../store';
import { setShowDescription } from '../../../store/productCardDataSlice';

const ProductDetail = ({ scrollRef }) => {
  const { productReviews, isShowDescription } = useSelector(getProductCardData);
  const dispatch = useDispatch();

  return (
    <div className='product__good-detail'>
      <ProductPhotos />
      <div className='product__good-award'>
        <img className='product__good-prize' src={award} alt='награда' />
        <h2 className='product__good-heading'>Лучший продавец ботов</h2>
      </div>
      <div className='product__good-items' ref={scrollRef}>
        <h3
          className={`product__good-item ${
            isShowDescription
              ? 'product__good-item_active'
              : 'product__good-item product'
          }`}
          onClick={() => dispatch(setShowDescription(true))}
        >
          Описание
        </h3>
        <h3
          className={`product__good-item ${
            !isShowDescription
              ? 'product__good-item_active'
              : 'product__good-item product'
          }`}
          onClick={() => dispatch(setShowDescription(false))}
        >{`Отзывы (${productReviews?.length || 0})`}</h3>
      </div>
      {isShowDescription && <ProductDescription />}
      {!isShowDescription && <ProductReviews reviews={productReviews} />}
    </div>
  );
};

export default ProductDetail;
