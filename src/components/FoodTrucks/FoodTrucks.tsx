import React, { useEffect, useState } from 'react';
import Map from '../Map/Map';
import { FoodTruck } from '../../types';
import './App.scss';
import {useSelector} from "react-redux";
import FoodTrucksTable from "../FoodTrucksTable/FoodTrucksTable";
import SearchBar from "../SearchBar/SearchBar";
import defaultTexts from "../../consts";

const FoodTrucks: React.FC = () => {
    const [foodTrucks, setFoodTrucks] = useState<FoodTruck[]>([]);
    const [filteredTrucks, setFilteredTrucks] = useState<FoodTruck[]>([]);
    const [search, setSearch] = useState('');

    const { data, loading, error } = useSelector((state: any) => state.foodTrucks);

    useEffect(() => {
        setFoodTrucks(data);
        setFilteredTrucks(data);
    }, [data, loading, error]);

    useEffect(() => {
        if (foodTrucks !== undefined) {
            const results = foodTrucks.filter(truck =>
                truck.FoodItems.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredTrucks(results);
        }
    }, [search, foodTrucks]);

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

    if (loading) return <p>{defaultTexts.loadingTitle}</p>;
    if (error) return <p>{defaultTexts.errorTitle}</p>;

    return (
        <div className="MainContainer">
            <header>
                <h1>{defaultTexts.mainHeader}</h1>
            </header>
            <SearchBar
                value={search}
                onChange={onSearchChange}
            />
            <Map trucks={filteredTrucks} />
            <FoodTrucksTable data={filteredTrucks} />
        </div>
    );
};

export default FoodTrucks;
