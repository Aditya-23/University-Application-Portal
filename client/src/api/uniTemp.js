import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const uniApiSlice = createApi({
  reducerPath: "uniApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    prepareHeaders: (headers) => {
      headers.set("Access-Control-Allow-Origin", "*");
      const token = localStorage.getItem("token");
      headers.set("x-auth-token", token);
      return headers;
    },
  }),
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

export const { useGetUniversitiesQuery, useGetUniversityByIdQuery } = uniApiSlice;
