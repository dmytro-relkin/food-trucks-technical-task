import React from 'react';
import './components/FoodTrucks/App.scss';
import FoodTrucks from './components/FoodTrucks/FoodTrucks';
import {useFoodTrucksData} from "./hooks/useFoodTrucksData";

function App() {
    useFoodTrucksData();

    return (
        <div className="App">
          <FoodTrucks />
        </div>
    );
}

export default App;
