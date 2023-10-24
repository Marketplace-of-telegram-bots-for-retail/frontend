import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Showcase.css';
import Dropdown from '../Dropdown/Dropdown';
import Cards from '../../Cards/Cards';
import More from '../More/More';
import { AftPoster } from '../../posters';
import Title from '../../Title/Title';
import Filters from '../Filters/Filters';
import ErrorPage from '../../ErrorPage/ErrorPage';
import { useScroll } from '../../../hooks/useScroll';
import { getMoreProducts } from '../../../store/dataProductsStateSlice';

const Showcase = () => {
  const { next, count, previous, results, is_loading } = useSelector(
    (state) => state.dataProductsState
  );
  const dispatch = useDispatch();
  const { scroll } = useScroll();
  const [isMoreButton, setMoreButtom] = useState(true);

  // Загрузить еще
  const handleOnMore = () => {
    const moreRequest = ['?', next.split('/?')[1]].join('&');
    dispatch(getMoreProducts(moreRequest));
  };

  // отслеживание слеживание скрола и загрузка еще
  useEffect(() => {
    if (!isMoreButton && next && scroll > 70 && !is_loading) {
      handleOnMore();
    }
  }, [scroll]);

  // Изменить состояние кнопки загрузить еще
  useEffect(() => {
    next && !previous ? setMoreButtom(true) : setMoreButtom(false);
  }, [next, previous, setMoreButtom]);

  // заглушка на постер
  const onClickAftPoster = () => {
    console.log('Click => AftPoster');
  };
  return (
    <section className='content__showcase showcase'>
      <Title titleText='Телеграм-боты для ритейла' />
      <div className='showcase__wrapper'>
        <Filters />
        <div className='showcase__wrap'>
          {results?.length !== 0 ? (
            <>
              <Dropdown />
              <Cards cards={results} />
            </>
          ) : (
            count === 0 && !is_loading && <ErrorPage botNotFound />
          )}
          {isMoreButton && <More onClick={() => handleOnMore()} />}
          {!is_loading && <AftPoster onClick={() => onClickAftPoster()} />}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
