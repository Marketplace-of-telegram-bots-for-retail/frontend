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
      return 'Invalid length for email.';
    }
    if (!emailRegex.test(email)) {
      return 'Email format is invalid.';
    }
    if (email.split('@').length > 2) {
      return "Email must contain only one '@' symbol.";
    }
    return '';
  };

  const _isValidPassword = (pass, email) => {
    pass = pass.trim();
    const passRegex = /^[a-zA-Z0-9!#$%.]*$/;
    if (pass.length < 8 || pass.length > 40) {
      return 'Invalid length for password.';
    }
    if (pass === email) return 'Email and password cannot be the same.';
    if (!(/[a-zA-Z]/.test(pass) && /[0-9]/.test(pass))) {
      return 'Password must contain both numbers and letters.';
    }
    if (!passRegex.test(pass)) return 'Invalid password format.';
    return '';
  };

  const _isValidName = (name) => {
    name = name.trim();
    const nameRegex = /[а-яё]/gi;
    if (!nameRegex.test(name)) return 'Только кириллица';
    if (name.length < 1 || name.length > 50) {
      return 'Invalid length for name.';
    }
    return '';
  };

  const _isValidPhone = (phone) => {
    phone = phone.trim();
    const phoneRegex = /\d$/;
    if (!phoneRegex.test(phone)) return 'Only digits';
    if (phone.length !== 10) return 'Invalid length of phone number';
    return '';
  };

  const _validateConfirmPassword = (confirmPass, password) => {
    confirmPass = confirmPass.trim();
    if (confirmPass !== password) return 'Passwords do not match.';
    // return _isValidPassword(confirmPass);
    return '';
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    let { validationMessage } = e.target;
    if (name === 'email') {
      validationMessage = _isValidEmail(value);
    }

    if (name === 'password') {
      validationMessage = _isValidPassword(value, values.email);
    }

    if (name === 'confirmPassword') {
      validationMessage = _validateConfirmPassword(value, values.password);
    }

    if (name === 'name' || name === 'surname') {
      validationMessage = _isValidName(value);
    }

    if (name === 'phone') {
      validationMessage = _isValidPhone(value);
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setOnblur({ ...isOnBlur, [name]: true });
    setIsValid(e.target.closest('form').checkValidity());
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
  };
};
