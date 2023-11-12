import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import avatar from '../../../../images/Avatar.png';
import avatarEdit from '../../../../images/Avatar-edit.svg';
import getBase64 from '../../../../utils/getBase64';
import { setUserPhoto } from '../../../../store/actions';
import { getUserData } from '../../../../store';

export default function ProfileAvatar(props) {
  const { user } = useSelector(getUserData);

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [photoToUpload, setPhotoToUpload] = useState(null);

  function setAvatar(user, isEditing) {
    // const userphoto = localStorage.getItem('avatar');
    const userphoto = photoToUpload;
    if (userphoto) return userphoto;
    if (user.photo) return user.photo;
    return isEditing ? avatarEdit : avatar;
  }

  function handleChange(e) {
    const file = e.target.files[0];
    getBase64(file, (result) => {
      dispatch(setUserPhoto(result));
      // localStorage.setItem('avatar', result);
      setPhotoToUpload(result);
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
        src={setAvatar(user, props.isEditing)}
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
            onClick={() => dispatch(setUserPhoto(null))}
          >
            Удалить фото
          </button>
        </div>
      )}
    </div>
  );
}
