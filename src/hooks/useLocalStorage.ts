import * as React from 'react';

const useLocalStorage = (key: string) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const valueInStorage = window.localStorage.getItem(key);
      return valueInStorage ? JSON.parse(valueInStorage) : "";
    } catch (error) {
      console.log();
      return "";
    }
  });

  const setValueToLocalStorage = (value: any) => {
    try {
      setStoredValue(JSON.stringify(value));
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }

  return [storedValue, setValueToLocalStorage]
}

export default useLocalStorage;
