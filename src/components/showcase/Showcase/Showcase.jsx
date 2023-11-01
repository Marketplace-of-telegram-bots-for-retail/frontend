import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Showcase.css';
import Dropdown from '../Dropdown/Dropdown';
import Cards from '../../Cards/Cards';
import More from '../More/More';
import SearchError from '../../errorPages/SearchError/SearchError';
import { AftPoster } from '../../posters';
import Title from '../../Title/Title';
import Filters from '../../form-items/Filters/Filters';
import { useScroll } from '../../../hooks/useScroll';
import { getMoreProducts } from '../../../store/dataProductsStateSlice';
import { getProductsData } from '../../../store';

const Showcase = () => {
  const { next, count, previous, results, is_loading } =
    useSelector(getProductsData);
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
          {results.length !== 0 ? (
            <>
              <Dropdown />
              <Cards cards={results} />
            </>
          ) : (
            count === 0 && <SearchError />
          )}
          {isMoreButton && (
            <More onClick={() => handleOnMore()} is_loading={is_loading} />
          )}
          <AftPoster onClick={() => onClickAftPoster()} />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
