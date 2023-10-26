import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Product.css';
import {
  getProductCard,
  getProductsReviews,
} from '../../store/productCardDataSlice';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ProductTitle from './ProductTitle/ProductTitle';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductDetails from './ProductDetails/ProductDetails';
import PopupImage from '../PopupImage/PopupImage';
import { api } from '../../utils/Api';

const Product = ({ onLike }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productCard, productReviews, isShowProductImagesPopup } = useSelector(
    (state) => state.productCardData
  );
  console.log(productCard);
  const [review, setReview] = useState({});
  const [editReview, setEditReview] = useState({});
  const [state, setState] = useState('description');
  const [star, setStar] = useState();

  console.log(productReviews);

  // загружаем данные карточки
  useEffect(() => {
    dispatch(getProductCard(id));
  }, [id]);

  // проверить, скорее всего он тут не нужен будет
  useEffect(() => {
    dispatch(getProductsReviews(id));
  }, [id]);

  function sendFeedback(id, data) {
    api
      .postProductsReview(id, data)
      .then((newReview) => {
        setReview(newReview);
        console.log(review);
      })
      .catch(console.error);
  }

  function editFeedback(id, reviewId, data) {
    api
      .putProductReviewId(id, reviewId, data)
      .then((newReview) => {
        setEditReview(newReview);
        console.log(editReview);
      })
      .catch(console.error);
  }

  function deleteFeedback(id, reviewId) {
    api
      .deleteProductReview(id, reviewId)
      .then(() => {
        const feedback = productReviews.filter((c) => c.id !== id);
        setReview(feedback);
      })
      .catch(console.error);
  }

  return (
    <section className='product'>
      <BreadCrumbs card={productCard} />
      <ProductTitle card={productCard} />
      <ProductInfo
        card={productCard}
        onLike={onLike}
        setState={setState}
        setStar={setStar}
      />
      <ProductDetails
        card={productCard} // store, можно убрать пропс
        reviews={productReviews} // store, можно убрать пропс
        sendFeedback={sendFeedback}
        editFeedback={editFeedback}
        deleteFeedback={deleteFeedback}
        state={state}
        setState={setState}
        star={star}
        setStar={setStar}
      />
      {isShowProductImagesPopup && <PopupImage card={productCard} />}
    </section>
  );
};

export default Product;
