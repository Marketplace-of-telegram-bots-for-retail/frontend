import React from 'react';
import { useSelector } from 'react-redux';
import { getProductsData } from '../../../store';
import './SearchError.css';
import MagnifyingIcon from '../../../images/magnifying-search.png';

const SearchError = () => {
  const { is_loading } = useSelector(getProductsData);
  const animationSelector = is_loading ? 'search-error__icon_animation' : '';
  return (
    <div className='content__search-error search-error'>
      <img
        className={`search-error__icon ${animationSelector}`}
        src={MagnifyingIcon}
        alt='значок поиска'
      />
      {!is_loading ? (
        <>
          <h3 className='search-error__title'>Такой бот не найден</h3>
          <p className='search-error__text'>
            Попробуйте изменить запрос или настройки фильтров
          </p>
        </>
      ) : null}
    </div>
  );
};

export default SearchError;
