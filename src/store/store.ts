import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';
import { createLogger } from 'redux-logger'

const logger = createLogger({
    predicate: (_, action: { type: string }) => action.type.startsWith('api/'),
});

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
            .concat(baseApi.middleware)
            .concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
