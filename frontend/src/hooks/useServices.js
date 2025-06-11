import {useCallback, useEffect, useState} from "react";
import serviceRepository from "../repository/serviceRepository.js";

const initialState = {
    "services": [],
    "loading": true,
};

const useServices = () => {
    const [state, setState] = useState(initialState);

    const fetchServices = useCallback(() => {
        setState(initialState);
        serviceRepository
            .findAll()
            .then((response) => {
                setState({
                    "services": response.data,
                    "loading": false,
                });
            })
            .catch((error) => console.log(error));
    }, [])

    useEffect(() => {
        fetchServices();
    }, [fetchServices])

    return {...state}
};

export default useServices;