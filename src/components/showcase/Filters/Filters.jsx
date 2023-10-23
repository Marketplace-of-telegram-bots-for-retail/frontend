import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Filters.css';
import Categories from '../Categories/Categories';
import PriceSlider from '../PriceSlider/PriceSlider';
import { useFormRequest } from '../../../hooks/useFormRequest';
import { getProducts } from '../../../store/dataProductsStateSlice';
import { ressetFiltersState } from '../../../store/dataSearchFormSlice';

const Filters = () => {
  const dispatch = useDispatch();
  const { formRequest } = useFormRequest();
  const onSearch = () => dispatch(getProducts(formRequest));

  useEffect(() => {
    onSearch();
  }, [formRequest]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ressetFiltersState());
  };

  return (
    <form
      type='submit'
      className='showcase__filters filters'
      onSubmit={handleSubmit}
    >
      <Categories />
      <PriceSlider />
      <button type='submit' className='filters__submit-button'>
        Сбросить фильтры
      </button>
    </form>
  );
};

export default Filters;
