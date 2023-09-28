import React, { useState } from 'react';
import './Card.css';
import defaultCover from '../../images/default-cover.svg';

export const Rating = () => {
  return (
    <div className='card__star-rating star-rating'>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type='button'
            key={index}
            className={index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className='star'>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
