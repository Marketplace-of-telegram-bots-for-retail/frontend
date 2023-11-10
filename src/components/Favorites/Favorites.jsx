import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Favorites.css';
import Cards from '../Cards/Cards';
import EmptyPage from '../EmptyPage/EmptyPage';
import { useScroll } from '../../hooks/useScroll';
import { getMoreFavorites } from '../../store/actions';
import { getProductsData } from '../../store';

const Favorites = () => {
  const { favoritesNext, favoritesResults, is_loading } =
    useSelector(getProductsData);
  const dispatch = useDispatch();
  const { scroll } = useScroll();

  const handleOnMore = () => {
    const moreRequest = ['?', favoritesNext.split('/?')[1]].join('&');
    dispatch(getMoreFavorites(moreRequest));
  };
  // отслеживание слеживание скрола и загрузка еще
  useEffect(() => {
    if (favoritesNext && scroll > 80 && !is_loading) {
      handleOnMore();
    }
  }, [scroll]);

  return favoritesResults?.length !== 0 ? (
    <div className='content__favorites favorites'>
      <h1 className='favorites__title'>Избранное</h1>
      <Cards cards={favoritesResults} />
    </div>
  ) : (
    <EmptyPage />
  );
};

export default Favorites;
