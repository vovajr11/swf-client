import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from '../redux/auth/authSlice'

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const combinedReducer = combineReducers({
    session: persistReducer(authPersistConfig, authSlice.reducer),
});

const rootReducer = (state: any, action: any) => {
    if (action.type === 'auth/signOutUser/fulfilled') {
        state = undefined;
    }

    return combinedReducer(state, action);
};


export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [PERSIST],
            },
        }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>