/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../../../store';
import { setIsEditing } from '../../../../store/actions';
import Input from '../../../Input';
import ProfileFormButtons from '../../user/ProfileFormButtons';
import ProfileAvatar from '../../user/ProfileAvatar';
import { useFormWithValidation } from '../../../../hooks/useFormWithValidation';
import ProfileLegalDropdown from '../ProfileLegalDropDown/ProfileLegalDropdown';
import { typeOfLegal, banks, textTooltip } from '../../../../utils/constants';
import LegalDataEdit from './LegalDataEdit/LegalDataEdit';
import Modal from '../../../Modal';

import './index.css';

function SellerLegalData() {
  const dispatch = useDispatch();
  const { user } = useSelector(getUserData);
  const {
    values,
    setValues,
    onBlur,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation();

  const { isEditing, userPhoto } = useSelector(getUserData);
  const [isHint, setIsHint] = useState(false);
  // const [value, setValue] = useState('');
  const [organization, setOrganization] = useState(false);
  const [indexTypeOfLegal, setIndexTypeOfLegal] = useState(0);
  const [legalEdit, setLegalEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleIndexChange = (dropdownIndex) => {
    setIndexTypeOfLegal(dropdownIndex);
  };

  function handleAddProve() {
    console.log('добавить документы');
  }

  useEffect(() => {
    return () => dispatch(setIsEditing(false));
  }, []);

  useEffect(() => {
    // resetForm();
    // setLegalEdit(true);
    setValues({
      name: user.first_name,
      surname: user.last_name,
    });
    if (!isEditing) localStorage.removeItem('LegalAvatar');
  }, [user, isEditing, legalEdit]);

  function handleSubmit(e) {
    e.preventDefault();
    // dispatch(setIsEditing(false));
    setLegalEdit(true);

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

    if (userPhoto) formData.photo = userPhoto;

    // props.cbUpdateProfile(getChangedData(user, formData));
    // setIsEditing(false);
    localStorage.removeItem('legalAvatar');
    console.log(formData);
  }

  function handleResetForm() {
    resetForm();
    setTimeout(() => setShowModal(false), 500);
  }

  return (
    <form className='profile__form' noValidate>
      <ProfileAvatar isEditing={isEditing} />
      <ul className='profile__inputs-list'>
        <li>
          <ProfileLegalDropdown
            hint={!isHint}
            organization={!organization}
            dropdown={typeOfLegal}
            value={values.type ?? ''}
            inputName='Тип организации'
            text={textTooltip.typeLegal}
            onIndexChange={handleIndexChange}
            // disabled={!isEditing}
            isEditing={!isEditing}
          ></ProfileLegalDropdown>
        </li>
        {indexTypeOfLegal === 1 && (
          <>
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
                hint={!isHint}
                text={textTooltip.name}
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
                hint={!isHint}
                text={textTooltip.name}
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
                disabled={!isEditing}
              />
            </li>
          </>
        )}
        <li>
          <Input
            name='nameShop'
            type='text'
            error={errors.nameShop}
            value={values.nameShop ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Название магазина'
            disabled={!isEditing}
            hint={!isHint}
            text={textTooltip.nameShop}
            requared
          />
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
            disabled={!isEditing}
            hint={!isHint}
            text={textTooltip.nameLegal}
            required
          />
        </li>
        <li>
          <ProfileLegalDropdown
            hint={!isHint}
            organization={organization}
            dropdown={banks}
            value={values.bank ?? ''}
            inputName='Название банка'
            text={textTooltip.bank}
            onIndexChange={handleIndexChange}
            // disabled={!isEditing}
          ></ProfileLegalDropdown>
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
            disabled={!isEditing}
            hint={!isHint}
            required
            text={textTooltip.inn}
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
            disabled={!isEditing}
            hint={!isHint}
            text={textTooltip.kpp}
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
            disabled={!isEditing}
            hint={!isHint}
            text={textTooltip.ogrn}
            required
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
            disabled={!isEditing}
            hint={!isHint}
            required
            text={textTooltip.bankAccount}
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
            disabled={!isEditing}
            hint={!isHint}
            required
            text={textTooltip.korrAccount}
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
            disabled={!isEditing}
            hint={!isHint}
            text={textTooltip.bic}
            required
          />
        </li>
      </ul>
      {legalEdit ? (
        <LegalDataEdit></LegalDataEdit>
      ) : (
        <>
          <button
            className='profile__legal-add-button'
            type='button'
            onClick={handleAddProve}
          >
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
                <Link to='/contract' className='profile__legal-link'>
                  Договора-оферты
                </Link>
              </label>
            </div>
          </div>
          <ProfileFormButtons
            handleSubmit={handleSubmit}
            resetForm={() => setShowModal(true)}
            isValid={isValid}
          />
        </>
      )}
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
          closeButtonClass='modal__close-button modal__close-button_type_confirm'
        >
          <h2 className='modal__title modal__title_type_confirm-logout'>
            Вы уверены, что хотите очистить форму?
          </h2>
          <span className='modal__query-error'></span>
          <div className='modal__buttons-container modal__buttons-container_type_confirm'>
            <button
              type='button'
              className='button button_color_transparent'
              onClick={() => setShowModal(false)}
            >
              Выйти
            </button>
            <button
              type='button'
              className='button button_color_blue'
              onClick={handleResetForm}
            >
              Очистить
            </button>
          </div>
        </Modal>
      )}
    </form>
  );
}

export default SellerLegalData;