import { useEffect, useState } from 'react';

const getStorageData = (key, defaultValue) => {
  const savedItem = localStorage.getItem(key);
  const parsedItem = JSON.parse(savedItem);
  return parsedItem || defaultValue;
};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageData(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};