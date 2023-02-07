import { createSlice } from '@reduxjs/toolkit'

export const authSlice = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    return createSlice({
        name: 'auth',
        initialState: {
            id: auth?.id || null,
        },
        reducers: {        
            login: (state, action) => {
                state.id = action.payload.id
                localStorage.setItem("auth",JSON.stringify({ id: action.payload.id }))
            },
    
            logout: (state) => {
                state.id = null
                localStorage.removeItem("auth")
            }
        },
    })
}

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice().actions

export default authSlice().reducer