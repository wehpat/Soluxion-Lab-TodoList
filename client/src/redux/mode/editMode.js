import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    edit: false,
}

const editSlice = createSlice({
    name: 'edit',
    initialState,
    reducers: {
        toggleEdit: (state) => {
            state.edit = !state.edit
        }
    }
})

export const { toggleEdit } = editSlice.actions;
export default editSlice.reducer; 

