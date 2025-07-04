import React from 'react';
import {NavLink} from "react-router";
import {AppBar, Box, Button, Container, Toolbar} from "@mui/material";
import "./Header.css";
import AuthenticationToggle from "../../auth/AuthenticationToggle/AuthenticationToggle.jsx";

const pages = [
    {"path": "/", "name": "home"},
    {"path": "/cars", "name": "cars"},
    {"path": "/services", "name": "services"},
];

const Header = () => {
    return (
        <Box sx={{my: 2}}>
            <Container
                maxWidth="md"
            >
                <AppBar position="static" sx={{color: "black", backgroundColor: "white", borderRadius: "16px"}}>
                    <Toolbar>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            {pages.map((page) => (
                                <NavLink
                                    key={page.name}
                                    to={page.path}
                                    style={({isActive}) => ({
                                        textDecoration: "none",
                                        color: isActive ? "gold" : "black",
                                        borderBottom: isActive ? "3px solid gold" : "none",
                                    })}
                                >
                                    <Button
                                        sx={{color: "black", display: "block"}}
                                    >
                                        {page.name}
                                    </Button>
                                </NavLink>
                            ))}
                            <AuthenticationToggle/>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Container>
        </Box>
    );
};

export default Header;