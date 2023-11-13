import { useCallback, useState } from 'react';

export function useFormAndValid() {
  const [formValue, setFormValue] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setValid] = useState(false);
  const [inputCount, setInputCount] = useState(0);
  const [checked, setChecked] = useState(false);
  // эти 3 строки ниже можно убрать, если не будем делать через formValue
  const [file, setFile] = useState([]);
  const reader = new FileReader();
  const image = document.getElementById('image-file');

  const handleChange = (event) => {
    const { value, name } = event.target;
    // условие if тоже можно убрать, оно тут не срабатывет
    if (event.target === image) {
      value === file;
      console.log(value);
      console.log(file);
    }
    setFormValue({ ...formValue, [name]: value });
    setInputCount(event.target.value.length);
    setChecked(!checked);
    // в этой конструкции if определяю если картинка, то делаем файл и массив
    // с массивом чувствую можно проще
    if (event.target === image) {
      reader.readAsDataURL(event.target.files[0]);
      reader.onloadend = () => {
        setFile(file.push(reader.result));
        console.log(file);
      };
    }
    setErrors({ ...errors, [name]: event.target.validationMessage });
    setValid(event.target.closest('form').checkValidity());
    console.log(event);
    console.log(event.target);
    console.log(event.target === image);
    console.log(value);
    console.log(event.target.value);
    console.log(file);
  };
  console.log(formValue);

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
    file,
    setFile,
    resetForm };
}