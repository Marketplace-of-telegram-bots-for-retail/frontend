import React, { useState } from 'react';
import './Rating.css';

export const Rating = ({ ratingCard }) => {
  const [rating, setRating] = useState(ratingCard[0]);
  const [hover, setHover] = useState(0);

  function getNoun(number, one, two, five) {
    const space = ' ';
    console.log(number, one, two, five);
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return number + space + five;
    }
    n %= 10;
    if (n === 1) {
      return number + space + one;
    }
    if (n >= 2 && n <= 4) {
      return number + space + two;
    }
    return number + space + five;
  }
  const feedback = (number) => {
    return getNoun(number, 'отзыв', 'отзыва', 'отзывов');
  };

  return (
    <div className='card__rating rating'>
      <div className='rating__stars'>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type='button'
              key={index}
              className={`rating__star rating__star${
                index <= (hover || rating) ? '_on' : '_off'
              }`}
              onClick={() => {
                setRating(index);
                console.log('star => Click!', index);
              }}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            ></button>
          );
        })}
      </div>
      <span className='rating__feedback'>{feedback(ratingCard[1])}</span>
    </div>
  );
};
