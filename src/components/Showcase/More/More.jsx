import React from 'react';
import './More.css';

const More = ({ onClick }) => {
  return (
    <div className='showcase__more more'>
      <button
        type='button'
        className='more__button more__button_previous'
        onClick={() => onClick('previous')}
      >
        Предыдущая страница
      </button>
      <span className='more__page-number'></span>
      <button
        type='button'
        className='more__button more__button_next'
        onClick={() => onClick('next')}
      >
        Следущая страница
      </button>
    </div>
  );
};

export default More;
