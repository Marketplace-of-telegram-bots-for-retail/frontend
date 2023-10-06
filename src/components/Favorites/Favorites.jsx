import React from 'react';
import './Favorites.css';
import { Cards } from '../Cards/Cards';
import { cards } from '../../temp/cards';
import { EmptyPage } from '../EmptyPage/EmptyPage';

export const Favorites = () => {
  // const [isLikeCards, setLikeCards] = useState(false);
  const isLikeCards = false;
  return isLikeCards ? (
    <div className='content__favorites favorites'>
      <h1 className='favorites__title'>Избранное</h1>
      <Cards cards={cards} />
    </div>
  ) : (
    <EmptyPage />
  );
};
