import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Product.css';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ProductTitle from './ProductTitle/ProductTitle';
import PopupImage from '../PopupImage/PopupImage';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductPriceBlock from './ProductPriceBlock/ProductPriceBlock';
import { LikeButton } from '../buttons';
import { Rating } from '../Rating/Rating';
import {
  getProductCard,
  getProductsReviews,
} from '../../store/productCardDataSlice';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productCard, isShowProductImagesPopup } = useSelector(
    (state) => state.productCardData
  );
  const [state, setState] = useState('description');
  const [star, setStar] = useState();

  // загружаем данные карточки
  useEffect(() => {
    dispatch(getProductCard(id));
  }, [id]);

  // проверить, скорее всего он тут не нужен будет
  useEffect(() => {
    dispatch(getProductsReviews(id));
  }, [id]);

  const [ratingFeedback, setRatingFeedback] = useState('show');

  useEffect(() => {
    setRatingFeedback('show');
  }, [setRatingFeedback]);

  return (
    <section className='product'>
      <BreadCrumbs />
      <ProductTitle card={productCard} />
      <div className='product__good-info'>
        <Rating
          ratingCard={productCard.rating}
          onStarClick={() => {
            console.log('object');
          }}
          onReviewClick={() => {
            console.log('object');
          }}
          setStar={setStar}
          setState={setState}
          ratingFeedback={ratingFeedback}
        />
        <LikeButton parentClass='product' card={productCard} />
      </div>
      <div className='product__good-details'>
        <ProductDetail
          state={state}
          setState={setState}
          star={star}
          setStar={setStar}
        />
        <ProductPriceBlock card={productCard} />
      </div>
      {isShowProductImagesPopup && <PopupImage card={productCard} />}
    </section>
  );
};

export default Product;
