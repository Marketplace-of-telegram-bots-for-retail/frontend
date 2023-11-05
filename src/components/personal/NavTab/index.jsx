import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Seller = () => {
  const navigate = useNavigate();
  const [isActiveData, setIsActiveData] = useState(false);
  const [isActiveLegal, setIsActiveLegal] = useState(true);

  function handleChangeLinkData() {
    navigate('/personal/seller/personal-data/', { replace: true });
    setIsActiveLegal(false);
    setIsActiveData(!isActiveData);
  }
  function handleChangeLinkLegal() {
    navigate('/personal/seller/legal-data/', { replace: true });
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
