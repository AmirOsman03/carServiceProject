import React from 'react';
import useAuth from "../../../../hooks/useAuth.js";
import {useNavigate} from "react-router";
import {Button} from "@mui/material";

const AuthenticationToggle = () => {
    const {logout, isLoggedIn} = useAuth();

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <Button
            color={!isLoggedIn ? "inherit" : "error"}
            onClick={!isLoggedIn ? handleLogin : handleLogout}
        >
            {!isLoggedIn ? "Login" : "Logout"}
        </Button>
    );
};

export default AuthenticationToggle;