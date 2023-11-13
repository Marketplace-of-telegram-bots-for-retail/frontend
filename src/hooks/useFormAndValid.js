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
  // console.log(reader);
  const handleChange = (event) => {
    const { value, name } = event.target;
    // в этой конструкции if определяю если картинка, то делаем файл и массив
    // с массивом чувствую можно проще
    if (event.target === image) {
      console.log('(event.target === image)', event.target.files);

      reader.readAsDataURL(event.target.files[0]);
      reader.onloadend = () => {
        setFile((state) => state.concat(reader.result));
        setFormValue((state) => {
          console.log(state[name]);
          return {
            ...state,
            [name]: !state[name]
              ? Array(reader.result)
              : state[name].concat(reader.result),
          };
        });
      };
    } else {
      setFormValue((state) => {
        return { ...state, [name]: value };
      });
    }
    setInputCount(event.target.value.length);
    setChecked(!checked);
    setErrors({ ...errors, [name]: event.target.validationMessage });
    setValid(event.target.closest('form').checkValidity());
  };
  console.log(formValue);

  const resetForm = useCallback(
    (newFormValue = {}, newErrors = {}, newIsValid = false) => {
      setFormValue(newFormValue);
      setErrors(newErrors);
      setValid(newIsValid);
    },
    [setFormValue, setErrors, setValid]
  );
  return {
    formValue,
    handleChange,
    setFormValue,
    errors,
    isValid,
    setValid,
    inputCount,
    setInputCount,
    file,
    setFile,
    resetForm,
  };
}
