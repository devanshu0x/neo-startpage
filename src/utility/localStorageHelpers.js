// localStorageHelpers.js

export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("State");
    if (serializedState === null) return undefined; // use default initial state
    const state = JSON.parse(serializedState);
    if (state.date === new Date().setHours(0, 0, 0, 0)) {
      return state;
    } else {
      // here i wnat to keep ony todo which are not completed
      return {
        ...state,
        date: new Date().setHours(0, 0, 0, 0),
        todos: state.todos.filter((todo) => !todo.completed),
      };
    }
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
