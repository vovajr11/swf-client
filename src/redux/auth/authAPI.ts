import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:5000/api';

const token = {
    set(token: string) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common['Authorization'] = '';
    },
};

export const signInUser = createAsyncThunk(
    'auth/signInUser',
    async (credentials: object, { rejectWithValue }) => {
        try {
            const res = await axios.put('/users/sign-in', credentials);
            token.set(res.data.token);

            return res.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    },
);