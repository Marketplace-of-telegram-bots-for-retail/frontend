import { useCallback, useState } from 'react';

export function useFormAndValid() {
  const [formValue, setFormValue] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setValid] = useState(false);
  const [inputCount, setInputCount] = useState(0);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormValue({ ...formValue, [name]: value });
    setInputCount(event.target.value.length);
    setErrors({ ...errors, [name]: event.target.validationMessage });
    setValid(event.target.closest('form').checkValidity());
  };

  const resetForm = useCallback((newFormValue = {}, newErrors = {}, newIsValid = false) => {
    setFormValue(newFormValue);
    setErrors(newErrors);
    setValid(newIsValid);
  }, [setFormValue, setErrors, setValid]);
  return { formValue,
    handleChange,
    setFormValue,
    errors,
    isValid,
    setValid,
    inputCount,
    setInputCount,
    resetForm };
}