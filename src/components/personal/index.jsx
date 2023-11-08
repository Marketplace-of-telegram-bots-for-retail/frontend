/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react';
import './index.css';
// import BreadCrumbs from '../navBreadCrumbs/BreadCrumbs/BreadCrumbs';
import ProfileNavigation from './ProfileNavigation';
import NavTab from './NavTab';
import { PersanalBreadCrumbs } from '../navBreadCrumbs';

// Компонент профиля пользователя
const Profile = ({ children, ...props }) => {
  const [userType, setUserType] = useState('Покупатель');

  return (
    <div className='profile'>
      <PersanalBreadCrumbs />
      <h1 className='profile__title'>Личный кабинет</h1>
      <div className='profile__container'>
        <ProfileNavigation
          cbLogout={props.cbLogout}
          userType={userType}
          setUserType={setUserType}
          cbDeleteUser={props.cbDeleteUser}
        />
        <div>
          <NavTab />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Profile;
