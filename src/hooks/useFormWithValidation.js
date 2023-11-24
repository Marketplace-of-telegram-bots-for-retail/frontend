import { useCallback, useState } from 'react';

// хук управления формой и валидации формы
export const useFormWithValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isOnBlur, setOnblur] = useState({});

  const _isValidEmail = (email) => {
    email = email.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.length < 7 || email.length > 129) {
      return 'Длина почты от 7 до 129 символов';
    }
    if (!emailRegex.test(email)) {
      return 'Невалидный формат почты';
    }
    if (email.split('@').length > 2) {
      return "Почта должна содержать не более одного '@' символа";
    }
    return '';
  };

  const _isValidPassword = (pass, email) => {
    pass = pass.trim();
    const passRegex = /^[a-zA-Z0-9!#$%.]*$/;
    if (pass.length < 8 || pass.length > 40) {
      return 'Длина пароля от 8 до 40 символов';
    }
    if (pass === email) return 'Почта и пароль не могут быть одинаковыми';
    if (!(/[a-zA-Z]/.test(pass) && /[0-9]/.test(pass))) {
      return 'Пароль должен содержать цифры и буквы';
    }
    if (!passRegex.test(pass)) return 'Неверный формат пароля';
    return '';
  };

  const _isValidName = (name) => {
    name = name.trim();
    const nameRegex = /^[А-Яа-яё\s\-]+$/;
    if (!nameRegex.test(name)) return 'Только кириллица';
    if (name.length < 1 || name.length > 50) {
      return 'Имя должно содержать не меньше 1 и не больше 50 букв';
    }
    return '';
  };

  const _addCountryCode = (phone) => {
    return phone.startsWith('9') ? `+7${phone}` : phone;
  };

  const _addInn = (inn) => {
    return inn;
  };

  const _addKpp = (kpp) => {
    return kpp;
  };

  const _addOgrn = (ogrn) => {
    return ogrn;
  };

  const _addBankAccount = (bankAccount) => {
    return bankAccount;
  };

  const _addKorrAccount = (korrAccount) => {
    return korrAccount;
  };

  const _addBik = (bik) => {
    return bik;
  };

  const _isValidInn = (inn) => {
    const innRegex = /[0-9]{10,12}/;
    if (!innRegex.test(inn) || inn.length > 12) {
      return 'ИНН должен содержать не менее 10 и не более 12 цифр';
    }
    return '';
  };

  const _isValidKpp = (kpp) => {
    const kppRegex = /\d{9}/;
    if (!kppRegex.test(kpp) || kpp.length > 9) {
      return 'КПП должен содержать 9-значный номер';
    }
    return '';
  };

  const _isValidOgrn = (ogrn) => {
    const ogrnRegex = /[0-9]{13,15}/;
    if (!ogrnRegex.test(ogrn) || ogrn.length > 15) {
      return 'ОГРН должен содержать не менее 13 и не более 15 цифр';
    }
    return '';
  };

  const _isValidBankAccount = (bankAccount) => {
    const bankAccountRegex = /\d{20}/;
    if (!bankAccountRegex.test(bankAccount) || bankAccount.length > 20) {
      return 'Расчетый счет должен содержать 20-значный номер';
    }
    return '';
  };

  const _isValidKorrAccount = (korrAccount) => {
    const korrAccountRegex = /\d{20}/;
    if (!korrAccountRegex.test(korrAccount) || korrAccount.length > 20) {
      return 'Корреспондентский счет должен содержать 20-значный номер';
    }
    return '';
  };

  const _isValidBik = (bik) => {
    const bikRegex = /\d{9}/;
    if (!bikRegex.test(bik) || bik.length > 9) {
      return 'БИК должен содержать 9-значный номер';
    }
    return '';
  };

  const _isValidNewPassword = (newPassword, password, email) => {
    if (newPassword === password) {
      return 'Новый пароль должен отличаться от старого';
    }
    return _isValidPassword(newPassword, email);
  };

  const _isValidPhone = (phone) => {
    phone = phone.trim();
    const phoneRegex =
      /^\+7\s?[0-7|9]?[0-9]{2}\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}/;
    if (!phoneRegex.test(phone)) return 'Неверный формат номера телефона';
    if (phone.length < 11 || phone.length > 13) {
      return 'Длина номера телефона - от 10 до 12 цифр';
    }
    return '';
  };

  const _validateConfirmPassword = (confirmPass, password) => {
    confirmPass = confirmPass.trim();
    if (confirmPass !== password) return 'Пароли не совпадают';
    // return _isValidPassword(confirmPass);
    return '';
  };

  const handleChange = (e) => {
    let { value } = e.target;
    const { name } = e.target;
    let { validationMessage } = e.target;
    if (e.target.required && value === '') {
      validationMessage = 'Поле ввода не может быть пустым';
    } else {
      if (name === 'email') {
        validationMessage = _isValidEmail(value);
      }

      if (name === 'password') {
        validationMessage = _isValidPassword(value, values.email);
      }

      if (name === 'newPassword') {
        validationMessage = _isValidNewPassword(
          value,
          values.password,
          values.email
        );
      }

      if (name === 'confirmPassword') {
        validationMessage = _validateConfirmPassword(value, values.password);
      }

      if (name === 'confirmNewPassword') {
        validationMessage = _validateConfirmPassword(value, values.newPassword);
      }

      if (name.includes('name')) {
        validationMessage = _isValidName(value);
      }

      if (name === 'phone') {
        value = _addCountryCode(value);
        validationMessage = _isValidPhone(value);
      }
      if (name === 'inn') {
        value = _addInn(value);
        validationMessage = _isValidInn(value);
      }
      if (name === 'kpp') {
        value = _addKpp(value);
        validationMessage = _isValidKpp(value);
      }
      if (name === 'ogrn') {
        value = _addOgrn(value);
        validationMessage = _isValidOgrn(value);
      }
      if (name === 'payment_account') {
        value = _addBankAccount(value);
        validationMessage = _isValidBankAccount(value);
      }
      if (name === 'correspondent_account') {
        value = _addKorrAccount(value);
        validationMessage = _isValidKorrAccount(value);
      }
      if (name === 'bik') {
        value = _addBik(value);
        validationMessage = _isValidBik(value);
      }
    }

    e.target.setCustomValidity(validationMessage);
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setOnblur({ ...isOnBlur, [name]: true });
    setIsValid(e.target.closest('form').checkValidity());
  };

  const onBlur = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      e.target.value = '';
    }
    setValues({ ...values, [name]: value.trim() });
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false, newIsOnBlur = {}) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setOnblur(newIsOnBlur);
    },
    [setValues, setErrors, setIsValid, setOnblur]
  );

  // Проверка изменения формы
  const getDirtyFields = (formData) =>
    Object.keys(values).reduce((acc, key) => {
      const isDirty = values[key] !== formData[key];
      return { ...acc, [key]: isDirty };
    }, {});
  const hasChanges = (formData) => {
    const dirtyFields = getDirtyFields(formData);
    return Object.values(dirtyFields).every((isDirty) => !isDirty);
  };

  return {
    values,
    handleChange,
    setValues,
    errors,
    isValid,
    resetForm,
    hasChanges,
    isOnBlur,
    onBlur,
  };
};
