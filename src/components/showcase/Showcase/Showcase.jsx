import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Showcase.css';
import Dropdown from '../Dropdown/Dropdown';
import Cards from '../../Cards/Cards';
import More from '../More/More';
import { AftPoster } from '../../posters';
import Title from '../../Title/Title';
import Filters from '../Filters/Filters';
import ErrorPage from '../../ErrorPage/ErrorPage';
import { useScroll } from '../../../hooks/useScroll';

const Showcase = ({ productsPage, onLike, onSearch, onMore, isPreloader }) => {
  const { pageProductsNext, pageProductsCount, pageProductsPrevious } =
    useSelector((state) => state.dataProductsState);
  const { scroll } = useScroll();
  // const [isScroll, setIsScroll] = useState(false);
  const [isMoreButton, setMoreButtom] = useState(true);
  const [isCards, setCards] = useState(false);
  useEffect(() => {
    setCards(() => {
      if (productsPage?.length === 0) {
        return false;
      }
      return true;
    });
  }, [productsPage]);

  // Загрузить еще
  const handleOnMore = () => {
    const moreRequest = ['?', pageProductsNext.split('/?')[1]].join('&');
    onMore(moreRequest);
  };
  // отслеживание слеживание скрола и загрузка еще
  useEffect(() => {
    scroll > 70 && pageProductsNext && !isMoreButton && handleOnMore();
  }, [isMoreButton, scroll]);
  // Изменить состояние кнопки загрузить еще
  useEffect(() => {
    pageProductsNext && !pageProductsPrevious
      ? setMoreButtom(true)
      : setMoreButtom(false);
  }, [pageProductsNext, pageProductsPrevious, setMoreButtom]);
  // заглушка на постер
  const onClickAftPoster = () => {
    console.log('Click => AftPoster');
  };
  return (
    <section className='content__showcase showcase'>
      <Title titleText='Телеграм-боты для ритейла' />
      <div className='showcase__wrapper'>
        <Filters onSearch={onSearch} />
        <div className='showcase__wrap'>
          {productsPage && isCards ? (
            <>
              <Dropdown onSearch={onSearch} />
              <Cards cards={productsPage} onLike={onLike} />
            </>
          ) : (
            pageProductsCount === 0 && !isPreloader && <ErrorPage botNotFound />
          )}
          {isMoreButton && <More onClick={() => handleOnMore()} />}
          {!isPreloader && <AftPoster onClick={() => onClickAftPoster()} />}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
