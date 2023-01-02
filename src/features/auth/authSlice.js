import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const baseUrl = process.env.REACT_APP_BACKEND_URL


const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
}

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(
                `${baseUrl}auth/login`,
                { email, password },
                config
            )
            // store user's token in local storage
            localStorage.setItem('userToken', data.userToken)
            return data
        } catch (error) {
            // return custom error message from API if any
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
    reducers: {},
    extraReducers: {

    },
})

export default authSlice.reducer