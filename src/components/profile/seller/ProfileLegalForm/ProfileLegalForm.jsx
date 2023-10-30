/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfileLegalForm.css';
import Input from '../../../Input';
import ProfileFormButtons from '../../user/ProfileFormButtons';
import ProfileAvatar from '../../user/ProfileAvatar';
import { useFormWithValidation } from '../../../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../../../contexts/currentUserContext';
import ProfileLegalDropdown from '../ProfileLegalDropDown/ProfileLegalDropdown';
// import getChangedData from '../../../../utils/getChangedData';

function ProfileLegalForm() {
  const currentUser = useContext(CurrentUserContext);
  const { values, setValues, onBlur, handleChange, errors, resetForm } =
    useFormWithValidation();
  const [isEditing, setIsEditing] = useState(false);
  const [userphoto, setUserphoto] = useState(null);
  const [isHint, setIsHint] = useState(false);
  const [value, setValue] = useState('');
  const [organization, setOrganization] = useState(false);

  function handleAddProve() {
    console.log('добавить документы');
  }
  function handleChangeList(evt) {
    setValue(evt.target.values);
  }
  const typeOfLegal = [
    {
      title: 'ООО',
      fullTitle: 'Общество с ограниченной ответственностью'
    },
    {
      title: 'ИП',
      fullTitle: 'Индивидуальный предприниматель'
    },
    {
      title: 'ОАО',
      fullTitle: 'Открытое акционерное общество'
    },
    {
      title: 'АО',
      fullTitle: 'Акционерное общество'
    },
    {
      title: 'ПАО',
      fullTitle: 'Публичное акционерное общество'
    },
    {
      title: 'ПК',
      fullTitle: 'Производственный кооператив'
    }
  ];

  const banks = [
    {
      title: 'Сбербанк',
    },
    {
      title: 'Тинькофф банк',
    },
    {
      title: 'Альфа-Банк',
    },
    {
      title: 'ВТБ банк',
    },
    {
      title: 'Газпромбанк',
    },
    {
      title: 'Райффайзен Банк',
    }
  ];

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

  function handleSubmit(e) {
    // resetForm();
    e.preventDefault();

    const formData = {
      nameShop: values.nameShop,
      typeLegal: values.typeLegal,
      nameLegal: values.nameLegal,
      bank: values.bank,
      inn: values.inn,
      kpp: values.kpp,
      ogrn: values.ogrn,
      bankAccount: values.bankAccount,
      korrAccount: values.korrAccount,
      bic: values.bic,
    };

    if (userphoto) formData.photo = userphoto;

    // props.cbUpdateProfile(getChangedData(currentUser, formData));
    // setIsEditing(false);
    localStorage.removeItem('avatar');
    console.log(formData);
  }

  function deleteProfile(e) {
    e.preventDefault();
  }

  return (
    <form className='profile__form' noValidate>
      <h2 className='profile__form-title'>Юридическая информация</h2>
      <ProfileAvatar isEditing={isEditing} setUserphoto={setUserphoto} />
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
            // hint={() => setIsHint(true)}
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
            name='surname2'
            type='text'
            error={errors.surname2}
            value={values.surname2 ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Отчество'
            disabled={isEditing}
          />
        </li>
        <li>
          <Input
            name='nameShop'
            type='text'
            error={errors.nameShop}
            value={values.nameShop ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Название магазина'
            disabled={isEditing}
            hint={!isHint}
          />
        </li>
        <li className='profile__inputs-list'>
          <ProfileLegalDropdown
            hint={!isHint}
            organization={!organization}
            dropdown={typeOfLegal}
            value={values.type}
            setValue={handleChangeList}
            inputName='Тип организации'
          >
          </ProfileLegalDropdown>
          {/* <Input
            name='typeLegal'
            type='text'
            error={errors.typeLegal}
            value={values.typeLegal ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Тип организации'
            disabled={isEditing}
            hint={!isHint}
          /> */}
        </li>
        <li>
          <Input
            name='nameLegal'
            type='text'
            error={errors.nameLegal}
            value={values.nameLegal ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Название организации'
            disabled={isEditing}
            hint={!isHint}
          />
        </li>
        <li>
          <ProfileLegalDropdown
            hint={!isHint}
            organization={organization}
            dropdown={banks}
            value={values.bank}
            inputName='Название банка'
            setValue={handleChangeList}
          >
          </ProfileLegalDropdown>
          {/* <Input
            name='bank'
            type='text'
            error={errors.bank}
            value={values.bank ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Название банка'
            disabled={isEditing}
            hint={!isHint}
          /> */}
        </li>
        <li>
          <Input
            name='inn'
            type='text'
            error={errors.inn}
            value={values.inn ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='ИНН'
            disabled={isEditing}
            hint={!isHint}
          />
        </li>
        <li>
          <Input
            name='kpp'
            type='text'
            error={errors.kpp}
            value={values.kpp ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='КПП'
            disabled={isEditing}
            hint={!isHint}
          />
        </li>
        <li>
          <Input
            name='ogrn'
            type='text'
            error={errors.ogrn}
            value={values.ogrn ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='ОГРН'
            disabled={isEditing}
            hint={!isHint}
          />
        </li>
        <li>
          <Input
            name='bankAccount'
            type='text'
            error={errors.bankAccount}
            value={values.bankAccount ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Расчетный счет'
            disabled={isEditing}
            hint={!isHint}
          />
        </li>
        <li>
          <Input
            name='korrAccount'
            type='text'
            error={errors.korrAccount}
            value={values.korrAccount ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Корреспондентский счет'
            disabled={isEditing}
            hint={!isHint}
          />
        </li>
        <li>
          <Input
            name='bic'
            type='text'
            error={errors.bic}
            value={values.bic ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='БИК'
            disabled={isEditing}
            hint={!isHint}
          />
        </li>
      </ul>
      <button className='profile__legal-add-button' type='button' onClick={handleAddProve}>
        <div className='profile__legal-add-image'></div>
        <p className='profile__legal-add-text'>Загрузить документы</p>
      </button>
      <div className='profile__legal-container'>
        <input
          className='profile__legal-input'
          type='checkbox'
          id='legal-checkbox'
          // checked={categoryValues[id] || false}
          // checked={false}
          // onChange={handleCheckboxChange}
        ></input>
        <div>
          <label
            htmlFor='legal-checkbox'
            className='profile__legal-checkbox-label'
          >
            Я принимаю условия&nbsp;
            <Link
              to='/contract'
              className='profile__legal-link'
            >
              Договора-оферты
            </Link>
          </label>
        </div>
      </div>
      <ProfileFormButtons
        isEditing={!isEditing}
        setIsEditing={setIsEditing}
        handleSubmit={handleSubmit}
        deleteProfile={deleteProfile}
        resetForm={() => resetForm()}
      />
    </form>
  );
}

export default ProfileLegalForm;