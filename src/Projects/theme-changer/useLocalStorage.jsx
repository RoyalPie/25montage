import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let current;
    try {
      current = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (error) {
      console.log(error);
      current = defaultValue;
    }

    return current;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
