/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CATEGORY_OPTIONS } from '../../../utils/constants';
import { collectCategories } from '../../../store/dataSearchFormSlice';
import './Categories.css';

const Categories = () => {
  const [categoryValues, setCategoryValues] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const dispatch = useDispatch();

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCategoryValues({
      ...categoryValues,
      [id]: checked,
    });
  };

  // Обновляем стейт Redux
  useEffect(() => {
    dispatch(
      collectCategories(
        Object.keys(categoryValues).filter(
          (item) => categoryValues[item] === true && item
        )
      )
    );
  }, [categoryValues, dispatch]);

  return (
    <div className='filters__categories categories'>
      <h2 className='categories__title'>Категории</h2>
      {CATEGORY_OPTIONS.map((input, i) => {
        const { id, labelName } = input;
        return (
          <div key={i} className='categories__input-container'>
            <input
              className='categories__input'
              type='checkbox'
              id={id}
              checked={categoryValues[id]}
              onChange={handleCheckboxChange}
            ></input>
            <label htmlFor={id} className='categories__label'>
              {labelName}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
