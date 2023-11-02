/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CATEGORY_OPTIONS } from '../../../utils/constants';
import { setCategories } from '../../../store/searchFormDataSlice';
import './Categories.css';
import { getSearchFormData } from '../../../store';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(getSearchFormData);
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    dispatch(setCategories({ [id]: checked }));
  };

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
              checked={categories[id]}
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
