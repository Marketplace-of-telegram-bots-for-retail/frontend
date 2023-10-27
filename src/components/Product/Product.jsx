import React, { useCallback, useEffect } from 'react';
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
  setShowDescription,
} from '../../store/productCardDataSlice';
import { selectors } from '../../store';
import { useScroll } from '../../hooks/useScroll';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productCard, isShowProductImagesPopup, myReview, Images } =
    useSelector(selectors.getProductCardData);
  // загружаем данные карточки
  useEffect(() => {
    dispatch(getProductCard(id));
  }, [id]);

  // загрузить или обновить
  useEffect(() => {
    dispatch(getProductsReviews(id));
  }, [id, myReview]);

  const { executeScroll, elRef } = useScroll();

  const handleClickRating = useCallback(() => {
    dispatch(setShowDescription(false));
    executeScroll();
  }, [dispatch, executeScroll]);

  console.log(Images);
  return (
    <section className='product'>
      <BreadCrumbs />
      <ProductTitle card={productCard} />
      <div className='product__good-info'>
        <Rating
          ratingCard={productCard.rating}
          onClickStar={(i) => {
            handleClickRating(i);
          }}
          onClickLabel={() => {
            handleClickRating();
          }}
        />
        <LikeButton parentClass='product' card={productCard} />
      </div>
      <div className='product__good-details'>
        <ProductDetail scrollRef={elRef} />
        <ProductPriceBlock card={productCard} />
      </div>
      {isShowProductImagesPopup && <PopupImage card={productCard} />}
    </section>
  );
};

export default Product;
