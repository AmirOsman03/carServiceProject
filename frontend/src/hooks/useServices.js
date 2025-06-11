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

    const onStart = useCallback((id) => {
        serviceRepository
            .startService(id)
            .then(() => {
                console.log("Successfully started");
                fetchServices();
            })
            .catch((error) => console.log(error));
    }, [fetchServices]);

    const onCancel = useCallback((id) => {
        serviceRepository
            .cancelService(id)
            .then(() => {
                console.log("Successfully canceled")
                fetchServices();
            })
            .catch((error) => console.log(error));
    },[fetchServices]);

    const onComplete = useCallback((id) => {
        serviceRepository
            .completeService(id)
            .then(() => {
                console.log("Successfully completed")
                fetchServices();
            })
            .catch((error) => console.log(error));
    },[fetchServices]);

    useEffect(() => {
        fetchServices();
    }, [fetchServices])

    return {...state, onStart: onStart, onComplete: onComplete, onCancel: onCancel}
};

export default useServices;