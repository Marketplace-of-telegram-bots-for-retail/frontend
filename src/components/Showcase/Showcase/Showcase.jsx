import React from 'react';
import { useSelector } from 'react-redux';
import './Showcase.css';
import Dropdown from '../Dropdown/Dropdown';
import Cards from '../../Cards/Cards';
import More from '../More/More';
import { AftPoster } from '../../posters';
import Title from '../../Title/Title';
import Filters from '../Filters/Filters';

const Showcase = ({ productsPage, onLike, onSearch, onMore }) => {
  const isMorePage = useSelector(
    (state) => state.dataProductsState.pageProductsNext
  );
  // console.log(
  //   'Showcase => dataProductPage',
  //   useSelector((state) => state.dataProductsState)
  // );

  const onClickMore = () => {
    const moreRequest = ['?', isMorePage.split('/?')[1]].join('&');
    onMore(moreRequest);
  };

  const onClickAftPoster = () => {
    console.log('Click => AftPoster');
  };
  return (
    <section className='content__showcase showcase'>
      <Title titleText='Телеграм-боты для ритейла' />
      <div className='showcase__wrapper'>
        <Filters onSearch={onSearch} />
        <div className='showcase__wrap'>
          <Dropdown onSearch={onSearch} />
          {productsPage && <Cards cards={productsPage} onLike={onLike} />}
          {isMorePage ? (
            <More onClick={() => onClickMore()} />
          ) : (
            <AftPoster onClick={() => onClickAftPoster()} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
