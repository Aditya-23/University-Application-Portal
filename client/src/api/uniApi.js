import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./apiSlice.js";

export const uniApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // GET /universities
    getUniversities: builder.query({
      query: () => "universities",
      providesTags: ["Universities"],
    }),
    // GET /universities/:id
    getUniversityById: builder.query({
      query: (id) => `/universities/${id}`,
    }),
  }),
});

export const { useGetUniversitiesQuery, useGetUniversityByIdQuery } =
  uniApiSlice;
