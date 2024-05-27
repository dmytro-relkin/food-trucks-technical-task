import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {FoodTruck} from "../../types";

interface FoodTrucksState {
    data: FoodTruck[];
    loading: boolean;
    error: string | null;
}

const initialState: FoodTrucksState = {
    data: [],
    loading: false,
    error: null,
};

const foodTrucksSlice = createSlice({
    name: 'foodTrucks',
    initialState,
    reducers: {
        fetchFoodTrucksStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchFoodTrucksSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        fetchFoodTrucksFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
});

export const {fetchFoodTrucksStart, fetchFoodTrucksSuccess, fetchFoodTrucksFailure} = foodTrucksSlice.actions;
export default foodTrucksSlice.reducer;
