/* eslint-disable react/jsx-curly-newline */
// Импорты необходимых библиотек и компонентов
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import './index.css';
import { profileNavigation } from '../../utils/constants';
import { ReactComponent as ClosedEye } from '../../images/eye.svg';
import { ReactComponent as OpenedEye } from '../../images/open_eye.svg';
import avatar from '../../images/Avatar.png';
import Input from '../Input';

// Компонент профиля пользователя
const Profile = (props) => {
  // Получение текущего пользователя и функции setUser из контекста
  const currentUser = useContext(CurrentUserContext);
  // Локальное состояние для хранения данных пользователя во время редактирования
  const [userData, setUserData] = useState(currentUser);
  console.log(currentUser);

  // Локальное состояние для хранения паролей во время редактирования
  const [passwordData, setPasswordData] = useState({
    current_password: '',
    new_password: '',
  });

  // Переключатель режима редактирования
  const [isEditing, setIsEditing] = useState(false);

  // Переключатель для отображения всплывающего окна редактирования фотографии
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);

  // Состояние для управления видимостью паролей
  const [isPasswordVisible, setIsPasswordVisible] = useState({
    password: false,
    current_password: false,
    new_password: false,
    confirm_new_password: false,
  });

  // Функция для переключения видимости пароля
  const togglePasswordVisibility = (field) => {
    setIsPasswordVisible((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  // Обработчик изменений в полях ввода
  const handleInputChange = (fieldKey, newValue, isPassword = false) => {
    if (isPassword) {
      setPasswordData((prevData) => ({
        ...prevData,
        [fieldKey]: newValue,
      }));
    } else {
      setUserData((prevUser) => ({
        ...prevUser,
        [fieldKey]: newValue,
      }));
    }
  };

  // Функция для сохранения обновленных данных пользователя
  const handleSave = () => {
    // Проверяю, был ли изменен пароль
    if (passwordData.current_password && passwordData.new_password) {
      // Отправляю passwordData на сервер
      // ...
    }

    // Здесь можно отправить запрос на сервер для обновления данных пользователя
    // После успешного ответа обновляем данные пользователя в контексте
    setCurrentUser(userData);
    setIsEditing(false);

    console.log(currentUser);
    console.log(passwordData);
  };

  // Хук для навигации
  const navigate = useNavigate();

  // Массив объектов с данными для полей ввода профиля
  const profileInputs = [
    {
      label: 'Логин',
      type: 'text',
      key: 'login',
    },
    {
      label: 'Имя',
      type: 'text',
      key: 'first_name',
    },
    {
      label: 'Фамилия',
      type: 'text',
      key: 'last_name',
    },
    {
      label: 'Телефон',
      type: 'tel',
      key: 'phone',
    },
    {
      label: 'Почта',
      type: 'email',
      key: 'email',
    },
  ];

  // Массив объектов с данными для полей ввода пароля
  const passwordInputs = [
    { label: 'Старый пароль', key: 'current_password' },
    { label: 'Новый пароль', key: 'new_password' },
    { label: 'Новый пароль еще раз', key: 'confirm_new_password' },
  ];

  return (
    <div className='profile'>
      <h2 className='profile__title'>Личный кабинет</h2>
      <div className='profile__container'>
        {/* Навигация */}
        <nav className='profile__navigation'>
          <ul>
            {profileNavigation.map((block, i) => (
              <li key={i}>
                <h3>{block.title}</h3>
                <ul>
                  {block.links.map((link) => (
                    <li key={link.link}>
                      <Link to={link.link}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <button type='button' onClick={() => {}}>
            Удалить профиль
          </button>
        </nav>

        <div className='profile__content'>
          <div
            className='profile__avatar'
            onMouseEnter={() => isEditing && setIsEditingPhoto(true)}
            onMouseLeave={() => setIsEditingPhoto(false)}
          >
            <img src={avatar} alt='avatar' />
            {isEditing && isEditingPhoto && (
              <div className='profile__avatar-popup'>
                <button type='button'>Добавить фото</button>
                <button type='button'>Удалить фото</button>
              </div>
            )}
          </div>
          <ul>
            <Input />
            {profileInputs.map((field) => (
              <li key={field.key}>
                <label htmlFor={field.label}>
                  {field.label}
                  <input
                    type='text'
                    value={userData[field.key]}
                    id={field.key}
                    onChange={(e) =>
                      handleInputChange(field.key, e.target.value)
                    }
                    disabled={!isEditing}
                  />
                  {(field.key === 'first_name' || field.key === 'last_name') &&
                    isEditing && <span>Только кириллица</span>}
                  {field.key === 'phone' && isEditing && (
                    <Link to='/'>Подтвердить телефон</Link>
                  )}
                </label>
              </li>
            ))}
            {isEditing ? (
              passwordInputs.map((field) => (
                <li key={field.key}>
                  <label htmlFor={field.key}>
                    {field.label}
                    {field.key === 'new_password' && (
                      <span>
                        Не менее 8 символов. Может содержать только латинские
                        буквы, цифры, знаки.
                      </span>
                    )}
                    <input
                      type={isPasswordVisible[field.key] ? 'text' : 'password'}
                      placeholder={
                        field.key === 'current_password'
                          ? 'введите текущий пароль'
                          : ''
                      }
                      value={currentUser[field.key]}
                      id={field.key}
                      onChange={(e) =>
                        handleInputChange(field.key, e.target.value, true)
                      }
                    />
                    <button
                      type='button'
                      onClick={() => togglePasswordVisibility(field.key)}
                    >
                      {isPasswordVisible[field.key] ? (
                        <OpenedEye />
                      ) : (
                        <ClosedEye />
                      )}
                    </button>
                  </label>
                </li>
              ))
            ) : (
              <li>
                <label htmlFor='password'>
                  Пароль
                  <input
                    type={isPasswordVisible.password ? 'text' : 'password'}
                    value={userData.password}
                    id='password'
                    onChange={(e) =>
                      handleInputChange('password', e.target.value)
                    }
                    disabled={!isEditing}
                  />
                  <button
                    type='button'
                    onClick={() => togglePasswordVisibility('password')}
                  >
                    {isPasswordVisible.password ? <OpenedEye /> : <ClosedEye />}
                  </button>
                </label>
              </li>
            )}
          </ul>
          {isEditing ? (
            <>
              <button type='button' onClick={() => setIsEditing(false)}>
                Отменить
              </button>
              <button type='button' onClick={handleSave}>
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
