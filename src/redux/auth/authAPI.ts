import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
            const res = await axios.post('/auth/login', credentials);
            token.set(res.data.token);

            return res.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    },
);

export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async (_, { getState }) => {
        const {
            session: { token: persistedToken },
        } = getState() as { session: { token: string } };

        if (persistedToken) {
            token.set(persistedToken);
            const res = await axios.get('/users/current');

            return res.data;
        }

        throw new Error('The user is not authorized');
    },

);