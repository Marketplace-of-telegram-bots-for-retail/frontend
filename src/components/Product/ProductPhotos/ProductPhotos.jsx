import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowProductImagesPopup } from '../../../store/productCardDataSlice';
import './ProductPhotos.css';
import icon from '../../../images/arcticons_photo-and-picture-resizer.svg';
import testPhoto from '../../../images/Picture.jpg';

const ProductPhotos = () => {
  const dispatch = useDispatch();
  const { productCard, productImages } = useSelector(
    (state) => state.productCardData
  );
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState('initial');
  const imageSize = 162;
  function handleSmallImageClick(event) {
    const imageBig = document.getElementById('product-photos__photo-big');
    if (event.target.classList.contains('product-photos__photo-small')) {
      const allImages = document.querySelectorAll(
        '.product-photos__photo-small_active'
      );
      for (let i = 0; i < allImages.length; i += 1) {
        allImages[i].classList.remove('product-photos__photo-small_active');
      }
      imageBig.src = event.target.src;
      event.target.classList.add('product-photos__photo-small_active');
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
    <div className='product-photos'>
      {productImages.length !== 0 && (
        <>
          <ul className='product-photos__photos'>
            {productImages.length !== 0 &&
              productImages?.map((item, index) => {
                return (
                  <div key={index + Object.keys(item)}>
                    <img
                      className='product-photos__photo-small product-photos__photo-small_active'
                      style={{ transform: `translateY(${offset}px)` }}
                      src={item[Object.keys(item)]}
                      onClick={handleSmallImageClick}
                      alt='Скриншот'
                    />
                  </div>
                );
              })}
          </ul>
          {visible === 'scroll' && (
            <button
              className='product-photos__button-scroll product-photos__button-scroll_type_up'
              type='button'
              onClick={handleScrollUpClick}
            ></button>
          )}
          <button
            className='product-photos__button-scroll product-photos__button-scroll_type_down'
            type='button'
            onClick={handleScrollDownClick}
          ></button>
          <div
            className='product-photos__photo'
            onClick={() => dispatch(setShowProductImagesPopup(true))}
          >
            <img
              className='product-photos__photo-big'
              id='product-photos__photo-big'
              src={productCard.image_1 || testPhoto}
              alt={productCard.name}
            />
            <img
              className='product-photos__photo-icon'
              src={icon}
              alt='икoнка развернуть на весь экран'
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPhotos;
