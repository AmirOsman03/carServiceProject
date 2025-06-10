import React from 'react';
import {Link} from "react-router";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css";
import AuthenticationToggle from "../../auth/AuthenticationToggle/AuthenticationToggle.jsx";

const pages = [
    {"path": "/", "name": "home"},
    {"path": "/cars", "name": "cars"},
    {"path": "/services", "name": "services"},
];

const Header = () => {
    return (
        <Box>
            <AppBar position="static" sx={{backgroundColor: "#212121", color: "white"}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{mr: 3}}>
                        Car Service
                    </Typography>
                    <Box sx={{
                        flexGrow: 1,
                        display: {xs: "none", md: "flex"},
                        justifyContent: "space-evenly",
                    }}>
                        {pages.map((page) => (
                            <Link key={page.name} to={page.path}>
                                <Button
                                    sx={{my: 2, color: "white", display: "block", textDecoration: "none"}}
                                >
                                    {page.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <AuthenticationToggle/>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;