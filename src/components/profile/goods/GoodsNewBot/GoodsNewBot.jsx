/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './GoodsNewBot.css';
import info from '../../../../images/Help.svg';
import { CATEGORY_OPTIONS } from '../../../../utils/constants';
import { setCategories } from '../../../../store/dataSearchFormSlice';
import { getSearchFormData } from '../../../../store';

const GoodsNewBot = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(getSearchFormData);
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    dispatch(setCategories({ [id]: checked }));
  };

  return (
    <section className='new-bot'>
      <div className='new-bot__row'>
        <h3 className='new-bot__title'>Категория бота</h3>
        <img className='new-bot__icon' src={info} alt='информация' />
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
    </section>
  );
};

export default GoodsNewBot;