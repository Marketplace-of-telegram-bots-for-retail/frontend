import React, { useEffect, useContext, useState } from 'react';
import './index.css';
import Input from '../../Input';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../../contexts/currentUserContext';

export default function ProfileForm() {
  const currentUser = useContext(CurrentUserContext);
  const { values, setValues, onBlur, handleChange, errors } =
    useFormWithValidation();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setValues({
      name: currentUser.first_name,
      surname: currentUser.last_name,
      email: currentUser.username,
      phone: currentUser.phone,
    });
  }, []);

  return (
    <form className='profile__form'>
      <ul className='profile__inputs-list'>
        <li>
          {' '}
          <Input
            name='name'
            type='text'
            error={errors.name}
            value={values.name ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Имя'
          />
        </li>
        <li>
          {' '}
          <Input
            name='surname'
            type='text'
            error={errors.surname}
            value={values.surname ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Фамилия'
          />
        </li>
        <li>
          {' '}
          <Input
            name='phone'
            type='tel'
            error={errors.phone}
            value={values.phone ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Телефон'
          />
        </li>
        <li>
          {' '}
          <Input
            name='email'
            type='email'
            error={errors.email}
            value={values.email ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Почта'
          />
        </li>
        <li>
          <Input
            name='password'
            type={showPassword ? 'text' : 'password'}
            error={errors.password}
            value={values.password ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Пароль'
            setShowPassword={setShowPassword}
          />
        </li>
        <li></li>
      </ul>
    </form>
  );
}
