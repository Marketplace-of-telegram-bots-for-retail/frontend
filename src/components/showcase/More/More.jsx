import React from 'react';
import './More.css';
import Loader from '../../loaders/Loader/Loader';

const More = ({ onClick, is_loading }) => {
  return (
    <div className='showcase__more more'>
      {!is_loading ? (
        <button
          type='button'
          className='more__button'
          onClick={() => onClick()}
          disabled={is_loading}
        >
          Смотреть все
        </button>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default More;
