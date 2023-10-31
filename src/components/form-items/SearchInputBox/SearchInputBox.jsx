import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setSearch } from '../../../store/dataSearchFormSlice';
import { useQueryParameter } from '../../../hooks/useQueryParameter';
import { useForm } from '../../../hooks/useForm';
import './SearchInputBox.css';
import { getProducts } from '../../../store/dataProductsStateSlice';

const SearchInputBox = () => {
  const locatoin = useLocation();
  const navigate = useNavigate();
  const { values, handleChange, setValues } = useForm();
  const { formRequest } = useQueryParameter();
  const dispatch = useDispatch();

  // Обновляем стейт Redux
  useEffect(() => {
    dispatch(setSearch(values?.search));
  }, [values, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getProducts(formRequest));
    if (locatoin.pathname !== '/') {
      console.log(locatoin);
      navigate('/');
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };
  const handleOnBlur = (event) => {
    event.preventDefault();
    dispatch(getProducts(formRequest));
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <form className='header__search search' onSubmit={handleSubmit}>
      <input
        type='search'
        className='search__input'
        placeholder='Искать бота'
        value={values?.search || ''}
        name='search'
        onChange={handleChange}
        onBlur={handleOnBlur}
      />
      {values?.search ? (
        <button
          className='search__input-clear'
          type='button'
          aria-label='Очистить форму поиска'
          title='Очистить форму поиска'
          onClick={() => setValues({ ...values, search: '' })}
        />
      ) : null}
    </form>
  );
};

export default SearchInputBox;
