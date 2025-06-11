import React, {useState} from 'react';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography} from "@mui/material";
import EditCarDialog from "../EditCarDialog/EditCarDialog.jsx";
import DeleteCarDialog from "../DeleteCarDialog/DeleteCarDialog.jsx";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import {useNavigate} from "react-router";
import InfoOutlineTwoToneIcon from '@mui/icons-material/InfoOutlineTwoTone';
import DirectionsCarFilledTwoToneIcon from '@mui/icons-material/DirectionsCarFilledTwoTone';
import useUserDetails from "../../../../hooks/useUserDetails.js";

const CarCard = ({car, onEdit, onDelete}) => {
    const {role} = useUserDetails();
    const navigate = useNavigate();
    const [editCarDialogOpen, setEditCarDialogOpen] = useState(false);
    const [deleteCarDialogOpen, setDeleteCarDialogOpen] = useState(false);

    return (
        <>
            <Paper sx={{maxWidth: 345, borderRadius: 2, marginBottom: 4}} elevation={5}>
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <DirectionsCarFilledTwoToneIcon
                        fontSize="large"
                        sx={{fontSize: 170, marginTop: 2}}
                    />
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {car.manufacturer}
                    </Typography>
                    <Typography variant="body1" sx={{color: 'text.secondary'}}>
                        {car.model}
                    </Typography>
                    <Typography variant="body1" sx={{color: 'text.secondary'}}>
                        Year: {car.year}
                    </Typography>
                </CardContent>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <CardActions>
                        {(role === "ROLE_USER" || role === "ROLE_ADMIN") && (
                            <Button size="small" variant="contained" color="warning"
                                    startIcon={<InfoOutlineTwoToneIcon/>}
                                    onClick={() => navigate(`/cars/${car.id}`)}>
                                Details
                            </Button>
                        )}
                        {(role === "ROLE_USER" || role === "ROLE_ADMIN") && (
                            <Button size="small" variant="contained" color="primary" startIcon={<EditTwoToneIcon/>}
                                    onClick={() => setEditCarDialogOpen(true)}>
                                Edit
                            </Button>
                        )}
                        {(role === "ROLE_USER" || role === "ROLE_ADMIN") && (
                            <Button size="small" variant="contained" color="error"
                                    startIcon={<DeleteOutlineTwoToneIcon/>}
                                    onClick={() => setDeleteCarDialogOpen(true)}>
                                Delete
                            </Button>
                        )}
                    </CardActions>
                </Box>
            </Paper>
            <EditCarDialog
                open={editCarDialogOpen}
                onClose={() => setEditCarDialogOpen(false)}
                car={car}
                onEdit={onEdit}
            />
            <DeleteCarDialog
                open={deleteCarDialogOpen}
                onClose={() => setDeleteCarDialogOpen(false)}
                car={car}
                onDelete={onDelete}
            />
        </>
    );
};

export default CarCard;