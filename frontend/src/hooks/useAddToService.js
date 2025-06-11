import { useState } from "react";
import carRepository from "../repository/carRepository.js";

const useAddToService = () => {
    const [data, setData] = useState(null);

    const addToService = (carId, data) => {
        return carRepository.addToService(carId, data)
            .then((response) => {
                setData(response.data);
                return response.data;
            })
            .catch((error) => console.log(error));
    };

    return { addToService, data };
};

export default useAddToService;
