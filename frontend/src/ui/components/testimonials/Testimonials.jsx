import React from 'react';
import {Box, Typography, Paper, Grid, Avatar, Rating} from "@mui/material";

const testimonials = [
    {
        name: "Marko T.",
        quote: "Super fast and professional service! Highly recommend.",
        rating: 5,
        avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
        name: "Ana K.",
        quote: "My car feels brand new after the service. Friendly staff!",
        rating: 4,
        avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
        name: "Jovan S.",
        quote: "Great prices and quick turnaround. Will come back for sure.",
        rating: 5,
        avatar: "https://i.pravatar.cc/100?img=3",
    },
];

const Testimonials = () => {
    return (
        <Box sx={{py: 8}}>
            <Typography variant="h4" textAlign="center" gutterBottom fontWeight="lighter" sx={{my: 3}}>
                What Our Customers Say
            </Typography>
            <Grid container spacing={5} justifyContent="center">
                {testimonials.map(({name, quote, rating, avatar}, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Paper
                            elevation={3}
                            sx={{
                                my: 3,
                                p: 3,
                                borderRadius: 3,
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                backgroundColor: "white",
                                width: "300px",
                                boxShadow: 10
                            }}
                        >
                            <Avatar src={avatar} alt={name} sx={{width: 72, height: 72, mb: 2}}/>
                            <Typography variant="body1" sx={{fontStyle: "italic", mb: 2}}>
                                "{quote}"
                            </Typography>
                            <Rating value={rating} readOnly precision={0.5}/>
                            <Typography variant="subtitle1" sx={{mt: 2, fontWeight: "bold"}}>
                                {name}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Testimonials;