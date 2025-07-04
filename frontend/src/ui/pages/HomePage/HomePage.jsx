import React from 'react';
import {Box, Button, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router";
import StatsSection from "../../components/statistics/StatsSection.jsx";
import Testimonials from "../../components/testimonials/Testimonials.jsx";

const HomePage = () => {
    const navigate = useNavigate();

    const nav = () => {
        navigate("/services")
    }

    return (
        <Box sx={{minHeight: "100vh", my: 4}}>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {xs: "1fr", md: "1fr 1fr"},
                        gap: 5,
                        alignItems: "center"
                    }}
                >
                    <Box>
                        <Typography variant="h2" fontWeight="light" color="black" gutterBottom>
                            Welcome to Car Service
                        </Typography>
                        <Typography fontSize="large" color="black" gutterBottom>
                            Keep your vehicle in top shape — make your service appointment today.
                        </Typography>
                        <Button onClick={nav} variant="outlined" color={"inherit"} sx={{mt: 3}}>
                            Explore services
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            borderRadius: "16px",
                            boxShadow: "0 8px 24px rgba(255, 235, 59, 1.2)",
                            overflow: "hidden",
                            width: "100%",
                        }}
                    >
                        <img
                            src={"src/assets/service.jpg"}
                            alt=""
                            style={{
                                width: "100%",
                                height: "50vh",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </Box>

                </Box>
                <Testimonials/>
                <StatsSection/>
            </Container>
        </Box>
    );
};

export default HomePage;