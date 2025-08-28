import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/todoslice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})