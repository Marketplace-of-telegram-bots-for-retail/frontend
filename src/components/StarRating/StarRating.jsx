/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './StarRating.css';

const StarRating = () => {
  return (
    <div className='star-rating'>
      <input className='star-rating__input' id='star-5' type='radio' name='star' />
      <label className='star-rating__label' htmlFor='star-5' title='5 stars'></label>
      <input className='star-rating__input' id='star-4' type='radio' name='star' />
      <label className='star-rating__label' htmlFor='star-4' title='4 stars'></label>
      <input className='star-rating__input' id='star-3' type='radio' name='star' />
      <label className='star-rating__label' htmlFor='star-3' title='3 stars'></label>
      <input className='star-rating__input' id='star-2' type='radio' name='star' />
      <label className='star-rating__label' htmlFor='star-2' title='2 stars'></label>
      <input className='star-rating__input' id='star-1' type='radio' name='star' />
      <label className='star-rating__label' htmlFor='star-1' title='1 stars'></label>
    </div>
  );
};

export default StarRating;