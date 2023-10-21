import React from 'react';
import './ProductDetails.css';
import ProductDetail from '../ProductDetail/ProductDetail';
import ProductPriceBlock from '../ProductPriceBlock/ProductPriceBlock';

const ProductDetails = ({
  card,
  handleFullScreenClick,
  reviews,
  sendFeedback,
  editFeedback,
  state,
  setState,
  star,
  setStar
}) => {
  return (
    <div className='product__good-details'>
      <ProductDetail
        card={card}
        handleFullScreenClick={handleFullScreenClick}
        reviews={reviews}
        sendFeedback={sendFeedback}
        editFeedback={editFeedback}
        state={state}
        setState={setState}
        star={star}
        setStar={setStar}
      />
      <ProductPriceBlock card={card} />
    </div>
  );
};

export default ProductDetails;