/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CATEGORIES_INPUT } from '../../../utils/constants';
import { collectCategoriesInfo } from '../../../store/priceFormSubmitSlice';
import './Categories.css';

const Categories = () => {
  const [categoryValues, setCategoryValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });
  const dispatch = useDispatch();
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    dispatch(
      collectCategoriesInfo({
        ...categoryValues,
        [id]: checked,
      })
    );
    setCategoryValues({
      ...categoryValues,
      [id]: checked,
    });
  };
  return (
    <div className='filters__categories categories'>
      <h2 className='categories__title'>Категории</h2>
      {CATEGORIES_INPUT.map((input, i) => {
        const { checkbox, labelName } = input;
        return (
          <div key={i} className='categories__input-container'>
            <input
              className='categories__input'
              type='checkbox'
              id={checkbox}
              checked={categoryValues[checkbox] || false}
              onChange={handleCheckboxChange}
            ></input>
            <label htmlFor={checkbox} className='categories__label'>
              {labelName}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
