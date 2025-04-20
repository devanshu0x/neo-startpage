import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import {loadFromLocalStorage, saveToLocalStorage} from "../utility/localStorageHelpers"


const preloadedState= loadFromLocalStorage(); 

export const store= configureStore({
    reducer:todoReducer,
    preloadedState,
});

store.subscribe(()=>{
    saveToLocalStorage(store.getState());
})