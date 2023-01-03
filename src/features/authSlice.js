import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const baseUrl = process.env.REACT_APP_BACKEND_URL

const initialState = {
    loading: false,
    user: {}, // for user object
    userToken: localStorage.getItem('userToken') ?? null,
    error: null,
    // success: false, // for monitoring the registration process.
}

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(
                `${baseUrl}auth/login`,
                { username, password },
                config
            )
            localStorage.setItem('userToken', data.token)
            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken')
            state.loading = false
            state.user = null
            state.userToken = null
            state.error = null
            // state.success = false
        },
    },
    extraReducers:
        (builder) => {
            builder
                // login user
                .addCase(userLogin.pending, (state) => {
                    state.loading = true
                    state.error = null
                })
                .addCase(userLogin.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.user = payload
                    state.userToken = payload.token
                    // state.success = true
                })
                .addCase(userLogin.rejected, (state, { payload }) => {
                    state.loading = false
                    state.error = payload
                })
        },
})
export const { logout } = authSlice.actions
export default authSlice.reducer