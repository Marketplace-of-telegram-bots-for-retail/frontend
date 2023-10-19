import React, { useState } from 'react';
import './index.css';
import avatar from '../../../images/Avatar.png';
import avatarEdit from '../../../images/Avatar-edit.svg';

export default function ProfileAvatar(props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className='profile__avatar-container'
      onMouseEnter={() => props.isEditing && setShowModal(true)}
      onMouseLeave={() => props.isEditing && setShowModal(false)}
    >
      <img
        className='profile__avatar'
        src={props.isEditing ? avatarEdit : avatar}
        alt='avatar'
      />
      {props.isEditing && showModal && (
        <div className='profile__avatar-popup'>
          <button type='button' className='profile__avatar-edit-button'>
            Добавить фото
          </button>
          <button type='button' className='profile__avatar-edit-button'>
            Удалить фото
          </button>
        </div>
      )}
    </div>
  );
}
