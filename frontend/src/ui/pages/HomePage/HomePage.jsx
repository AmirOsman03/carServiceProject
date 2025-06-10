import React from 'react';
import {Box, Button, Container, Paper, Typography} from "@mui/material";

const HomePage = () => {
    return (
        <Box sx={{backgroundImage: 'url(https://www.workingnation.com/wp-content/uploads/elementor/thumbs/Auto-Mechanic-1-ph7v81qxnj1f457v6ijzzqbfpq3vnpmaxcqmlf356o.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '50vh',
            width: '100%'
        }}>
            <Container maxWidth="xl" sx={{mt: 3, py: 3}}>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Typography variant="h4" gutterBottom fontWeight="bolder" sx={{color: "white", mt:5, pt:5}}>
                        Welcome to Car service
                    </Typography>
                </Box>
                <Box sx={{display: "flex", justifyContent: "center", mt: 2, color: "white"}}>
                    <Typography fontSize="large" gutterBottom>
                        Experience the difference with our professional automotive services and
                        maintenance
                    </Typography>
                </Box>
                <Box sx={{display: "flex", justifyContent: "center", mt: 2}}>
                    <Button variant="outlined" sx={{color: "white", borderColor: "white"}}>
                        LEARN MORE
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default HomePage;