import React from "react";
import {FoodTruck} from "../../types";
import './styles.scss';
import defaultTexts from "../../consts";

interface IFoodTrucksTableProps {
    data: FoodTruck[];
}

interface IFoodTruckTableRowProps {
    item: FoodTruck;
}

const FoodTruckTableRow = React.memo(function TableRow({ item }: IFoodTruckTableRowProps) {
    return (
        <tr key={item.locationid}>
            <td>{item.Applicant}</td>
            <td>{item.Address}</td>
            <td>{item.FoodItems}</td>
        </tr>
    )
})

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
                    <FoodTruckTableRow key={truck.locationid} item={truck} />
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default FoodTrucksTable;