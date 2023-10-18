import React, { useEffect, useContext } from 'react';
import './index.css';
import Input from '../../Input';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../../contexts/currentUserContext';
import avatar from '../../../images/Avatar.png';

export default function ProfileForm(props) {
  const currentUser = useContext(CurrentUserContext);
  const { values, setValues, onBlur, handleChange, errors } =
    useFormWithValidation();

  useEffect(() => {
    setValues({
      name: currentUser.first_name,
      surname: currentUser.last_name,
      email: currentUser.username,
      phone: currentUser.phone,
    });
  }, [currentUser]);

  return (
    <form className='profile__form'>
      <div
        className='profile__avatar'
        // onMouseEnter={() => isEditing && setIsEditingPhoto(true)}
        // onMouseLeave={() => setIsEditingPhoto(false)}
      >
        <img src={avatar} alt='avatar' />
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
            disabled={!props.isEditing}
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
            disabled={!props.isEditing}
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
            disabled={!props.isEditing}
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
            disabled={!props.isEditing}
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
            inputName={!props.isEditing ? 'Пароль' : 'Старый пароль'}
            disabled={!props.isEditing}
            placeholder={props.isEditing && 'Введите текущий пароль'}
          />
        </li>
        {props.isEditing && (
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
                disabled={!props.isEditing}
              />
              <span>
                Не менее 8 символов. Может содержать только латинские буквы,
                цифры, знаки.
              </span>
            </li>
            <li>
              <Input
                name='confirmNewPassword'
                type='password'
                error={errors.onfirmNewPassword}
                value={values.onfirmNewPassword ?? ''}
                onChange={handleChange}
                onBlur={onBlur}
                inputName='Новый пароль еще раз'
                disabled={!props.isEditing}
              />
            </li>
          </>
        )}
      </ul>
    </form>
  );
}
