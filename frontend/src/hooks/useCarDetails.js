import {useEffect, useState} from "react";
import carRepository from "../repository/carRepository.js";

const useCarDetails = (id) => {
    const [state, setState] = useState({
        "car": null,
    });

    useEffect(() => {
        carRepository
            .findById(id)
            .then((response) => {
                setState(prevState => ({...prevState, "car": response.data}));
            })
            .catch((error) => console.log(error));
    }, [id]);

    return state;
};

export default useCarDetails;