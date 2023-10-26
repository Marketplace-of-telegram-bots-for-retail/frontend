import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './PopupImage.css';
import { setShowProductImagesPopup } from '../../store/productCardDataSlice';
import testPhoto from '../../images/Picture.jpg';

function PopupImage({ card }) {
  const dispatch = useDispatch();

  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState('initial');
  const imageSize = 165;

  function handleSmallImageClick(event) {
    const imageBig = document.getElementById('popup-photos__photo-big');
    if (event.target.classList.contains('popup-photos__photo-small')) {
      const allImages = document.querySelectorAll(
        '.popup-photos__photo-small_active'
      );
      for (let i = 0; i < allImages.length; i += 1) {
        allImages[i].classList.remove('popup-photos__photo-small_active');
      }
      imageBig.src = event.target.src;
      event.target.classList.add('popup-photos__photo-small_active');
    }
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
    <div className='popup'>
      <div className='popup__container'>
        <button
          className='popup__close'
          type='button'
          onClick={() => dispatch(setShowProductImagesPopup(false))}
        ></button>
        <div className='popup-photos'>
          <ul className='popup-photos__photos'>
            <div>
              <img
                className='popup-photos__photo-small popup-photos__photo-small_active'
                style={{ transform: `translateY(${offset}px)` }}
                src={card.image_1 || testPhoto}
                onClick={handleSmallImageClick}
                alt={card.name}
              />
            </div>
            <div>
              <img
                className='popup-photos__photo-small'
                src={card.image_2 || testPhoto}
                style={{ transform: `translateY(${offset}px)` }}
                onClick={handleSmallImageClick}
                alt={card.name}
              />
            </div>
            <div>
              <img
                className='popup-photos__photo-small'
                src={card.image_3 || testPhoto}
                style={{ transform: `translateY(${offset}px)` }}
                onClick={handleSmallImageClick}
                alt={card.name}
              />
            </div>
            <div>
              <img
                className='popup-photos__photo-small'
                src={card.image_4 || testPhoto}
                style={{ transform: `translateY(${offset}px)` }}
                onClick={handleSmallImageClick}
                alt={card.name}
              />
            </div>
          </ul>
          {visible === 'scroll' && (
            <button
              className='popup-photos__button-scroll product-photos__button-scroll_type_up'
              type='button'
              onClick={handleScrollUpClick}
            ></button>
          )}
          <button
            className='popup-photos__button-scroll product-photos__button-scroll_type_down'
            type='button'
            onClick={handleScrollDownClick}
          ></button>
          <img
            className='popup-photos__photo-big'
            id='popup-photos__photo-big'
            src={card.image_1 || testPhoto}
            alt={card.name}
          />
        </div>
      </div>
    </div>
  );
}

export default PopupImage;
