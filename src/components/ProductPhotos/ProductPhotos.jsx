import React, { useState } from 'react';
import './ProductPhotos.css';
import icon from '../../images/arcticons_photo-and-picture-resizer.svg';
import testPhoto from '../../images/Picture.jpg';
import PopupImage from '../PopupImage/PopupImage';

const ProductPhotos = ({ card }) => {
  const [offset, setOffset] = useState(0);
  const imageSize = 162;

  const [selectedCard, setSelectedCard] = useState(null);

  function handleProductClick(card) {
    setSelectedCard(card);
    console.log(card);
  }
  /*
  function closePopup() {
    setSelectedCard(null);
  }
  8/
  /*
  function handleBigImageClick() {
    onCardClick(card);
  }
  */
  function handleSmallImageClick(event) {
    const imageBig = document.getElementById('product-photos__photo-big');
    if (event.target.classList.contains('product-photos__photo-small')) {
      const allImages = document.querySelectorAll('.product-photos__photo-small_active');
      for (let i = 0; i < allImages.length; i += 1) {
        allImages[i].classList.remove('product-photos__photo-small_active');
      }
      imageBig.src = event.target.src;
      event.target.classList.add('product-photos__photo-small_active');
    }
  }

  function handleScrollClick() {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - imageSize;
      const maxOffset = -(imageSize * 3);
      return Math.max(newOffset, maxOffset);
    });
  }

  return (
    <>
      <div className='product-photos'>
        <ul className='product-photos__photos'>
          <div>
            <img className="product-photos__photo-small product-photos__photo-small_active" style={{ transform: `translateY(${offset}px)`, }} src={card.image_1 || testPhoto} onClick={handleSmallImageClick} alt={card.name} />
          </div>
          <div>
            <img className="product-photos__photo-small" src={card.image_2 || testPhoto} style={{ transform: `translateY(${offset}px)`, }} onClick={handleSmallImageClick} alt={card.name} />
          </div>
          <div>
            <img className="product-photos__photo-small" src={card.image_3 || testPhoto} style={{ transform: `translateY(${offset}px)`, }} onClick={handleSmallImageClick} alt={card.name} />
          </div>
          <div>
            <img className="product-photos__photo-small" src={card.image_4 || testPhoto} style={{ transform: `translateY(${offset}px)`, }} onClick={handleSmallImageClick} alt={card.name} />
          </div>
        </ul>
        <button className='product-photos__button-scroll' type='button' onClick={handleScrollClick}></button>
        <img className='product-photos__photo-big' id='product-photos__photo-big' src={card.image_1 || testPhoto} onClick={handleProductClick} alt={card.name} />
        <img className='product-photos__photo-icon' src={icon} alt='икoнка развернуть на весь экран' />
      </div>
      <PopupImage card={selectedCard} />
    </>
  );
};

export default ProductPhotos;