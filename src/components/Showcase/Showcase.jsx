import React, { useState } from 'react';
import './Showcase.css';
import { Dropdown } from '../Dropdown/Dropdown';
import { Cards } from '../Cards/Cards';
import { More } from '../More/More';
import { cards } from '../../temp/cards';

export const Showcase = () => {
  const [sortCards, setSortCards] = useState([...cards]);

  const handleSort = (value) => {
    let newSortCards = [];
    if (value === 'popular') {
      newSortCards = cards.sort((x, y) => y.rating[1] - x.rating[1]);
      setSortCards(newSortCards);
    } else if (value === 'rate') {
      newSortCards = cards.sort((x, y) => x.rating[0] - y.rating[0]);
      setSortCards(newSortCards);
    } else if (value === 'priceup') {
      newSortCards = cards.sort((x, y) => x.price - y.price);
      setSortCards(newSortCards);
    } else if (value === 'pricedown') {
      newSortCards = cards.sort((x, y) => y.price - x.price);
      setSortCards(newSortCards);

      // } else if (value === 'sale') {
      // } else if (value === 'newly') {
    } else {
      console.log('не отсортировал');
    }
  };

  return (
    <div className='content__showcase'>
      <Dropdown handleSort={handleSort} />
      <Cards cards={sortCards} />
      <More />
    </div>
  );
};
