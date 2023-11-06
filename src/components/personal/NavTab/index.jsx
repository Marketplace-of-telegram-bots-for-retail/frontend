/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  profileNavigationCustomer,
  profileNavigationSeller,
} from '../../../utils/constants';
import './index.css';

const NavTab = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentTabs, setCurrentTabs] = useState([]);
  // получить массив сслыок ЛК
  const ProfileLinksArr = profileNavigationCustomer.concat(
    profileNavigationSeller
  );

  // const arr = [
  //   { name: 'Персональные данные', link: '/personal/profile/' },
  //   { name: 'Мои заказы', link: '/personal/orders/' },
  //   { name: 'Мои возвраты', link: '/personal/refunds/' },
  //   { name: 'Мои отзывы', link: '/personal/reviews/' },
  //   { name: 'Связаться с нами', link: '/promo#contacts' },
  //   { name: 'Персональные данные', link: '/personal/seller/personal-data/' },
  //   { name: 'Юридическая информация', link: '/personal/seller/legal-data/' },
  //   { name: 'Мои товары', link: '/personal/seller/goods/' },
  //   { name: 'Статистика продаж', link: '/personal/seller/statistics/' },
  //   { name: 'Мои промокоды', link: '/personal/seller/promo-codes/' },
  //   { name: 'Связаться с нами', link: '/promo#contacts' },
  // ];

  useEffect(() => {
    const tabs = ProfileLinksArr.filter(
      (item) => item.links.some((i) => i.link === location.pathname) && item
    );
    setCurrentTabs(tabs);
  }, [location]);

  return (
    <div className='profile__nav-tabs'>
      {currentTabs?.[0]?.links?.map((item) => {
        const { link, name } = item;
        const isCrrentTab = link === location.pathname;
        return (
          <button
            className={`profile__nav-tab ${
              isCrrentTab ? 'profile__nav-tab_select' : ''
            }`}
            type='button'
            onClick={() => navigate(link, { replace: true })}
            disabled={isCrrentTab}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default NavTab;
