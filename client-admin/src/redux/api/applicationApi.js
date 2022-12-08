import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./apiSlice.js";

export const applicationApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        // GET /applications/?studentId]][]=studentId
        getApplicationsByUniId: builder.query({
            query: UniId => `applications/?universityId=${UniId}`,
            providesTags: result =>
                // is result available?
                result
                    ? // successful query
                      [
                          ...result.map(({ id }) => ({ type: "Applications", id })),
                          { type: "Applications", id: "LIST" },
                      ]
                    : // an error occurred, but we still want to refetch this query when `{ type: 'Applications', id: 'LIST' }` is invalidated
                      [{ type: "Applications", id: "LIST" }],
        }),
        updateApplication: builder.mutation({
            query(data) {
                const { _id, ...body } = data;
                return {
                    url: `applications/${_id}`,
                    method: "PUT",
                    body,
                };
            },
            // Invalidates all queries that subscribe to this Post `id` only.
            // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
            invalidatesTags: (result, error, { id }) => [{ type: "Applications", id }],
        }),
    }),
});

export const { useGetApplicationsByUniIdQuery, useUpdateApplicationMutation } =
    applicationApiSlice;
