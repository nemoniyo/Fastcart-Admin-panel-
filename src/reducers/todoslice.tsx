import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API } from '../config';

export const getData = createAsyncThunk("counter/getData", async () => {
    try {
        const { data } = await API.get("Product/get-products");
        return data;
    } catch (error) {
        console.error(error);
    }
});

export const getCategory = createAsyncThunk("counter/getCategory", async () => {
    try {
        const { data } = await API.get('Category/get-categories');
        return data;
    } catch (error) {
        console.error(error);
    }
});

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        data: [],
        loading: false,
        category: []
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getData.pending, state => {
            state.loading = true;
        })
            .addCase(getData.fulfilled, (state, { payload }) => {
                state.loading = false
                state.data = payload
            })
            .addCase(getCategory.fulfilled, (state, { payload }) => {
                state.loading = false
                state.category = payload
            });
}
})


export default counterSlice.reducer