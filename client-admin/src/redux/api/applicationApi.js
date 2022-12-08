import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./apiSlice.js";

export const applicationApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        // GET /applications/?studentId]][]=studentId
        getApplicationsByUniId: builder.query({
            query: UniId => `applications/?universityId=${UniId}`,
            providesTags: ["Applications"],
            refetchOnWindowFocus: true,
        }),
    }),
});

export const { useGetApplicationsByUniIdQuery } = applicationApiSlice;
