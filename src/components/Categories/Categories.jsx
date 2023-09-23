/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { CATEGORIES_INPUT } from '../../utils/constants';
import './Categories.css';

const Categories = () => {
  return (
    <section className='categories'>
      <form type='submit'>
        <h2 className='categories__title'>Категории</h2>
        {CATEGORIES_INPUT.map((input) => {
          const { checkbox, labelName } = input;
          return (
            <div className='categories__input-container'>
              <input
                className='categories__input'
                type='checkbox'
                id={checkbox}
              ></input>
              <label htmlFor={checkbox} className='categories__label'>
                {labelName}
              </label>
            </div>
          );
        })}
      </form>
    </section>
  );
};

export default Categories;
