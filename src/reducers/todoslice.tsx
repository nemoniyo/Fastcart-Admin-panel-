import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todo = createApi({
    reducerPath: 'todo',
    tagTypes: ['todo'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://37.27.29.18:8002/',
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("accessToken");
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (build) => ({
        getData: build.query({
            query: () => `UserProfile/get-user-profiles?PageNumber=3&PageSize=50`,
            providesTags: ["todo"]
        }),
        getProducts: build.query({
            query: () => `Product/get-products`,
            providesTags: ["todo"]
        }),
        deleteData: build.mutation({
            query: (id) => ({
                url: `UserProfile/delete-user?id=${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["todo"]
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `Product/delete-product?id=${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["todo"]
        }),
        roleUser: build.mutation({
            query: ({ id1, id2 }) => ({
                url: `UserProfile/addrole-from-user?UserId=${id1}&RoleId=${id2}`,
                method: 'POST',
            }),
            invalidatesTags: ["todo"],
        }),
        roleDelete: build.mutation({
            query: ({ id1, id2 }) => ({
                url: `UserProfile/remove-role-from-user?UserId=${id1}&RoleId=${id2}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["todo"],
        })
    }),
})

export const { useGetDataQuery, useDeleteDataMutation, useGetProductsQuery, useDeleteProductMutation, useRoleUserMutation, useRoleDeleteMutation } = todo;
