import React from "react";
import {Box, Typography, Grid} from "@mui/material";
import CountUp from "react-countup";
import PeopleIcon from '@mui/icons-material/People';
import BuildIcon from '@mui/icons-material/Build';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const stats = [
    {
        icon: <PeopleIcon fontSize="large" sx={{color: "#1976d2"}}/>,
        label: "Registered Users",
        value: 100,
    },
    {
        icon: <BuildIcon fontSize="large" sx={{color: "#388e3c"}}/>,
        label: "Completed Services",
        value: 250,
    },
    {
        icon: <LocationOnIcon fontSize="large" sx={{color: "#f57c00"}}/>,
        label: "Partnered Workshops",
        value: 10,
    },
];

const StatsSection = () => {
    return (
        <Box sx={{my: 20}}>
            <Grid container spacing={20} justifyContent="center">
                {stats.map((stat, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} textAlign="center">
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            height="20vh"
                        >
                            <Box
                                sx={{
                                    width: "300px",
                                    height: "100%",
                                    border: "1px solid green",
                                    borderRadius: "16px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "white",
                                    p: 3,
                                    boxShadow: 15,
                                }}
                            >
                                {stat.icon}
                                <Typography variant="h4" fontWeight="bold" sx={{mt: 1}}>
                                    <CountUp end={stat.value} duration={10}/>+
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {stat.label}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Typography
                variant="h6"
                color="textSecondary"
                textAlign="center"
                sx={{mt: 10, maxWidth: 600, mx: "auto"}}
            >
                Thank you for the trust and support! We are committed to providing the best car service experience.
            </Typography>
        </Box>

    );
};

export default StatsSection;