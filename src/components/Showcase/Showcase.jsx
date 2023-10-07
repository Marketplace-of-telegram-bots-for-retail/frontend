import React from 'react';
import './Showcase.css';
import { Dropdown } from '../Dropdown/Dropdown';
import { Cards } from '../Cards/Cards';
import { More } from '../More/More';
import { cards } from '../../temp/cards';

export const Showcase = () => {
  const handleSort = (value) => {
    console.log('Выбрать сортировку', value);
  };

  return (
    <div className='content__showcase'>
      <Dropdown handleSort={handleSort} />
      <Cards cards={cards} />
      <More />
    </div>
  );
};
