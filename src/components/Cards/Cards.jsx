import React from 'react';
import { Card } from '../Card/Card';

const Cards = () => {
  const card = {
    _id: 'adasdasd12123',
    name: 'Название бота, которое может занимать 2 строки',
    about:
      'Описание бота, которое может занимать 3 строки. Описание бота, которое может занимать 3 строки.',
    rating: 4.8,
    price: 1000,
  };
  const onLike = () => {
    console.log(`Like => Click!`);
  };

  return (
    <div>
      <Card key={card._id} card={card} onLike={onLike} />
    </div>
  );
};

export default Cards;
