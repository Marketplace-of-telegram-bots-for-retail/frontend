/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import './index.css';
import ProfileForm from './ProfileForm';
import ProfileNavigation from './ProfileNavigation';

// Компонент профиля пользователя
const Profile = (props) => {
  // Переключатель для отображения всплывающего окна редактирования фотографии
  // const [isEditingPhoto, setIsEditingPhoto] = useState(false);

  //   // Здесь можно отправить запрос на сервер для обновления данных пользователя
  //   // После успешного ответа обновляем данные пользователя в контексте
  //   setCurrentUser(userData);
  //   setIsEditing(false);

  return (
    <div className='profile'>
      <h1 className='profile__title'>Личный кабинет</h1>
      <div className='profile__container'>
        <ProfileNavigation />
        <ProfileForm cbLogout={props.cbLogout} />
      </div>
    </div>
  );
};

export default Profile;
