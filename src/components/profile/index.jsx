/* eslint-disable react/jsx-curly-newline */
// Импорты необходимых библиотек и компонентов
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import './index.css';
import { profileNavigation } from '../../utils/constants';
import ProfileForm from './ProfileForm';

// Компонент профиля пользователя
const Profile = (props) => {
  const currentUser = useContext(CurrentUserContext);

  // // Локальное состояние для хранения паролей во время редактирования
  // const [passwordData, setPasswordData] = useState({
  //   current_password: '',
  //   new_password: '',
  // });

  // Переключатель режима редактирования
  const [isEditing, setIsEditing] = useState(false);

  // Переключатель для отображения всплывающего окна редактирования фотографии
  // const [isEditingPhoto, setIsEditingPhoto] = useState(false);

  // Обработчик изменений в полях ввода
  // const handleInputChange = (fieldKey, newValue, isPassword = false) => {
  //   if (isPassword) {
  //     setPasswordData((prevData) => ({
  //       ...prevData,
  //       [fieldKey]: newValue,
  //     }));
  //   } else {
  //     setUserData((prevUser) => ({
  //       ...prevUser,
  //       [fieldKey]: newValue,
  //     }));
  //   }
  // };

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
          <ProfileForm isEditing={isEditing} />
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
