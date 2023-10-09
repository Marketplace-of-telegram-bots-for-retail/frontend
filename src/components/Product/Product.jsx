import React, { useState } from 'react';
import './Product.css';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ProductTitle from '../ProductTitle/ProductTitle';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductDetails from '../ProductDetails/ProductDetails';
import PopupImage from '../PopupImage/PopupImage';
import { cards } from '../../temp/cards';

const Product = () => {
  const card = cards.find((x) => x.id === 1);
  const [showProductPopup, setShowProductPopup] = useState(false);

  function handleFullScreenClick() {
    setShowProductPopup(true);
  }

  function closePopup() {
    setShowProductPopup(false);
  }

  return (
    <section className='product'>
      <BreadCrumbs card={card} />
      <ProductTitle card={card} />
      <ProductInfo card={card} />
      <ProductDetails card={card} showProductPopup={showProductPopup} setShowProductPopup={setShowProductPopup} handleFullScreenClick={handleFullScreenClick} />
      {showProductPopup && <PopupImage card={card} onClose={closePopup} />}
    </section>
  );
};

export default Product;