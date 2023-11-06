import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './index.css';
import {
  profileNavigationCustomer,
  profileNavigationSeller,
} from '../../../utils/constants';
import ToggleUserTypeButton from '../ToggleUserTypeButton';

export default function ProfileNavigation(props) {
  const navigate = useNavigate();

  const profileNavigation =
    props.userType === 'Покупатель'
      ? profileNavigationCustomer
      : profileNavigationSeller;

  useEffect(() => {
    if (props.userType === 'Покупатель') {
      navigate('/personal/profile/');
    } else {
      navigate('/personal/seller/legal-data/');
    }
  }, [props.userType]);
  return (
    <nav className='profile__navigation'>
      <ToggleUserTypeButton
        userType={props.userType}
        setUserType={props.setUserType}
      />
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
            props.cbLogout();
            navigate('/');
          }}
        >
          Выйти из аккаунта
        </button>
        <button
          type='button'
          className='profile__nav-button profile__nav-button_type_delete-profile button'
          onClick={props.cbDeleteUser}
        >
          Удалить аккаунт
        </button>
      </div>
    </nav>
  );
}
