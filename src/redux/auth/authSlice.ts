import { createSlice } from '@reduxjs/toolkit';
import { signInUser } from './authAPI'

type TUser = {
    username: string;
    email: string;
    id: string;
}

interface IAuth {
    user: TUser | null;
    token: string | null;
    isAuth: boolean;
}

const initialState = { user: null, token: null, isAuth: false } as IAuth;

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(signInUser.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isAuth = true;
            })
    },
});

