/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';
import { FOOTER_LINKS } from '../../utils/constants';
import Logo from '../../images/logo-white.png';

export const Footer = () => {
  return (
    <footer className='page__footer footer'>
      <div className='footer__container'>
        <img className='footer__logo' src={Logo} alt='лого' />
        <div className='footer__nav-container'>
          {FOOTER_LINKS.map((item, i) => {
            return (
              <NavLink key={i} to={item.link} className='footer__link'>
                {item.label}
              </NavLink>
            );
          })}
        </div>
        <p className='footer__copyright'>
          &copy;
          {` ${new Date().getFullYear()} `}
          Botmarketplace
        </p>
      </div>
    </footer>
  );
};

export default Footer;
