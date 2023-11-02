import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Filters.css';
import { getSearchFormData } from '../../../store';
import { ressetFiltersState } from '../../../store/searchFormDataSlice';

import Categories from '../Categories/Categories';
import PriceSlider from '../PriceSlider/PriceSlider';

const Filters = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ressetFiltersState());
  };
  const [isDisabled, setDisabled] = useState(false);
  const { categories, prices, min_max } = useSelector(getSearchFormData);
  useEffect(() => {
    const isCategoriesChange = Object.keys(categories)
      .map((item) => categories[item])
      .some((item) => item === true);
    const isPricesChnge =
      prices[0] !== min_max.price__min || prices[1] !== min_max.price__max;

    if (isCategoriesChange || isPricesChnge) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [categories, prices, min_max, setDisabled]);

  return (
    <form className='showcase__filters filters' onSubmit={handleSubmit}>
      <Categories />
      <PriceSlider />
      <button
        type='submit'
        className='filters__submit-button'
        disabled={isDisabled}
      >
        Сбросить фильтры
      </button>
    </form>
  );
};

export default Filters;
