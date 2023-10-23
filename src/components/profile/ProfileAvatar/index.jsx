import React, { useState, useContext } from 'react';
import './index.css';
import avatar from '../../../images/Avatar.png';
import avatarEdit from '../../../images/Avatar-edit.svg';
import { CurrentUserContext } from '../../../contexts/currentUserContext';
import getBase64 from '../../../utils/getBase64';

export default function ProfileAvatar(props) {
  const [showModal, setShowModal] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  function setAvatar(currentUser, isEditing) {
    if (currentUser.photo) return currentUser.photo;
    return isEditing ? avatarEdit : avatar;
  }

  function handleChange(e) {
    const file = e.target.files[0];
    getBase64(file, (result) => {
      props.setUserphoto(result);
      setShowModal(false);
    });
  }
  return (
    <div
      className='profile__avatar-container'
      onMouseEnter={() => props.isEditing && setShowModal(true)}
      onMouseLeave={() => props.isEditing && setShowModal(false)}
    >
      <img
        className='profile__avatar'
        src={setAvatar(currentUser, props.isEditing)}
        alt='avatar'
      />
      {props.isEditing && showModal && (
        <div className='profile__avatar-popup'>
          <label htmlFor='avatar' className='profile__avatar-input-container'>
            <input
              className='profile__avatar-input'
              type='file'
              id='avatar'
              name='avatar'
              accept='image/png, image/jpeg'
              onChange={handleChange}
            />
            <button
              type='button'
              className='profile__avatar-button profile__avatar-button_type_edit'
            >
              Добавить фото
            </button>
          </label>
          <button
            type='button'
            className='profile__avatar-button profile__avatar-button_type_delete'
            onClick={props.setUserphoto(null)}
          >
            Удалить фото
          </button>
        </div>
      )}
    </div>
  );
}
