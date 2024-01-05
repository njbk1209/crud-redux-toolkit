import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        //In the reducer there will be the functions that will generate the state changes.
    }
})

export default taskSlice.reducer