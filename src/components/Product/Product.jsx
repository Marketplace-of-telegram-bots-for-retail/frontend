import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ProductTitle from './ProductTitle/ProductTitle';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductDetails from './ProductDetails/ProductDetails';
import PopupImage from '../PopupImage/PopupImage';
import { api } from '../../utils/Api';

const Product = ({ onLike }) => {
  const { id } = useParams();
  const [card, setCard] = useState({});
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState({});
  const [ratingFeedback, setRatingFeedback] = useState('show');
  const [showProductPopup, setShowProductPopup] = useState(false);

  useEffect(() => {
    // заменить на входящий пропсом cb
    api
      .getProductId(id)
      .then((res) => {
        setCard(res);
      })
      .catch(console.error);
  }, [id]);

  useEffect(() => {
    api
      .getProductsReviews(id)
      .then((res) => {
        setReviews(res);
      })
      .catch(console.error);
  }, [id]);

  function handleFullScreenClick() {
    setShowProductPopup(true);
  }

  function closePopup() {
    setShowProductPopup(false);
  }

  function sendFeedback(id, data) {
    api.postProductsReview(id, data)
      .then((newReview) => {
        setReview(newReview);
        console.log(review);
      })
      .catch(console.error);
  }

  return (
    <section className='product'>
      <BreadCrumbs card={card} />
      <ProductTitle card={card} />
      <ProductInfo card={card} onLike={onLike} ratingFeedback={ratingFeedback} setRatingFeedback={setRatingFeedback} />
      <ProductDetails
        card={card}
        showProductPopup={showProductPopup}
        setShowProductPopup={setShowProductPopup}
        handleFullScreenClick={handleFullScreenClick}
        reviews={reviews}
        sendFeedback={sendFeedback}
        ratingFeedback={ratingFeedback}
        setRatingFeedback={setRatingFeedback}
      />
      {showProductPopup && <PopupImage card={card} onClose={closePopup} />}
    </section>
  );
};

export default Product;
