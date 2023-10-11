/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';
import Logo from '../../images/logo-white.png';
import { FOOTER_LINKS } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className='footer'>
      <img className='footer__logo' src={Logo} alt='лого' />
      <div className='footer__container'>
        {FOOTER_LINKS.map((link, i) => {
          return (
            <a key={i} href='#' className='footer__link'>
              {link}
            </a>
          );
        })}
      </div>
      <p className='footer__copyright'>© 2023 Botmarketplace</p>
    </footer>
  );
};

export default Footer;
