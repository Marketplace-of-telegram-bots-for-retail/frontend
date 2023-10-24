/* eslint-disable no-unused-vars */
/* eslint-disable space-infix-ops */
import { React, useContext, useState } from 'react';
import { CurrentUserContext } from '../../../contexts/currentUserContext';
import subicon from '../../../images/order__subicon.svg';

function PopupWithEmail({ value, setValue, isOpen, onClose, onSubmit }) {
  const currentUser = useContext(CurrentUserContext);

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  };

  return (
    <div className={`order__popup ${isOpen ? 'order__popup_opened' : ''}`}>
      <div className='order__block order__block_type_popup'>
        <div className="order__popup-content">
          <h2 className="order__heading">Данные получателя</h2>
          <form className="order__content" onSubmit={handleSubmit}>
            <p className="order__text order__text_type_email">Почта</p>
            <input type="email" className="order__email-button" name="email" value={value} onChange={handleChange} placeholder={value} />
            <div className="order__quote">
              <img className="order__info-icon" src={subicon} alt="Значок информации" />
              <p className="order__subtext">На эту почту придет ссылка для скачивания скрипта бота и инструкция по установке</p>
            </div>
            <button type="submit" className="order__email-submit-btn">Сохранить</button>
          </form>
        </div>
        <button type="button" className="order__popup-close-btn" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default PopupWithEmail;
