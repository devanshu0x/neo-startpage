import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/todo/taskSlice";
import {loadFromLocalStorage, saveToLocalStorage} from "../utility/localStorageHelpers"


const preloadedState= loadFromLocalStorage(); 

export const store= configureStore({
    reducer:{
        task: taskReducer,
    },
    preloadedState,
});

store.subscribe(()=>{
    saveToLocalStorage(store.getState());
})