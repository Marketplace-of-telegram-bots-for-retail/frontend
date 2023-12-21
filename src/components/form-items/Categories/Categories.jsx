/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { CATEGORY_OPTIONS } from '../../../utils/constants';
import { setCategories } from '../../../store/actions';
import './Categories.css';
import { getSearchFormData } from '../../../store';
import { selectCategories } from '../../../store/categories/selectors';

const Categories = () => {
  const dispatch = useDispatch();
  const { categoriesList } = useSelector(selectCategories);
  const { categories } = useSelector(getSearchFormData);
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    dispatch(setCategories({ [id]: checked }));
  };

  useEffect(() => {
    console.log(
      'categoriesList =>',
      categoriesList,
      'categories => ',
      categories
    );
  }, [categoriesList, categories]);
  return (
    <div className='filters__categories categories'>
      <h2 className='categories__title'>Категории</h2>
      {categoriesList.map((input, i) => {
        const { id, name } = input;
        return (
          <div key={i} className='categories__input-container'>
            <input
              className='categories__input'
              type='checkbox'
              id={id}
              checked={categories[id] || false}
              onChange={handleCheckboxChange}
            ></input>
            <label htmlFor={id} className='categories__label'>
              {name}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
