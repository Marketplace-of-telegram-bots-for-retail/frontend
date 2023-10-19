/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import './index.css';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ProfileForm from './ProfileForm';
import ProfileNavigation from './ProfileNavigation';

// Компонент профиля пользователя
const Profile = (props) => {
  return (
    <div className='profile'>
      <BreadCrumbs />
      <h1 className='profile__title'>Личный кабинет</h1>
      <div className='profile__container'>
        <ProfileNavigation cbLogout={props.cbLogout} />
        <ProfileForm />
      </div>
    </div>
  );
};

export default Profile;
