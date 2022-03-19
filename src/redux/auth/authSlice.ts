import { createSlice } from '@reduxjs/toolkit';
import { signInUser, getCurrentUser } from './authAPI';
import { RootState } from '../store'

type TUser = {
    username: string;
    email: string;
    id: string;
    role: string;
}

interface IAuth {
    user: TUser;
    token: string | null;
    isAuth: boolean;
}

const initialState = { user: {}, token: null, isAuth: false } as IAuth;

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
            .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
                state.user = payload.data;
                state.isAuth = true;
            })

    },
});

const getUserRole = (state: RootState) => state.session.user.role
const getUserAuth = (state: RootState) => state.session.isAuth

export { getUserRole, getUserAuth }