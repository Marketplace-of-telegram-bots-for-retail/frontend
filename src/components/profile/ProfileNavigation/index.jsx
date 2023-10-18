import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import { profileNavigation } from '../../../utils/constants';

export default function ProfileNavigation(props) {
  return (
    <nav className='profile__navigation'>
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
      <button
        type='button'
        className='profile__delete-profile-button button'
        onClick={props.deleteProfile}
      >
        Удалить профиль
      </button>
    </nav>
  );
}
