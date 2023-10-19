import React, { useEffect, useContext, useState } from 'react';
import './index.css';
import Input from '../../Input';
import ProfileFormButtons from '../ProfileFormButtons';
import ProfileAvatar from '../ProfileAvatar';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../../contexts/currentUserContext';

export default function ProfileForm() {
  const currentUser = useContext(CurrentUserContext);
  const { values, setValues, onBlur, handleChange, errors } =
    useFormWithValidation();
  const [isEditing, setIsEditing] = useState(false);
  console.log(currentUser);

  useEffect(() => {
    setValues({
      name: currentUser.first_name,
      surname: currentUser.last_name,
      email: currentUser.email,
      phone: currentUser.phone,
      user: currentUser.username,
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
      <h2 className='profile__form-title'>Персональные данные</h2>
      <ProfileAvatar isEditing={isEditing} />
      <ul className='profile__inputs-list'>
        <li>
          <Input
            name='user'
            type='text'
            error={errors.user}
            value={values.user ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Никнейм'
            disabled={!isEditing}
          />
        </li>
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
            placeholder={isEditing && 'введите текущий пароль'}
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
                placeholder={isEditing && 'введите новый пароль'}
              />
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
        handleSubmit={handleSubmit}
        deleteProfile={deleteProfile}
      />
    </form>
  );
}
