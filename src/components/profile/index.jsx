/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ProfileNavigation from './ProfileNavigation';
import ProfileLegalForm from './seller/ProfileLegalForm/ProfileLegalForm';
import ProfileForm from './user/ProfileForm';

// Компонент профиля пользователя
const Profile = ({ children, ...props }) => {
  const [userType, setUserType] = useState('Покупатель');
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [isActiveData, setIsActiveData] = useState(false);
  const [isActiveLegal, setIsActiveLegal] = useState(true);
  /*
  useEffect(() => {
    navigate('/profile/user');
  }, [userType]);
  */

  function handleChangeLinkData() {
    navigate('/profile/user');
    setIsActiveLegal(false);
    setIsActiveData(!isActiveData);
  }
  function handleChangeLinkLegal() {
    navigate('/profile/legal-info');
    setIsActiveData(false);
    setIsActiveLegal(!isActiveLegal);
  }

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
        {/* {children} */}
        <div className='profile__button-links'>
          <div>
            <button
              to='/profile/legal-info'
              className={`profile__button-link ${isActiveLegal ? 'profile__button-link_active' : ''}`}
              type='button'
              onClick={handleChangeLinkLegal}
              disabled={isActiveLegal}
            >
              Юридическая информация
            </button>
            {isActiveLegal === true ? (
              <ProfileLegalForm></ProfileLegalForm>
            ) : (
              <ProfileForm></ProfileForm>
            )}
          </div>
          <div>
            <button
              className={`profile__button-link ${isActiveData ? 'profile__button-link_active' : ''}`}
              type='button'
              onClick={handleChangeLinkData}
              disabled={isActiveData}
            >
              Персональные данные
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
