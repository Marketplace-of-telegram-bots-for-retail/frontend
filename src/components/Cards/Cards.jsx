import React from 'react';
import { Card } from '../Card/Card';
import './Cards.css';

export const Cards = ({ cards }) => {
  const onLike = () => {
    console.log('Like => Click!');
  };

  return (
    <div className='showcase__cards'>
      {cards.map((card) => {
        return <Card key={card._id} card={card} onLike={onLike} />;
      })}
    </div>
  );
};
