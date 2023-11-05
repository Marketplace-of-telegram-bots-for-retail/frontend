import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileLegalForm from '../ProfileLegalForm/ProfileLegalForm';
import ProfileForm from '../../user/ProfileForm';

const SellerLegalData = () => {
  const navigate = useNavigate();
  const [isActiveData, setIsActiveData] = useState(false);
  const [isActiveLegal, setIsActiveLegal] = useState(true);

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
    <div className='profile__button-links'>
      <div>
        <button
          to='/profile/legal-info'
          className={`profile__button-link ${
            isActiveLegal ? 'profile__button-link_active' : ''
          }`}
          type='button'
          onClick={handleChangeLinkLegal}
          disabled={isActiveLegal}
        >
          Юридическая информация
        </button>
        {isActiveLegal === true ? <ProfileLegalForm /> : <ProfileForm />}
      </div>
      <div>
        <button
          className={`profile__button-link ${
            isActiveData ? 'profile__button-link_active' : ''
          }`}
          type='button'
          onClick={handleChangeLinkData}
          disabled={isActiveData}
        >
          Персональные данные
        </button>
      </div>
    </div>
  );
};

export default SellerLegalData;
