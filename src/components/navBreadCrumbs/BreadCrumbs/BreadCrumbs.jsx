import React from 'react';
// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BreadCrumbs.css';
// import { ROUTER_LINKS } from '../../../utils/constants';
// import {
//   profileNavigationCustomer,
//   profileNavigationSeller,
// } from '../../utils/constants';

const BreadCrumbs = () => {
  // const [links, setLinks] = useState([]);
  // const location = useLocation();
  // let currentLink = '';

  // const crumbs = location.pathname
  //   .split('/')
  //   .filter((crumb) => crumb !== '')
  //   .map((crumb) => (currentLink += `/${crumb}`));
  // console.log(crumbs);

  // const ProfileLinksArr = profileNavigationCustomer.concat(
  //   profileNavigationSeller
  // );

  // useEffect(() => {
  //   const newArrLinks = [];
  //   ProfileLinksArr.map((item) => newArrLinks.push(...item.links));
  //   setLinks(newArrLinks);
  // }, []);

  // console.log(ROUTER_LINKS);
  // console.log(location, location.state);

  // const ArrLinks = crumbs.flatMap((item) =>
  //   ROUTER_LINKS.filter((element) => element.link === item)
  // );
  // console.log(ArrLinks);

  return (
    <div className='bread-crumbs'>
      <ul className='product__bread-crumbs'>
        <li className='product__bread-crumb'>
          <Link className='product__bread-link' to='/'>
            Каталог
          </Link>
        </li>
        <li className='product__bread-crumb'>
          <p className='product__bread-link'>Бот автоматизации заказов</p>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumbs;
