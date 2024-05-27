import React from "react";
import {FoodTruck} from "../../types";
import './styles.scss';
import defaultTexts from "../../consts";

interface IFoodTrucksTableProps {
    data: FoodTruck[];
}

const FoodTrucksTable: React.FC<IFoodTrucksTableProps> = ({data}) => {
    if (!data) {
        return null;
    }

    const titles = defaultTexts.table

    return (
        <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th>{titles.applicant}</th>
                    <th>{titles.address}</th>
                    <th>{titles.foodItems}</th>
                </tr>
                </thead>
                <tbody>
                {data.map(truck => (
                    <tr key={truck.locationid}>
                        <td>{truck.Applicant}</td>
                        <td>{truck.Address}</td>
                        <td>{truck.FoodItems}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default FoodTrucksTable;