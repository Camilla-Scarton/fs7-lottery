import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        id: null,
    },
    reducers: {        
        login: (state, action) => {
            state.id = action.payload.id
        },

        logout: (state) => {
            state.id = null
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer