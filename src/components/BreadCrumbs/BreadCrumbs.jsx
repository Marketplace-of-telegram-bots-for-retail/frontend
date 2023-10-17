import React from 'react';
import './BreadCrumbs.css';
import { Link } from 'react-router-dom';
import ic_chevron from '../../images/ic_chevron-right-24.svg';

const BreadCrumbs = () => {
  return (
    <ul className="product__bread-crumbs">
      <li className='product__bread-crumb'>
        <Link className='product__bread-link' to="/">
          Каталог
        </Link>
        <img className='product__bread-image' src={ic_chevron} alt='иконка далее' />
      </li>
      <li className='product__bread-crumb'>
        <p className='product__bread-link'>Бот автоматизации заказов</p>
      </li>
    </ul>
  );
};

export default BreadCrumbs;