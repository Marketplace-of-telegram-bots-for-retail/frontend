import React, { useContext, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import './Profile.css';

const profileNavigation = [
  {
    title: 'Заказы',
    links: [
      {
        name: 'Моя корзина',
        link: '/cart',
      },
      {
        name: 'Мои заказы',
        link: '/orders',
      },
      {
        name: 'Мои возвраты',
        link: '/returns',
      },
    ],
  },
  {
    title: 'Оплата',
    links: [
      {
        name: 'Способы оплаты',
        link: '/payment',
      },
      {
        name: 'Мои промокоды',
        link: '/promo',
      },
    ],
  },
  {
    title: 'Отзывы',
    links: [
      {
        name: 'Мои отзывы',
        link: '/reviews',
      },
    ],
  },
  {
    title: 'Помощь',
    links: [
      {
        name: 'Связаться с нами',
        link: '/contact',
      },
    ],
  },
];

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevIsPasswordVisible) => !prevIsPasswordVisible);
  };

  const handleInputChange = useCallback(
    (field, newValue) => {
      setUser((prevUser) => ({
        ...prevUser,
        [field]: newValue,
      }));
    },
    [setUser]
  );

  const profileInputs = [
    {
      label: 'Логин',
      type: 'text',
      key: 'login',
    },
    {
      label: 'Имя',
      type: 'text',
      key: 'name',
    },
    {
      label: 'Фамилия',
      type: 'text',
      key: 'surname',
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
    {
      label: 'Пароль',
      type: 'password',
      key: 'password',
    },
  ];

  return (
    <div className='profile'>
      <h2 className='profile__title'>Личный кабинет</h2>
      <div className='profile__container'>
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
          <img src={user.photo} alt='avatar' />
          <ul>
            {profileInputs.map((input) => (
              <li key={input.key}>
                <label htmlFor={input.label}>
                  {input.label}
                  <input
                    type={
                      input.key === 'password' && isPasswordVisible
                        ? 'text'
                        : input.type
                    }
                    value={user[input.key]}
                    id={input.label}
                    onChange={
                      (e) => handleInputChange(input.key, e.target.value)
                      // eslint-disable-next-line react/jsx-curly-newline
                    }
                  />
                  {input.key === 'password' && (
                    <button type='button' onClick={togglePasswordVisibility}>
                      {isPasswordVisible ? 'Скрыть' : 'Показать'}
                    </button>
                  )}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
