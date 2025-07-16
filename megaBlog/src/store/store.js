import { configureStore } from '@reduxjs/toolkit';
import { login } from './authSlice';

const store = configureStore({
    reducer: {
        someKey: login,
    }
});

export default store;