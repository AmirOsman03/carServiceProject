import React from "react";
import {Box, Typography, Grid} from "@mui/material";
import CountUp from "react-countup";

const stats = [
    {
        image: "src/assets/rocket.png",
        label: "Registered Users",
        value: 100,
    },
    {
        image: "src/assets/tool.png",
        label: "Completed Services",
        value: 250,
    },
    {
        image: "src/assets/map.png",
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
                            height="30vh"
                        >
                            <Box
                                sx={{
                                    width: "300px",
                                    height: "100%",
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
                                <img
                                    src={stat.image}
                                    alt={stat.label}
                                    style={{ width: "150px", height: "150px", marginBottom: "10px" }}
                                />
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