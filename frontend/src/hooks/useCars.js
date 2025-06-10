import {useCallback, useEffect, useState} from "react";
import carRepository from "../repository/carRepository.js";

const initialState = {
    "cars": [],
    "loading": true,
};

const useProducts = () => {
    const [state, setState] = useState(initialState);

    const fetchCars = useCallback(() => {
        setState(initialState);
        carRepository
            .findAll()
            .then((response) => {
                setState({
                    "cars": response.data,
                    "loading": false,
                });
            })
            .catch((error) => console.log(error));
    }, []);

    const onAdd = useCallback((data) => {
        carRepository
            .add(data)
            .then(() => {
                console.log("Successfully added a new car.");
                fetchCars();
            })
            .catch((error) => console.log(error));
    }, [fetchCars]);

    const onEdit = useCallback((id, data) => {
        carRepository
            .edit(id, data)
            .then(() => {
                console.log(`Successfully edited the car with ID ${id}.`);
                fetchCars();
            })
            .catch((error) => console.log(error));
    }, [fetchCars]);

    const onDelete = useCallback((id) => {
        carRepository
            .delete(id)
            .then(() => {
                console.log(`Successfully deleted the car with ID ${id}.`);
                fetchCars();
            })
            .catch((error) => console.log(error));
    }, [fetchCars]);

    useEffect(() => {
        fetchCars();
    }, [fetchCars]);

    return {...state, onAdd: onAdd, onEdit: onEdit, onDelete: onDelete};
};

export default useProducts;