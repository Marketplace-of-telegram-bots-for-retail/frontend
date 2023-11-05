import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Seller = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isActiveData, setIsActiveData] = useState(false);
  const [isActiveLegal, setIsActiveLegal] = useState(true);

  console.log(location.pathname);
  function handleChangeLinkData() {
    navigate('/personal/seller/personal-data/');
    setIsActiveLegal(false);
    setIsActiveData(!isActiveData);
  }
  function handleChangeLinkLegal() {
    navigate('/personal/seller/legal-data/');
    setIsActiveData(false);
    setIsActiveLegal(!isActiveLegal);
  }

  return (
    <div className='seller__container'>
      <div className='profile__button-links'>
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

export default Seller;
