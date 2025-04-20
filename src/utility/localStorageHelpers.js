// localStorageHelpers.js

export const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem("State");
      if (serializedState === null) return undefined; // use default initial state
      return JSON.parse(serializedState);
    } catch (e) {
      console.warn("Could not load from localStorage", e);
      return undefined;
    }
  };
  
  export const saveToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("State", serializedState);
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  };
  