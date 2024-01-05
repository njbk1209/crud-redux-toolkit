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
        },
        editTask: (state, action) => {
            const {id, title, description} = action.payload

            const foundTask = state.find(task => task.id === id)

            if (foundTask){
                foundTask.title = title
                foundTask.description = description
            }
        }
    }
})

export const { addTask, deleteTask, editTask } = taskSlice.actions

export default taskSlice.reducer