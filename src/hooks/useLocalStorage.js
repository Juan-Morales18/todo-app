import { useState, useEffect } from "react";

function useLocalStorage(dbName, initialValue) {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(false);

  //Create or get the db
  useEffect(() => {
    try {
      if (localStorage.getItem(dbName) === null) {
        localStorage.setItem(dbName, JSON.stringify(initialValue));
      } else {
        const parsedData = JSON.parse(localStorage.getItem(dbName));
        setData(parsedData);
      }
    } catch (error) {
      setError(true);
    }
  }, []);

  const saveData = (newData) => {
    try {
      const stringifiedData = JSON.stringify(newData);
      localStorage.setItem(dbName, stringifiedData);

      setData(newData);
    } catch (error) {
      setError(true);
    }
  };

  return { data, saveData, error };
}

export { useLocalStorage };
