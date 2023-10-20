import React from 'react';
import { useDispatch } from 'react-redux';
import './Filters.css';
import Categories from '../Categories/Categories';
import PriceSlider from '../PriceSlider/PriceSlider';
import { useFormRequest } from '../../../hooks/useFormRequest';
import { getProducts } from '../../../store/dataProductsStateSlice';

const Filters = () => {
  const dispatch = useDispatch();
  const { formRequest } = useFormRequest();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getProducts(formRequest));
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
        Применить
      </button>
    </form>
  );
};

export default Filters;
