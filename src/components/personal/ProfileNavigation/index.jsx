import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './index.css';
import {
  profileNavigationCustomer,
  profileNavigationSeller,
} from '../../../utils/constants';
import ConfirmLogoutModal from '../../Modal/ConfirmLogoutModal';
import ConfirmDeleteProfileModal from '../../Modal/ConfirmDeleteProfileModal';
import { ReactComponent as ArrowSVG } from '../../../images/heroicons_arrow-path-20-solid.svg';
import { ReactComponent as ArrowSellerSVG } from '../../../images/heroicons_arrow-path-20-solid-orange.svg';
import {
  setShowLogoutModal,
  setShowDeleteProfileModal,
} from '../../../store/modalsSlice';

export default function ProfileNavigation(props) {
  const [userType, setUserType] = useState(null);
  const [isSeller, setIsSeller] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname.search('/personal/seller') === 0) {
      setIsSeller(true);
      setUserType('Продавец');
    } else {
      setIsSeller(false);
      setUserType('Покупатель');
    }
  }, [location]);

  const handleToggleType = () => {
    if (!isSeller) {
      navigate('/personal/seller');
      setUserType('Продавец');
    } else {
      navigate('/personal');
      setUserType('Покупатель');
    }
  };

  const profileNavigation = !isSeller
    ? profileNavigationCustomer
    : profileNavigationSeller;

  return (
    <nav className='profile__navigation'>
      <button
        type='button'
        className='profile__button'
        onClick={handleToggleType}
      >
        {userType}
        <span className='profile__button_type_toggle-usertype'>
          {!isSeller ? <ArrowSVG /> : <ArrowSellerSVG />}
        </span>
      </button>
      <ul className='profile__navigation-list'>
        {profileNavigation.map((block, i) => (
          <li className='profile__navigation-item' key={i}>
            <h2 className='profile__links-list-title'>{block.title}</h2>
            <ul className='profile__links-list'>
              {block.links.map((link) => (
                <li className='profile__link' key={link.link}>
                  <NavLink to={link.link}>{link.name}</NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className='profile__nav-buttons-container'>
        <button
          type='button'
          className='profile__nav-button profile__nav-button_type_logout button'
          onClick={() => {
            dispatch(setShowLogoutModal(true));
          }}
        >
          Выйти из аккаунта
        </button>
        <button
          type='button'
          className='profile__nav-button profile__nav-button_type_delete-profile button'
          onClick={() => {
            dispatch(setShowDeleteProfileModal(true));
          }}
        >
          Удалить аккаунт
        </button>
      </div>

      <ConfirmLogoutModal
        onClose={() => {
          dispatch(setShowLogoutModal(false));
        }}
        logout={() => props.cbLogout()}
      />
      <ConfirmDeleteProfileModal
        onClose={() => {
          dispatch(setShowDeleteProfileModal(false));
        }}
        deleteProfile={() => props.cbDeleteUser()}
      />
    </nav>
  );
}
