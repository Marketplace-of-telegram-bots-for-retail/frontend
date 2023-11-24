/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, getModals } from '../../../../store';
import { setIsEditing, changeSomeSellerDetails, getSeller } from '../../../../store/actions';
import Input from '../../../Input';
import ProfileFormButtons from '../../user/ProfileFormButtons';
import ProfileAvatar from '../../user/ProfileAvatar';
import { useFormWithValidation } from '../../../../hooks/useFormWithValidation';
import ProfileLegalDropdown from '../ProfileLegalDropDown/ProfileLegalDropdown';
import { typeOfLegal, banks, textTooltip } from '../../../../utils/constants';
import LegalDataEdit from './LegalDataEdit/LegalDataEdit';
import Modal from '../../../Modal';
import { setShowResetSellerDataFormModal } from '../../../../store/modalsSlice';
import LegalDocumentButton from './LegalDocumentButton/LegalDocumentButton';
import LegalCheckboxAgreement from './LegalCheckboxAgreement/LegalCheckboxAgreement';

import './index.css';

function SellerLegalData() {
  const dispatch = useDispatch();
  const { user } = useSelector(getUserData);
  const { seller } = useSelector(getUserData);
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
  const { showResetSellerDataFormModal } = useSelector(getModals);
  const [isHint, setIsHint] = useState(false);
  const [organization, setOrganization] = useState(false);
  const [indexTypeOfLegal, setIndexTypeOfLegal] = useState(0);
  const [indexBank, setIndexBank] = useState(0);
  const [legalEdit, setLegalEdit] = useState(false);

  const handleIndexTypeOfLegal = (dropdownIndex) => {
    setIndexTypeOfLegal(dropdownIndex);
  };
  const handleIndexBank = (dropdownIndex) => {
    setIndexBank(dropdownIndex);
  };

  function handleAddProve() {
    console.log('добавить документы');
  }

  useEffect(() => {
    return () => dispatch(setIsEditing(false));
  }, []);

  useEffect(() => {
    setLegalEdit(true);
    setValues({
      name: user.first_name,
      surname: user.last_name,
      inn: seller.inn,
      store_name: seller.store_name,
      organization_type: seller.organization_type,
      organization_name: seller.organization_name,
      bank_name: seller.bank_name,
      kpp: seller.kpp,
      ogrn: seller.ogrn,
      payment_account: seller.payment_account,
      correspondent_account: seller.correspondent_account,
      bik: seller.bik,
    });
    if (!isEditing) localStorage.removeItem('LegalAvatar');
  }, [user, isEditing, legalEdit]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setIsEditing(false));
    setLegalEdit(true);

    const formData = {
      store_name: values.store_name,
      organization_type: typeOfLegal[indexTypeOfLegal].title,
      organization_name: values.organization_name,
      bank_name: banks[indexBank].title,
      inn: values.inn,
      kpp: values.kpp,
      ogrn: values.ogrn,
      payment_account: values.payment_account,
      correspondent_account: values.correspondent_account,
      bik: values.bik,
    };

    if (userPhoto) formData.photo = userPhoto;

    dispatch(changeSomeSellerDetails(formData));
    setIsEditing(false);
    // localStorage.removeItem('legalAvatar');
    console.log(formData);
  }

  function handleResetForm() {
    resetForm();
    setTimeout(() => dispatch(setShowResetSellerDataFormModal(false)), 500);
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
            inputName='Тип организации'
            text={textTooltip.typeLegal}
            onIndexChange={handleIndexTypeOfLegal}
          ></ProfileLegalDropdown>
        </li>
        {(indexTypeOfLegal === 1 || indexTypeOfLegal === 2) && (
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
            name='store_name'
            type='text'
            error={errors.store_name}
            value={values.store_name ?? ''}
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
            name='organization_name'
            type='text'
            error={errors.organization_name}
            value={values.organization_name ?? ''}
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
            value={values.bank_name ?? ''}
            inputName='Название банка'
            text={textTooltip.bank}
            onIndexChange={handleIndexBank}
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
            name='payment_account'
            type='text'
            error={errors.payment_account}
            value={values.payment_account ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Расчетный счет'
            disabled={!isEditing}
            hint={!isHint}
            required
            text={textTooltip.payment_account}
          />
        </li>
        <li>
          <Input
            name='correspondent_account'
            type='text'
            error={errors.correspondent_account}
            value={values.correspondent_account ?? ''}
            onChange={handleChange}
            onBlur={onBlur}
            inputName='Корреспондентский счет'
            disabled={!isEditing}
            hint={!isHint}
            required
            text={textTooltip.correspondent_account}
          />
        </li>
        <li>
          <Input
            name='bik'
            type='text'
            error={errors.bik}
            value={values.bik ?? ''}
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
          <LegalDocumentButton isEditing={!isEditing} handleAddProve={handleAddProve} />
          <LegalCheckboxAgreement isEditing={!isEditing} />
          <ProfileFormButtons
            handleSubmit={handleSubmit}
            resetForm={() => {
              dispatch(setShowResetSellerDataFormModal(true));
            }}
            isValid={isValid}
          />
        </>
      )}
      <Modal
        showModal={showResetSellerDataFormModal}
        onClose={() => {
          dispatch(setShowResetSellerDataFormModal(false));
        }}
        showCloseButton
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
            onClick={() => {
              dispatch(setShowResetSellerDataFormModal(false));
            }}
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
    </form>
  );
}

export default SellerLegalData;
