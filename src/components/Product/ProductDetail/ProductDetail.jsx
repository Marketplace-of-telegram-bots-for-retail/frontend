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
  const { images } = useSelector(getProductCardData);

  return (
    <div className='product__detail detail'>
      {images.length > 0 && <ProductPhotos images={images} />}
      <div className='product__seller'>
        <img className='product__avatar' src={award} alt='награда' />
        <span className='product__shop-name'>Лучший продавец ботов</span>
      </div>
      <div className='product__tabs' ref={scrollRef}>
        <h3
          className={`product__tab ${
            isShowDescription ? 'product__tab_active' : 'product__tab '
          }`}
          onClick={() => dispatch(setShowDescription(true))}
        >
          Описание
        </h3>
        <h3
          className={`product__tab ${
            !isShowDescription ? 'product__tab_active' : 'product__tab '
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
