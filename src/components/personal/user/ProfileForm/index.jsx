import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import Input from '../../../Input';
import ProfileFormButtons from '../ProfileFormButtons';
import ProfileAvatar from '../ProfileAvatar';
import { useFormWithValidation } from '../../../../hooks/useFormWithValidation';
import getChangedData from '../../../../utils/getChangedData';
import { getUserData } from '../../../../store';
import { setIsEditing } from '../../../../store/actions';

export default function ProfileForm(props) {
  const dispatch = useDispatch();
  const { user } = useSelector(getUserData);

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
    return () => dispatch(setIsEditing(false));
  }, []);

  useEffect(() => {
    resetForm();
    setValues({
      name: user.first_name,
      surname: user.last_name,
      email: user.email,
      phone: user.phone,
      user: user.username,
    });
    if (!isEditing) localStorage.removeItem('avatar');
  }, [user, isEditing]);

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

    props.cbUpdateProfile(getChangedData(user, formData));
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
            disabled={!isPasswordExpanded}
            placeholder={
              isPasswordExpanded ? 'введите текущий пароль' : '••••••••'
            }
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
                required
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
                required
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
