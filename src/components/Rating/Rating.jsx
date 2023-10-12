import React, { useEffect, useState } from 'react';
import './Rating.css';
import { useLocation } from 'react-router-dom';

export const Rating = ({ ratingCard, onStarClick, onReviewClick }) => {
  // console.log(onStarClick, onReviewClick);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  useEffect(() => {
    ratingCard && setRating(ratingCard[0]);
  }, [ratingCard]);

  const location = useLocation();
  console.log(location);

  function getNoun(number, one, two, five) {
    const space = ' ';
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
    if (n === null || n === 0) {
      const notRating = 'Нет';
      return notRating + space + five;
    }
    return number + space + five;
  }
  const feedback = (number) => {
    return getNoun(number, 'отзыв', 'отзыва', 'отзывов');
  };
  const handleOnReviewClick = () => {
    if (location === '/') {
      return;
    }
    // onReviewClick();
    console.log('=> onReviewClick()');
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
                console.log('=> onStarClick()');
              }}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            ></button>
          );
        })}
      </div>
      <span className='rating__feedback' onClick={() => handleOnReviewClick()}>
        {feedback(ratingCard?.[1])}
      </span>
    </div>
  );
};
