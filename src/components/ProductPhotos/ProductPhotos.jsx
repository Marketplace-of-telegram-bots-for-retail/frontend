import React, { useState } from 'react';
import './ProductPhotos.css';
import icon from '../../images/arcticons_photo-and-picture-resizer.svg';
import testPhoto from '../../images/Picture.jpg';

const ProductPhotos = ({ card, handleFullScreenClick }) => {
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState('initial');
  const imageSize = 162;

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

  function onProductClick(card) {
    handleFullScreenClick(card);
  }

  function handleScrollDownClick() {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - imageSize;
      const maxOffset = -(imageSize * 3);
      setVisible('scroll');
      return Math.max(newOffset, maxOffset);
    });
  }

  function handleScrollUpClick() {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + imageSize;
      if (currentOffset === 0) {
        setVisible('initial');
      }
      return Math.min(newOffset, 0);
    });
  }

  return (
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
      {visible === 'scroll' &&
      <button className='product-photos__button-scroll product-photos__button-scroll_type_up' type='button' onClick={handleScrollUpClick}></button>}
      <button className='product-photos__button-scroll product-photos__button-scroll_type_down' type='button' onClick={handleScrollDownClick}></button>
      <img className='product-photos__photo-big' id='product-photos__photo-big' src={card.image_1 || testPhoto} onClick={onProductClick} alt={card.name} />
      <img className='product-photos__photo-icon' src={icon} alt='икoнка развернуть на весь экран' />
    </div>
  );
};

export default ProductPhotos;