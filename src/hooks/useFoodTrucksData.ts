import {fetchFoodTrucksFailure, fetchFoodTrucksStart, fetchFoodTrucksSuccess} from "../store/slices/foodTrucksSlice";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

const mockFetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = require('../data.json');
            resolve({
                json: () => Promise.resolve(data)
            });
        }, 1000) // Simulate a network delay
    });
}

export const useFoodTrucksData = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadData = async () => {
            dispatch(fetchFoodTrucksStart());
            try {
                const response: any = await mockFetch();
                const data = await response.json();
                dispatch(fetchFoodTrucksSuccess(data));
            } catch (error) {
                dispatch(fetchFoodTrucksFailure(error));
            }
        }

        loadData();
    }, [])
}