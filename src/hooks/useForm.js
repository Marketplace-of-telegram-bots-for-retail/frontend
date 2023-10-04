import { useState } from 'react';

export const useForm = () => {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
};
