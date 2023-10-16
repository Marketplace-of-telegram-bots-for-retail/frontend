import React, { useEffect, useState } from 'react';
import './Favorites.css';
import Cards from '../Cards/Cards';
import EmptyPage from '../EmptyPage/EmptyPage';

const Favorites = ({ favoritesPage, onLike }) => {
  favoritesPage;
  const [isLikeCards, setLikeCards] = useState(false);
  // console.log(favoritesPage);
  useEffect(() => {
    setLikeCards(() => {
      if (favoritesPage.length === 0) {
        return false;
      }
      return true;
    });
  }, [favoritesPage]);
  // console.log(resilts.length());
  // const isLikeCards = false;
  return isLikeCards ? (
    <div className='content__favorites favorites'>
      <h1 className='favorites__title'>Избранное</h1>
      <Cards cards={favoritesPage} onLike={onLike} />
    </div>
  ) : (
    <EmptyPage />
  );
};

export default Favorites;
