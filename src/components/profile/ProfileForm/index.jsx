import React, { useEffect, useContext, useState } from 'react';
import './index.css';
import Input from '../../Input';
import ProfileFormButtons from '../ProfileFormButtons';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../../contexts/currentUserContext';
import avatar from '../../../images/Avatar.png';

export default function ProfileForm(props) {
  // Переключатель для отображения всплывающего окна редактирования фотографии
  // const [isEditingPhoto, setIsEditingPhoto] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  const { values, setValues, onBlur, handleChange, errors } =
    useFormWithValidation();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setValues({
      name: currentUser.first_name,
      surname: currentUser.last_name,
      email: currentUser.username,
      phone: currentUser.phone,
    });
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    if (values.newPassword !== values.password) {
      console.log('submit');
      setIsEditing(false);
    }
  }

  function deleteProfile(e) {
    e.preventDefault();
  }

  return (
    <form className='profile__form' noValidate>
      <div
        className='profile__avatar-container'
        // onMouseEnter={() => isEditing && setIsEditingPhoto(true)}
        // onMouseLeave={() => setIsEditingPhoto(false)}
      >
        <img
          className={`profile__avatar ${
            isEditing ? 'profile_avatar_type_edit' : ''
          }`}
          src={avatar}
          alt='avatar'
        />
        {/* {isEditing && isEditingPhoto && (
          <div className='profile__avatar-popup'>
            <button type='button'>Добавить фото</button>
            <button type='button'>Удалить фото</button>
          </div>
        )} */}
      </div>
      <ul className='profile__inputs-list'>
        <li>
          <Input
            name='name'
            type='text'
            error={errors.name}
            value={values.name ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Имя'
            disabled={!isEditing}
          />
        </li>
        <li>
          <Input
            name='surname'
            type='text'
            error={errors.surname}
            value={values.surname ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Фамилия'
            disabled={!isEditing}
          />
        </li>
        <li>
          <Input
            name='phone'
            type='tel'
            error={errors.phone}
            value={values.phone ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Телефон'
            disabled={!isEditing}
          />
        </li>
        <li>
          <Input
            name='email'
            type='email'
            error={errors.email}
            value={values.email ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Почта'
            disabled={!isEditing}
          />
        </li>
        <li>
          <Input
            name='password'
            type='password'
            error={errors.password}
            value={values.password ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName={!isEditing ? 'Пароль' : 'Старый пароль'}
            disabled={!isEditing}
            placeholder={isEditing && 'Введите текущий пароль'}
          />
        </li>
        {isEditing && (
          <>
            <li>
              <Input
                name='newPassword'
                type='password'
                error={errors.newPassword}
                value={values.newPassword ?? ''}
                onChange={handleChange}
                onBlur={onBlur}
                inputName='Новый пароль'
                disabled={!isEditing}
              />
              {!errors.newPassword && (
                <span>
                  Не менее 8 символов. Может содержать только латинские буквы,
                  цифры, знаки.
                </span>
              )}
            </li>
            <li>
              <Input
                name='confirmNewPassword'
                type='password'
                error={errors.confirmNewPassword}
                value={values.confirmNewPassword ?? ''}
                onChange={handleChange}
                onBlur={onBlur}
                inputName='Новый пароль еще раз'
                disabled={!isEditing}
              />
            </li>
          </>
        )}
      </ul>
      <ProfileFormButtons
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        cbLogout={props.cbLogout}
        handleSubmit={handleSubmit}
        deleteProfile={deleteProfile}
      />
    </form>
  );
}
