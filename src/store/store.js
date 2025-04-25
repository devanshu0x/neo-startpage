import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/todo/taskSlice";
import statsReducer from "../features/stats/statsSlice";
import {loadFromLocalStorage, saveToLocalStorage} from "../utility/localStorageHelpers"


const preloadedState= loadFromLocalStorage(); 

export const store= configureStore({
    reducer:{
        task: taskReducer,
        stats: statsReducer
    },
    preloadedState,
});

store.subscribe(()=>{
    saveToLocalStorage(store.getState());
})