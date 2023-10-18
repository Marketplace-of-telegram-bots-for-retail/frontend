/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import './index.css';
import ProfileForm from './ProfileForm';
import ProfileNavigation from './ProfileNavigation';

// Компонент профиля пользователя
const Profile = () => {
  // // Локальное состояние для хранения паролей во время редактирования
  // const [passwordData, setPasswordData] = useState({
  //   current_password: '',
  //   new_password: '',
  // });
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
  // const handleSave = () => {
  //   // Проверяю, был ли изменен пароль
  //   if (passwordData.current_password && passwordData.new_password) {
  //     // Отправляю passwordData на сервер
  //     // ...
  //   }

  //   // Здесь можно отправить запрос на сервер для обновления данных пользователя
  //   // После успешного ответа обновляем данные пользователя в контексте
  //   setCurrentUser(userData);
  //   setIsEditing(false);

  //   console.log(currentUser);
  //   console.log(passwordData);
  // };

  return (
    <div className='profile'>
      <h1 className='profile__title'>Личный кабинет</h1>
      <div className='profile__container'>
        <ProfileNavigation />
        <ProfileForm />
      </div>
    </div>
  );
};

export default Profile;
