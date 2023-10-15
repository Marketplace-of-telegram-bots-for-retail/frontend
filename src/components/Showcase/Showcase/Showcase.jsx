import React from 'react';
import './Showcase.css';
import Dropdown from '../Dropdown/Dropdown';
import Cards from '../../Cards/Cards';
import More from '../More/More';
import { AftPoster } from '../../posters';
import Title from '../../Title/Title';
import Filters from '../Filters/Filters';

const Showcase = ({ productsPage, onLike, onSearch }) => {
  const onClickMore = (valie) => {
    console.log('Click => More', valie);
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
          <Dropdown />
          {productsPage?.results && (
            <Cards cards={productsPage.results} onLike={onLike} />
          )}
          <More onClick={(valie) => onClickMore(valie)} />
          <AftPoster onClick={() => onClickAftPoster()} />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
