import React, {useState} from 'react';
import userRepository from "../../../../repository/userRepository.js";
import {useNavigate} from "react-router";
import useAuth from "../../../../hooks/useAuth.js";
import {Box, Button, Container, Grid, Paper, TextField, Typography} from "@mui/material";

const initialFormData = {
    "username": "",
    "password": "",
};

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialFormData);

    const {login} = useAuth();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        userRepository
            .login(formData)
            .then((response) => {
                console.log("The user is successfully logged in.")
                login(response.data.token);
                navigate("/");
            })
            .catch((error) => console.log(error));
    };

    return (
        <Container>
            <Button variant="contained" sx={{ marginTop: 4}} onClick={() => navigate("/")} color="inherit">Back</Button>
            <Paper elevation={3} sx={{paddingX: 10, paddingY: 15, mt: 2}}>
                <Grid container spacing={2}>
                    <Grid item sx={12} md={6}>
                        <Container>
                            <Box>
                                <Typography variant="h5" gutterBottom fontWeight="bolder">
                                    Welcome back
                                </Typography>
                                <Typography variant="body2" gutterBottom fontWeight="lighter" sx={{ color: "gray" }}>
                                    Please enter your details
                                </Typography>
                            </Box>
                            <Box>
                                <TextField
                                    fullWidth
                                    variant={"standard"}
                                    label="Username"
                                    name="username"
                                    margin="normal"
                                    required
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                                <TextField
                                    fullWidth
                                    variant={"standard"}
                                    label="Password"
                                    name="password"
                                    type="password"
                                    margin="normal"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <Button
                                    fullWidth
                                    variant="contained"
                                    type="submit"
                                    sx={{
                                        mt: 2,
                                        backgroundColor: "#222",
                                        color: "white"
                                    }}
                                    color="dark"
                                    onClick={handleSubmit}>
                                    Login
                                </Button>
                                <Typography variant="body2" align="center" gutterBottom sx={{ mt: 2 }}>
                                    Don't have an account?{" "}
                                    <Box
                                        component="span"
                                        sx={{ color: "primary.main", cursor: "pointer", textDecoration: "underline" }}
                                        onClick={() => navigate("/register")}
                                    >
                                        Sign up
                                    </Box>
                                </Typography>
                            </Box>
                        </Container>
                    </Grid>
                    <Grid item sx={12} md={6}>
                            <img
                                src="https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.jpg?s=612x612&w=0&k=20&c=5zlDGgLNNaWsp_jq_L1AsGT85wrzpdl3kVH-75S-zTU="
                                alt="Login illustration"
                                style={{ width: 500, height: "100%", objectFit: "cover" }}
                            />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Login;