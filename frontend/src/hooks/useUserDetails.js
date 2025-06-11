import { useEffect, useState } from "react";
import userRepository from "../repository/userRepository.js";

const useUserDetails = () => {
    const [state, setState] = useState({
        role: "",
        loading: true,
        error: null,
    });

    useEffect(() => {
        userRepository
            .me()
            .then((response) => {
                setState({
                    role: response.data.role,
                    loading: false,
                    error: null
                });
            })
            .catch((error) => {
                console.error("Failed to fetch user details:", error);
                setState({
                    role: "",
                    loading: false,
                    error: error
                });
            });
    }, []);

    return state;
};

export default useUserDetails;
