import React from 'react';
import './More.css';

const More = ({ onClick }) => {
  return (
    <div className='showcase__more more'>
      <button
        type='button'
        className='more__button'
        onClick={() => onClick()}
      >
        Смотреть все
      </button>
    </div>
  );
};

export default More;
