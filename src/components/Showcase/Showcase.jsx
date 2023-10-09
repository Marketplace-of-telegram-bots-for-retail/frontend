import React from 'react';
import './Showcase.css';
import { Dropdown } from '../Dropdown/Dropdown';
import { Cards } from '../Cards/Cards';
import { More } from '../More/More';
import { AftPoster } from '../AftPoster/AftPoster';

export const Showcase = ({ cards, onLike }) => {
  console.log('Showcase => productPage', cards);
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
      {cards && <Cards cards={cards} onLike={onLike} />}
      <More onClick={(valie) => onClickMore(valie)} />
      <AftPoster onClick={() => onClickAftPoster()} />
    </div>
  );
};
