import React from 'react';
import { useDispatch } from 'react-redux';
import './Filters.css';
import Categories from '../Categories/Categories';
import PriceSlider from '../PriceSlider/PriceSlider';
import { ressetFiltersState } from '../../../store/dataSearchFormSlice';

const Filters = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ressetFiltersState());
  };

  return (
    <form className='showcase__filters filters' onSubmit={handleSubmit}>
      <Categories />
      <PriceSlider />
      <button type='submit' className='filters__submit-button'>
        Сбросить фильтры
      </button>
    </form>
  );
};

export default Filters;
