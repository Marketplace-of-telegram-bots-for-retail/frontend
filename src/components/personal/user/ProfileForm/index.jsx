import React, { useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import './index.css';
import Input from '../../../Input';
import ProfileFormButtons from '../ProfileFormButtons';
import ProfileAvatar from '../ProfileAvatar';
import { useFormWithValidation } from '../../../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../../../contexts/currentUserContext';
import getChangedData from '../../../../utils/getChangedData';
import { getUserData } from '../../../../store';

export default function ProfileForm(props) {
  const currentUser = useContext(CurrentUserContext);
  const {
    values,
    setValues,
    onBlur,
    handleChange,
    errors,
    resetForm,
    isValid,
  } = useFormWithValidation();

  const { isEditing, userPhoto, isPasswordExpanded } = useSelector(getUserData);

  useEffect(() => {
    resetForm();
    setValues({
      name: currentUser.first_name,
      surname: currentUser.last_name,
      email: currentUser.email,
      phone: currentUser.phone,
      user: currentUser.username,
    });
    if (!isEditing) localStorage.removeItem('avatar');
  }, [currentUser, isEditing]);

  function definePasswordInputName(isEditing, isPasswordExpanded) {
    if (!isEditing) {
      return 'passwordWithoutEye';
    }
    if (!isPasswordExpanded) {
      return 'passwordWithExpand';
    }
    return 'password';
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      first_name: values.name,
      last_name: values.surname,
      email: values.email,
      phone: values.phone,
      username: values.user,
    };

    if (userPhoto) formData.photo = userPhoto;

    if (values.newPassword && values.password) {
      formData.new_password = values.newPassword;
      formData.current_password = values.password;
    }

    props.cbUpdateProfile(getChangedData(currentUser, formData));
    localStorage.removeItem('avatar');
  }

  function deleteProfile(e) {
    e.preventDefault();
  }

  return (
    <form className='profile__form' noValidate>
      {/* <h2 className='profile__form-title'>Персональные данные</h2> */}
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
            name={definePasswordInputName(isEditing, isPasswordExpanded)}
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
        {isPasswordExpanded && (
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
        handleSubmit={handleSubmit}
        deleteProfile={deleteProfile}
        isValid={isValid}
      />
    </form>
  );
}
