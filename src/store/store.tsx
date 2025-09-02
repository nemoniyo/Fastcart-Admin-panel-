import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { todo } from '../reducers/todoslice'

export const store = configureStore({
    reducer: {
        [todo.reducerPath]: todo.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todo.middleware),
})

setupListeners(store.dispatch)