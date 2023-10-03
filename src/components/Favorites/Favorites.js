import React from 'react';
import './Favorites.css';
import { Cards } from '../Cards/Cards';
import { cards } from '../../temp/cards';

export const Favorites = () => {
  return (
    <div className='content__favorites favorites'>
      <h1 className='favorites__title'>Избранное</h1>
      <Cards cards={cards} />
    </div>
  );
};
