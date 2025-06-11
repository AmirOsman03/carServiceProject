import React from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Paper, Typography} from "@mui/material";
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';

const ServiceCard = ({service}) => {
    return (
        <>
            <Paper sx={{maxWidth: 345, borderRadius: 2, marginBottom: 4}} elevation={5}>
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <PersonOutlineTwoToneIcon
                        fontSize="large"
                        sx={{fontSize: 170, marginTop: 2}}
                    />
                </Box>
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div" align="center">
                        {service.name}
                    </Typography>
                    <Typography variant="body1" sx={{color: 'text.secondary'}} align="center">
                        {service.manufacturer}
                    </Typography>
                    <Typography variant="body1" sx={{color: 'text.secondary'}} align="center">
                        <b>Location:</b> {service.location}
                    </Typography>
                    <Typography variant="body1" sx={{color: 'text.secondary'}} align="center">
                        <b>Price:</b> {service.price} den
                    </Typography>
                    <Typography variant="body1" sx={{color: 'text.secondary'}} align="center">
                        <b>Next service:</b> {service.nextServiceKm} km
                    </Typography>
                    <Typography variant="body1" sx={{color: 'text.secondary'}} align="center">
                        <b>Type service:</b> {service.type}
                    </Typography>
                    <Chip
                        label={service.status}
                        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                        color={
                            service.status === "SCHEDULED"
                                ? "primary"
                                : service.status === "IN_PROGRESS"
                                    ? "warning"
                                    : service.status === "COMPLETED"
                                        ? "success"
                                        : "default"
                        }
                    />
                </CardContent>
                {/*<Box sx={{display: "flex", justifyContent: "center"}}>*/}
                {/*    <CardActions>*/}
                {/*        <Button size="small" variant="contained" color="warning" startIcon={<InfoOutlineTwoToneIcon/>}*/}
                {/*                onClick={() => navigate(`/cars/${car.id}`)}>Details</Button>*/}
                {/*        <Button size="small" variant="contained" color="primary" startIcon={<EditTwoToneIcon/>}*/}
                {/*                onClick={() => setEditCarDialogOpen(true)}>Edit</Button>*/}
                {/*        <Button size="small" variant="contained" color="error" startIcon={<DeleteOutlineTwoToneIcon/>}*/}
                {/*                onClick={() => setDeleteCarDialogOpen(true)}>Delete</Button>*/}
                {/*    </CardActions>*/}
                {/*</Box>*/}
            </Paper>
            {/*<EditCarDialog*/}
            {/*    open={editCarDialogOpen}*/}
            {/*    onClose={() => setEditCarDialogOpen(false)}*/}
            {/*    car={car}*/}
            {/*    onEdit={onEdit}*/}
            {/*/>*/}
            {/*<DeleteCarDialog*/}
            {/*    open={deleteCarDialogOpen}*/}
            {/*    onClose={() => setDeleteCarDialogOpen(false)}*/}
            {/*    car={car}*/}
            {/*    onDelete={onDelete}*/}
            {/*/>*/}
        </>
    );
};

export default ServiceCard;