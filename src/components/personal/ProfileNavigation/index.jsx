import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import {
  profileNavigationCustomer,
  profileNavigationSeller,
} from '../../../utils/constants';
import useModal from '../../../hooks/useModal';
import ConfirmLogoutModal from '../../Modal/ConfirmLogoutModal';
import ConfirmDeleteProfileModal from '../../Modal/ConfirmDeleteProfileModal';
import { ReactComponent as ArrowSVG } from '../../../images/heroicons_arrow-path-20-solid.svg';
import { ReactComponent as ArrowSellerSVG } from '../../../images/heroicons_arrow-path-20-solid-orange.svg';

export default function ProfileNavigation(props) {
  const [userType, setUserType] = useState(null);
  const [isSeller, setIsSeller] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  useModal(showLogoutModal, setShowLogoutModal);

  const [showDeleteProfileModal, setShowDeleteProfileModal] = useState(false);
  useModal(showDeleteProfileModal, setShowDeleteProfileModal);

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
            setShowLogoutModal(true);
          }}
        >
          Выйти из аккаунта
        </button>
        <button
          type='button'
          className='profile__nav-button profile__nav-button_type_delete-profile button'
          onClick={() => {
            setShowDeleteProfileModal(true);
          }}
        >
          Удалить аккаунт
        </button>
      </div>

      {showLogoutModal && (
        <ConfirmLogoutModal
          onClose={() => {
            setShowLogoutModal(false);
          }}
          logout={() => props.cbLogout()}
        />
      )}

      {showDeleteProfileModal && (
        <ConfirmDeleteProfileModal
          onClose={() => {
            setShowDeleteProfileModal(false);
          }}
          deleteProfile={() => props.cbDeleteUser()}
        />
      )}
    </nav>
  );
}
