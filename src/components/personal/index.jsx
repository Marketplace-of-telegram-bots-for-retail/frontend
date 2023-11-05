/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react';
import './index.css';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ProfileNavigation from './ProfileNavigation';

// Компонент профиля пользователя
const Profile = ({ children, ...props }) => {
  const [userType, setUserType] = useState('Покупатель');

  return (
    <div className='profile'>
      <BreadCrumbs />
      <h1 className='profile__title'>Личный кабинет</h1>
      <div className='profile__container'>
        <ProfileNavigation
          cbLogout={props.cbLogout}
          userType={userType}
          setUserType={setUserType}
          cbDeleteUser={props.cbDeleteUser}
        />
        {children}
      </div>
    </div>
  );
};

export default Profile;
