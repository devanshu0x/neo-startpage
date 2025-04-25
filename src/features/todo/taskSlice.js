import { createSlice, nanoid } from "@reduxjs/toolkit"



const initialState={
    tasks: [],
    date: (new Date()).setHours(0,0,0,0),
}

export const taskSlice= createSlice({
    name:"task",
    initialState,
    reducers:{
        // properties and function
        addTask: (state, action)=>{
            const task={
                id:nanoid(),
                description:action.payload,
                startDate: (new Date()).setHours(0,0,0,0),
                completed:false
            }
            state.tasks.push(task);
        },
        removeTask: (state,action)=>{
            state.tasks= state.tasks.filter((task)=> task.id!== action.payload)
        },
        toggleComplete: (state,action)=>{
            state.tasks.find((task)=>task.id===action.payload.id).completed=action.payload.completed
        }
    }
})

export const {addTask, removeTask, toggleComplete }=taskSlice.actions

export default taskSlice.reducer