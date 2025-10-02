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
            query: () => `UserProfile/get-user-profiles?PageNumber=1&PageSize=1000`,
            providesTags: ["todo"]
        }),
        getProducts: build.query({
            query: () => `Product/get-products?PageNumber=1&PageSize=110`,
            providesTags: ["todo"]
        }),
        getCategoryes: build.query({
            query: () => `Category/get-categories`,
            providesTags: ["todo"]
        }),
        getBrands: build.query({
            query: () => `Brand/get-brands`,
            providesTags: ["todo"]
        }),
        getSubcategoryes: build.query({
            query: () => `SubCategory/get-sub-category`,
            providesTags: ["todo"]
        }),
        deleteSubcategoryes: build.mutation({
            query: (id) => ({
                url: `SubCategory/delete-sub-category?id=${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["todo"]
        }),
        editSubcategoryes: build.mutation({
            query: (obj) => ({
                url: `SubCategory/update-sub-category`,
                method: 'PUT',
                body: obj,
            }),
            invalidatesTags: ["todo"],
        }),
        deleteData: build.mutation({
            query: (id) => ({
                url: `UserProfile/delete-user?id=${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["todo"]
        }),
        deleteBrands: build.mutation({
            query: (id) => ({
                url: `Brand/delete-brand?id=${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["todo"]
        }),
        deleteCategoryes: build.mutation({
            query: (id) => ({
                url: `Category/delete-category?id=${id}`,
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
        }),
        editCategoryes: build.mutation({
            query: (obj) => ({
                url: `Category/update-category`,
                method: 'PUT',
                body: obj,
            }),
            invalidatesTags: ["todo"],
        }),
        editBrands: build.mutation({
            query: (obj) => ({
                url: `Brand/update-brand`,
                method: 'PUT',
                body: obj,
            }),
            invalidatesTags: ["todo"],
        }),
    }),
})

export const { useGetDataQuery, useDeleteDataMutation, useGetProductsQuery, useDeleteProductMutation, useRoleUserMutation, useRoleDeleteMutation, useGetCategoryesQuery, useDeleteCategoryesMutation, useEditCategoryesMutation, useGetBrandsQuery, useDeleteBrandsMutation, useEditBrandsMutation, useGetSubcategoryesQuery, useDeleteSubcategoryesMutation, useEditSubcategoryesMutation } = todo;
