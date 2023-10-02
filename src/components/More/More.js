import React from 'react';
import './More.css';

export const More = ({ onClick }) => {
  return (
    <div>
      <div></div>
      <button
        type='button'
        className='movies__more'
        onClick={() => {
          onClick();
          console.log('more => Click!');
        }}
      >
        Еще
      </button>
    </div>
  );
};
