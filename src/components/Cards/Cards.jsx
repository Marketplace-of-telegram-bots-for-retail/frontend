import React from 'react';
import Card from '../Card/Card';
import './Cards.css';

const Cards = ({ cards }) => {
  return (
    <div className='showcase__cards cards'>
      {cards?.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
};

export default Cards;
