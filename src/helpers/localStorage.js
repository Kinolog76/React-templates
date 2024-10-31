// setLocalStorage.js
export const setLocalStorage = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("Error setting value in localStorage", error);
  }
};

// getLocalStorage.js
export const getLocalStorage = (key) => {
  try {
    const serializedValue = localStorage.getItem(key);
    return serializedValue ? JSON.parse(serializedValue) : null;
  } catch (error) {
    console.error("Error getting value from localStorage", error);
    return null;
  }
};
