import { configureStore } from '@reduxjs/toolkit';
import foodTrucksReducer from './slices/foodTrucksSlice';

const store = configureStore({
    reducer: {
        foodTrucks: foodTrucksReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
