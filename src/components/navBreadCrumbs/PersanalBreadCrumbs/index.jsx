import React from 'react';
// import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';
import { ROUTER_LINKS } from '../../../utils/constants';
// import {
//   profileNavigationCustomer,
//   profileNavigationSeller,
// } from '../../../utils/constants';

const PersanalBreadCrumbs = () => {
  // const [links, setLinks] = useState([]);
  const location = useLocation();
  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => (currentLink += `/${crumb}`));
  // console.log(crumbs);

  // const ProfileLinksArr = profileNavigationCustomer.concat(
  //   profileNavigationSeller
  // );

  // useEffect(() => {
  //   const newArrLinks = [];
  //   ProfileLinksArr.map((item) => newArrLinks.push(...item.links));
  //   setLinks(newArrLinks);
  // }, []);

  console.log(ROUTER_LINKS);
  console.log(location, location.state);

  const ArrLinks = crumbs.flatMap((item) =>
    ROUTER_LINKS.filter((element) => element.link === item)
  );
  console.log(ArrLinks);

  return (
    <div className='bread-crumbs'>
      <ul className='product__bread-crumbs'>
        <li className='product__bread-crumb'>
          <Link className='product__bread-link' to='/'>
            Главная
          </Link>
        </li>
        {ArrLinks.map((item) => {
          return (
            <li key={item.name} className='product__bread-crumb'>
              <Link className='product__bread-link' to={item.link}>
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
