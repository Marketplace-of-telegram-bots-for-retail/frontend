import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';
import { ROUTER_LINKS } from '../../../utils/constants';

const PersanalBreadCrumbs = () => {
  const location = useLocation();
  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => (currentLink += `/${crumb}`));

  const ArrLinks = crumbs.flatMap((item) =>
    ROUTER_LINKS.filter((element) => element.link === item)
  );

  return (
    <div className='profile__bread-crumbs bread-crumbs'>
      <ul className='bread-crumbs__list'>
        <li className='bread-crumbs__item'>
          <Link className='bread-crumbs__link' to='/'>
            Главная
          </Link>
        </li>
        {ArrLinks.map((item) => {
          return (
            <li key={item.name} className='bread-crumbs__item'>
              <Link className='bread-crumbs__link' to={item.link}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PersanalBreadCrumbs;
