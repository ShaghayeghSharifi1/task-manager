import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6166c3df13aa1d00170a66b9.mockapi.io',
        prepareHeaders: (headers) => {
            // const token = localStorage.getItem('token');
            // if (token) {
            //     headers.set('Authorization', `Bearer ${token}`);
            // }
            headers.set('Content-Type', 'application/json');
            headers.set('Accept', 'application/json');
            return headers;
        },
    }),
    tagTypes: ['Tasks'],
    endpoints: () => ({}),
});
