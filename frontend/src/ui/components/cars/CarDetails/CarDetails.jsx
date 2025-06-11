import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router";
import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    CircularProgress,
    Divider,
    Grid,
    Typography,
    Paper,
    Avatar,
    Stack,
    Rating,
    Breadcrumbs,
    Link
} from "@mui/material";
import {
    ArrowBack,
    Category,
    Factory,
    Star,
    ShoppingCart,
    FavoriteBorder,
    Share
} from "@mui/icons-material";
import useCarDetails from "../../../../hooks/useCarDetails.js";
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import SelectServiceDialog from "../../services/SelectServiceDialog/SelectServiceDialog.jsx";
import DirectionsCarFilledTwoToneIcon from "@mui/icons-material/DirectionsCarFilledTwoTone";
import useAddToService from "../../../../hooks/useAddToService.js";

const CarDetails = () => {
    const {id} = useParams();
    const {car} = useCarDetails(id);
    const navigate = useNavigate();
    const [selectServiceDialogOpen, setSelectServiceDialogOpen] = useState(false);
    const {addToService, error} = useAddToService();

    const handleChange = (carId, serviceData) => {
        addToService(carId, serviceData)
            .then(() => console.log("Successfully added to service"))
            .catch(() => console.log(error));
    };

    if (!car) {
        return (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh'}}>
                <CircularProgress/>
            </Box>
        );
    }

    return (
        <>
            <Box>
                <Breadcrumbs aria-label="breadcrumb" sx={{mb: 3}}>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/cars");
                        }}
                    >
                        Cars
                    </Link>
                    <Typography color="text.primary">{car.manufacturer}</Typography>
                </Breadcrumbs>

                <Paper elevation={2} sx={{p: 4, borderRadius: 4}}>
                    <Grid container spacing={4}>
                        <Grid size={{xs: 12, md: 3}}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mb: 4,
                                p: 3,
                                borderRadius: 3,
                                boxShadow: 1
                            }}>
                                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <DirectionsCarFilledTwoToneIcon
                                        fontSize="large"
                                        sx={{fontSize: 200, marginTop: 2}}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{xs: 12, md: 9}}>
                            <Box sx={{mb: 3}}>
                                <Typography variant="h3" gutterBottom sx={{fontWeight: 600}}>
                                    {car.manufacturer}
                                </Typography>
                                <Typography variant="h4" gutterBottom>
                                    Model: {car.model}
                                </Typography>
                                <Typography fontSize={"x-large"} sx={{mb: 3}}>
                                    Current kilometers: {car.currentKm} km
                                </Typography>

                                <Typography variant="body1" sx={{mb: 3}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur culpa
                                    doloribus, enim maiores possimus similique totam ut veniam voluptatibus. Adipisci
                                    consequatur, cum dolorem eaque enim explicabo fugit harum, id laborum non totam ut!
                                    Architecto assumenda deserunt doloribus ducimus labore magnam officiis sunt. Autem
                                    culpa
                                    eaque obcaecati quasi, quo vitae.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={12} display="flex" justifyContent="space-between">
                            <Stack direction="row" spacing={2}>
                                <Button
                                    variant="contained"
                                    color="warning"
                                    startIcon={<ManageAccountsTwoToneIcon/>}
                                    size="large"
                                    onClick={() => setSelectServiceDialogOpen(true)}
                                >
                                    Select Service
                                </Button>
                            </Stack>
                            <Button
                                variant="outlined"
                                startIcon={<ArrowBack/>}
                                onClick={() => navigate("/cars")}
                            >
                                Back to Cars
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
            <SelectServiceDialog
                open={selectServiceDialogOpen}
                onClose={() => setSelectServiceDialogOpen(false)}
                car={car}
                addToService={handleChange}
            />
        </>
    );
};

export default CarDetails;