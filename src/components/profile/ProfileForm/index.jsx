import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import Input from '../../Input';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../../contexts/currentUserContext';
import avatar from '../../../images/Avatar.png';

export default function ProfileForm(props) {
  const currentUser = useContext(CurrentUserContext);
  const { values, setValues, onBlur, handleChange, errors } =
    useFormWithValidation();
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();

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
              <span>
                Не менее 8 символов. Может содержать только латинские буквы,
                цифры, знаки.
              </span>
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
      {isEditing ? (
        <>
          <button type='button' onClick={() => setIsEditing(false)}>
            Отменить
          </button>
          <button type='button'>
            Сохранить
          </button>
        </>
      ) : (
        <div>
          <button
            type='button'
            onClick={() => {
              props.cbLogout();
              navigate('/');
            }}
          >
            Выйти из профиля
          </button>
          <button type='button' onClick={() => setIsEditing(true)}>
            Редактировать профиль
          </button>
        </div>
      )}
    </form>
  );
}
