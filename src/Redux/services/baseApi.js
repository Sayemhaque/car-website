import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'cars.json' }),
    endpoints: (builder) => ({
        getCars: builder.query({
            query: () => ``,
        }),
    }),
})


export const {useGetCarsQuery} = baseApi;