import { useCallback, useState } from 'react';

//хук управления формой и валидации формы
export const useFormWithValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isOnBlur, setOnblur] = useState({});

  const handleChange = (e) => {
    const { value, name, validationMessage } = e.target;
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
    [setValues, setErrors, setIsValid, setOnblur],
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
