import React from 'react';
import './ProductDetails.css';
import ProductDetail from '../ProductDetail/ProductDetail';
import ProductPriceBlock from '../ProductPriceBlock/ProductPriceBlock';

const ProductDetails = ({
  card,
  sendFeedback,
  editFeedback,
  deleteFeedback,
  state,
  setState,
  star,
  setStar,
}) => {
  return (
    <div className='product__good-details'>
      <ProductDetail
        sendFeedback={sendFeedback}
        editFeedback={editFeedback}
        deleteFeedback={deleteFeedback}
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
