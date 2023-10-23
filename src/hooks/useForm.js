import { useState } from 'react';

export const useForm = () => {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
};

export const useCheckbox = () => {
  const [valuesCheckbox, setValuesCheckbox] = useState({});

  const handleChangeCheckbox = (event) => {
    const { id, checked } = event.target;
    setValuesCheckbox({ ...valuesCheckbox, [id]: checked });
  };
  return { valuesCheckbox, handleChangeCheckbox, setValuesCheckbox };
};
