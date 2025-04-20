import { createSlice, nanoid } from "@reduxjs/toolkit"



const initialState={
    todos: []
}

export const todoSlice= createSlice({
    name:"todo",
    initialState,
    reducers:{
        // properties and function
        addTodo: (state, action)=>{
            const todo={
                id:nanoid(),
                description:action.payload.description,
                startDate: (new Date()).setHours(0,0,0,0),
                completed:false
            }
            state.todos.push(todo);
        },
        removeTodo: (state,action)=>{
            state.todos= state.todos.filter((todo)=> todo.id!== action.payload.id)
        },
        toggleComplete: (state,action)=>{
            // since todo is an array which contain objects i can change them directly as they are reference type
            state.todos.find((todo)=>todo.id===action.payload.id).completed=action.payload.completed
        }
    }
})

export const {addTodo, removeTodo, toggleComplete }=todoSlice.actions

export default todoSlice.reducer