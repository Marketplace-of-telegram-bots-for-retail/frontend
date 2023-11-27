/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useLocation } from 'react-router-dom';
import '../../../Cart/CartCard/CartCard.css';
import PreviewImage from '../../../PreviewImage/PreviewImage';
import { convertToLocaleStringRub } from '../../../../utils/convertToLocaleStringRub';
// import { getMyProductsId } from '../../../../store/actions';
import Modal from '../../../Modal';

function GoodsCard({ item, setIsShown }) {
  // const dispatch = useDispatch();
  const [postButton, setPostButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // function handleCheck() {
  //   dispatch(selectProductCart(item.id));
  // }
  function handleEditBot() {
    setIsShown();
    // dispatch(getMyProductsId(item.id));
    console.log(item.id);
    console.log('редактировать описание бота');
  }
  function handlePostBot() {
    console.log('опубликовать бота');
    setPostButton(!postButton);
    setShowModal(true);
    setTimeout(() => setShowModal(false), 1000);
  }
  function handlePauseBot() {
    console.log('приостановить бота');
    setPostButton(!postButton);
    setShowModal(true);
    setTimeout(() => setShowModal(false), 1000);
  }

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  const date = new Date(item.created)
    .toLocaleString('ru-RU', options)
    .replace(/\s*г\./, '');
  const formattedDate = `${date}`;

  const cartCost = convertToLocaleStringRub(item.price);

  return (
    <li className='cart__container'>
      <div className='cart__preview-container'>
        <PreviewImage card={item} parentClass='cart' />
        <span className='cart__preview-date'>{`Дата добавления: ${formattedDate}`}</span>
      </div>
      <div className='cart__info'>
        <div className='cart__info-container'>
          <div className='cart__text-container'>
            <p className='cart__text-title'>{item.name}</p>
            <p className='cart__text-articl'>{`Артикул: ${item.article}`}</p>
            <p className='cart__text-description'>{item.description}</p>
          </div>
          <div className='cart__price'>
            <span className='cart__bot-cost'>{cartCost}</span>
          </div>
        </div>
        <div className='cart__favourite-container'>
          <div className='cart__favourite-edit'>
            <div className='cart__favourite-button-image'></div>
            <button
              className='cart__favourite-button-edit'
              type='button'
              onClick={handleEditBot}
            >
              Редактировать
            </button>
          </div>
          <button
            className={`cart__favourite-button ${
              postButton === true ? 'cart__favourite-button_active' : ''
            }`}
            type='button'
            onClick={postButton === false ? handlePostBot : handlePauseBot}
          >
            {postButton === false ? 'Опубликовать' : 'Приостановить'}
          </button>
        </div>
      </div>
      <Modal
        onClose={() => {
          setShowModal(false);
        }}
        showModal={showModal}
      >
        <span
          className={`modal__image_type_add ${
            postButton ? 'modal__image_type_remove' : ''
          }`}
        ></span>
        <h2 className='modal__title modal__title_type_confirm-post'>
          {postButton
            ? 'Товар опубликован в Каталоге'
            : 'Товар снят с публикации в Каталоге'}
        </h2>
      </Modal>
    </li>
  );
}

export default GoodsCard;
