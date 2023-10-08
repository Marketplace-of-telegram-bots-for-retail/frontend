import React from 'react';
import './Showcase.css';
import { Dropdown } from '../Dropdown/Dropdown';
import { Cards } from '../Cards/Cards';
import { More } from '../More/More';
import { AftPoster } from '../AftPoster/AftPoster';
import { cards } from '../../temp/cards';

export const Showcase = () => {
  const handleSort = (value) => {
    console.log('Выбрать сортировку', value);
  };
  const onClickMore = (valie) => {
    console.log('Click => More', valie);
  };
  const onClickAftPoster = () => {
    console.log('Click => AftPoster');
  };
  return (
    <div className='content__showcase showcase'>
      <Dropdown handleSort={handleSort} />
      <Cards cards={cards} />
      <More onClick={(valie) => onClickMore(valie)} />
      <AftPoster onClick={() => onClickAftPoster()} />
    </div>
  );
};
