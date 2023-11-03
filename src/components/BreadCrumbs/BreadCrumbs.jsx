import React from 'react';
import './BreadCrumbs.css';
import { Link } from 'react-router-dom';

const BreadCrumbs = () => {
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
