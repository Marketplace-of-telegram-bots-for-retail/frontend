/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './GoodsNewBot.css';
import info from '../../../../images/Help.svg';
import plus from '../../../../images/ic_plus-16.svg';
import { CATEGORY_OPTIONS } from '../../../../utils/constants';
import { getSearchFormData } from '../../../../store';
import { setCategories } from '../../../../store/searchFormDataSlice';
import PopupCategory from '../../../popups/PopupCategory/PopupCategory';
import PopupName from '../../../popups/PopupName/PopupName';
import PopupDescription from '../../../popups/PopupDescription/PopupDescription';
import PopupFunction from '../../../popups/PopupFunction/PopupFunction';
import PopupPrice from '../../../popups/PopupPrice/PopupPrice';
import PopupPhoto from '../../../popups/PopupPhoto/PopupPhoto';
import PopupVideo from '../../../popups/PopupVideo/PopupVideo';

const GoodsNewBot = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(getSearchFormData);
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    dispatch(setCategories({ [id]: checked }));
  };
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [showNamePopup, setShowNamePopup] = useState(false);
  const [showDescriptionPopup, setShowDescriptionPopup] = useState(false);
  const [showFunctionPopup, setShowFunctionPopup] = useState(false);
  const [showPricePopup, setShowPricePopup] = useState(false);
  const [showPhotoPopup, setShowPhotoPopup] = useState(false);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  function handleCategoryPopupClick() {
    setShowCategoryPopup(true);
  }

  function handleNamePopupClick() {
    setShowNamePopup(true);
  }

  function handleDescriptionPopupClick() {
    setShowDescriptionPopup(true);
  }

  function handleFunctionPopupClick() {
    setShowFunctionPopup(true);
  }

  function handlePricePopupClick() {
    setShowPricePopup(true);
  }

  function handlePhotoPopupClick() {
    setShowPhotoPopup(true);
  }

  function handleVideoPopupClick() {
    setShowVideoPopup(true);
  }

  function closeAllPopups() {
    setShowCategoryPopup(false);
    setShowNamePopup(false);
    setShowDescriptionPopup(false);
    setShowFunctionPopup(false);
    setShowPricePopup(false);
    setShowPhotoPopup(false);
    setShowVideoPopup(false);
  }

  return (
    <section className='new-bot'>
      <form className='new-bot__form'>
        <div className='new-bot__row'>
          <h3 className='new-bot__title'>Категория бота</h3>
          <img
            className='new-bot__icon'
            src={info}
            alt='информация'
            onClick={handleCategoryPopupClick}
            id='category'
          />
          <PopupCategory
            isOpen={showCategoryPopup}
            onClose={closeAllPopups}
          />
        </div>
        {CATEGORY_OPTIONS.map((input, i) => {
          const { id, labelName } = input;
          return (
            <div key={i} className='new-bot__input-container'>
              <input
                className='new-bot__input-radio'
                type='radio'
                id={id}
                checked={categories[id]}
                onChange={handleCheckboxChange}
              ></input>
              <label htmlFor={id} className='new-bot__label-radio'>
                {labelName}
              </label>
            </div>
          );
        })}
        <div className='new-bot__row'>
          <h3 className='new-bot__title'>Название бота</h3>
          <img
            className='new-bot__icon'
            src={info}
            alt='информация'
            onClick={handleNamePopupClick}
          />
          <PopupName isOpen={showNamePopup} onClose={closeAllPopups} />
        </div>
        <input
          className='new-bot__name'
          type='text'
          id='name'
          name='name'
          placeholder='Название может содержать от 20 до 70 символов. Только строчные буквы.'
          autoComplete='off'
          minLength={20}
          maxLength={70}
          required
        />
        <span className='new-bot__span'>0/70</span>
        <div className='new-bot__row'>
          <h3 className='new-bot__title'>Описание бота</h3>
          <img
            className='new-bot__icon'
            src={info}
            alt='информация'
            onClick={handleDescriptionPopupClick}
          />
          <PopupDescription isOpen={showDescriptionPopup} onClose={closeAllPopups} />
        </div>
        <textarea
          className='new-bot__description'
          type='text'
          id='description'
          name='description'
          placeholder='Описание может содержать от 50 до 500 символов. Только строчные буквы.'
          autoComplete='off'
          minLength={50}
          maxLength={500}
          required
        />
        <span className='new-bot__span'>0/500</span>
        <div className='new-bot__row'>
          <h3 className='new-bot__title'>Функции</h3>
          <img
            className='new-bot__icon'
            src={info}
            alt='информация'
            onClick={handleFunctionPopupClick}
          />
          <PopupFunction isOpen={showFunctionPopup} onClose={closeAllPopups} />
        </div>
        <input
          className='new-bot__function'
          type='text'
          id='function'
          name='function'
          placeholder='Описание функции может содержать до 200 символов. Только строчные буквы.'
          autoComplete='off'
          maxLength={200}
        />
        <span className='new-bot__span'>0/200</span>
        <button className='new-bot__button-add new-bot__button-add_type_function' type='button' aria-label='Добавить функцию'>
          <img className='new-bot__icon-16' src={plus} alt='плюс добавить' />
          <p className='new-bot__add'>Добавить</p>
        </button>
        <div className='new-bot__row'>
          <h3 className='new-bot__title'>Цена</h3>
          <img
            className='new-bot__icon'
            src={info}
            alt='информация'
            onClick={handlePricePopupClick}
          />
          <PopupPrice isOpen={showPricePopup} onClick={closeAllPopups} />
        </div>
        <input
          className='new-bot__price'
          type='number'
          id='price'
          name='price'
          placeholder='0 ₽'
          autoComplete='off'
          required
        />
        <div className='new-bot__row'>
          <h3 className='new-bot__title'>Фото</h3>
          <img
            className='new-bot__icon'
            src={info}
            alt='информация'
            onClick={handlePhotoPopupClick}
          />
          <PopupPhoto isOpen={showPhotoPopup} onClose={closeAllPopups} />
        </div>
        <button className='new-bot__button-add new-bot__button-add_type_photo' type='button' aria-label='Добавить фото'>
          <img className='new-bot__icon-16' src={plus} alt='плюс добавить' />
          <p className='new-bot__add'>Добавить</p>
        </button>
        <div className='new-bot__row'>
          <h3 className='new-bot__title'>Видео</h3>
          <img
            className='new-bot__icon'
            src={info}
            alt='информация'
            onClick={handleVideoPopupClick}
          />
          <PopupVideo isOpen={showVideoPopup} onClose={closeAllPopups} />
        </div>
        <input
          className='new-bot__video'
          type='url'
          id='video'
          name='video'
          placeholder='Загрузите ссылку вида https://www.youtube.com/ABCDEF'
          autoComplete='off'
        />
        <div className='new-bot__buttons-row'>
          <button
            className='new-bot__save-button'
            type='button'
            aria-label='Добавить товар'
          >
            Сохранить
          </button>
          <button
            className='new-bot__cancel-button'
            type='button'
            aria-label='Добавить товар'
          >
            Отменить
          </button>
        </div>
      </form>
    </section>
  );
};

export default GoodsNewBot;
