import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: "1",
        title: "Task 1",
        description: "Task 1 description",
        completed: false
    },
    {
        id: "2",
        title: "Task 2",
        description: "Task 2 description",
        completed: false
    },
]


export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        //In the reducer there will be the functions that will generate the state changes.
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload)
            if (taskFound){
                state.splice(state.indexOf(taskFound), 1)
            }
        }
    }
})

export const { addTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer