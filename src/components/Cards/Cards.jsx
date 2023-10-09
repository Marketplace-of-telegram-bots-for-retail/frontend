import React from 'react';
import { Card } from '../Card/Card';
import './Cards.css';

export const Cards = ({ cards, onLike }) => {
  return (
    <div className='content__cards cards'>
      {cards?.map((card) => {
        return <Card key={card.id} card={card} onLike={onLike} />;
      })}
    </div>
  );
};
