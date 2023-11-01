import React from 'react';
import './More.css';

const More = ({ onClick, is_loading }) => {
  return (
    <div className='showcase__more more'>
      <button
        type='button'
        className='more__button'
        onClick={() => onClick()}
        disabled={is_loading}
      >
        Смотреть все
      </button>
    </div>
  );
};

export default More;
