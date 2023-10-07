import React, { useState } from 'react';
import './ProductPhotos.css';
import photo from '../../images/Picture.jpg';
import icon from '../../images/arcticons_photo-and-picture-resizer.svg';
import PopupImage from '../PopupImage/PopupImage';

const ProductPhotos = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  function handleBigImageClick(card) {
    setSelectedCard(card);
  }

  function handleSmallImageClick() {

  }
  /*
  function closePopup() {
    setSelectedCard(null);
  }
  */
  return (
    <>
      <div className='product-photos'>
        <ul className='product-photos__photos'>
          <li>
            <img className="product-photos__photo-small" src={photo} onClick={handleSmallImageClick} alt='фото товара' />
          </li>
          <li>
            <img className="product-photos__photo-small" src={photo} alt='фото товара' />
          </li>
          <li>
            <img className="product-photos__photo-small" src={photo} alt='фото товара' />
          </li>
          <li>
            <img className="product-photos__photo-small" src={photo} alt='фото товара' />
          </li>
        </ul>
        <button className='product-photos__button-scroll' type='button'></button>
        <img className='product-photos__photo-big' src={photo} onClick={handleBigImageClick} alt='фото товара' />
        <img className='product-photos__photo-icon' src={icon} alt='иканка развернуть на весь экран' />
      </div>
      <PopupImage card={selectedCard} />
    </>
  );
};

export default ProductPhotos;