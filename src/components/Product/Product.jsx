/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Product.css';
import BreadCrumbs from '../navBreadCrumbs/BreadCrumbs/BreadCrumbs';
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
} from '../../store/actions';
import { useScroll } from '../../hooks/useScroll';
import { getProductCardData } from '../../store';
import ErrorPage from '../ErrorPage/ErrorPage';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productCard, isShowProductImagesPopup, myReview, resStatus } =
    useSelector(getProductCardData);
  // загружаем данные карточки
  useEffect(() => {
    dispatch(getProductCard(id));
  }, [id]);

  // загрузить или обновить
  useEffect(() => {
    dispatch(getProductsReviews(id));
  }, [id, myReview]);

  // // загружаем данные карточки
  // useEffect(() => {
  //   dispatch(getProductCard(id));
  //   dispatch(getProductsReviews(id));
  // }, [id, myReview]);

  const { executeScroll, elRef } = useScroll();

  const handleClickRating = useCallback(() => {
    dispatch(setShowDescription(false));
    executeScroll();
  }, [dispatch, executeScroll]);

  return (
    <section className='product'>
      <BreadCrumbs />
      {resStatus !== 404 ? (
        <>
          <ProductTitle card={productCard} />
          <div className='product__info'>
            <Rating
              ratingCard={productCard?.rating}
              onClickStar={(i) => {
                handleClickRating(i);
              }}
              onClickLabel={() => {
                handleClickRating();
              }}
            />
            <LikeButton parentClass='product' card={productCard} />
          </div>
          <div className='product__details'>
            <ProductDetail scrollRef={elRef} />
            <ProductPriceBlock card={productCard} />
          </div>
          {isShowProductImagesPopup && <PopupImage card={productCard} />}
        </>
      ) : (
        <ErrorPage pageNotFound />
      )}
    </section>
  );
};

export default Product;
