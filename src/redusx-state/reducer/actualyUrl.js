import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    url: '',
}

export const actualyUrl = createSlice({
    name: 'actualyUrl',
    initialState,
    reducers: {
        getActualyUrl: (state, action) => {
            state.url = action.payload
        },
    }
})

export const { getActualyUrl } = actualyUrl.actions

export default actualyUrl.reducer