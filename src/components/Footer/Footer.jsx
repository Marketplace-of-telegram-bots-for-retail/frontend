/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { HashLink } from 'react-router-hash-link';

import './Footer.css';
import { FOOTER_LINKS } from '../../utils/constants';
import { ReactComponent as LogoSVG } from '../../images/BOTMARKET-white.svg';

const Footer = () => {
  return (
    <footer className='page__footer footer'>
      <div className='footer__container'>
        <HashLink smooth className='footer__logo' to='/#'>
          <LogoSVG />
        </HashLink>
        <div className='footer__nav-container'>
          {FOOTER_LINKS.map((item, i) => {
            return (
              <HashLink
                smooth
                key={i}
                to={`${item.link}`}
                className='footer__link'
              >
                {item.label}
              </HashLink>
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
