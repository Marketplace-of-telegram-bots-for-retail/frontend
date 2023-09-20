/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ARR_NAV } from '../utils/constants';

const Header = () => {
  return (
    <section className='header'>
      <nav className='header__nav'>
        {ARR_NAV.map((link) => {
          return (
            <a href='#' className='header__link'>
              {link}
            </a>
          );
        })}
      </nav>
    </section>
  );
};

export default Header;
