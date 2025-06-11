import React, {useState} from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Paper, Typography} from "@mui/material";
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import CancelServiceDialog from "../CancelServiceDialog/CancelServiceDialog.jsx";
import StartServiceDialog from "../StartServiceDialog/StartServiceDialog.jsx";
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import PlayCircleOutlineTwoToneIcon from '@mui/icons-material/PlayCircleOutlineTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import CompleteServiceDialog from "../CompleteServiceDialog/CompleteServiceDialog.jsx";
import useUserDetails from "../../../../hooks/useUserDetails.js";

const ServiceCard = ({service, onCancel, onStart, onComplete}) => {
    const {role} = useUserDetails();
    const [cancelServiceDialogOpen, setCancelServiceDialogOpen] = useState(false);
    const [startServiceDialogOpen, setStartServiceDialogOpen] = useState(false);
    const [completeServiceDialogOpen, setCompleteServiceDialogOpen] = useState(false);

    return (
        <>
            <Paper sx={{maxWidth: 345, borderRadius: 2, marginBottom: 4}} elevation={5}>
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <PersonOutlineTwoToneIcon
                        fontSize="large"
                        sx={{fontSize: 170, marginTop: 2}}
                    />
                </Box>
                <CardContent>
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
                        sx={{display: "flex", justifyContent: "center", mt: 2}}
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
                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <CardActions>
                        {(service.status === "CANCELED" && (role === "ROLE_USER" || role === "ROLE_ADMIN")) && (
                            <Button
                                size="small"
                                variant="contained"
                                color="error"
                                startIcon={<CloseTwoToneIcon/>}
                                onClick={() => setCancelServiceDialogOpen(true)}
                            >
                                Cancel
                            </Button>
                        )}
                        {(service.status === "SCHEDULED" && (role === "ROLE_MECHANIC" || role === "ROLE_ADMIN")) && (
                            <Button
                                size="small"
                                variant="contained"
                                color="success"
                                startIcon={<PlayCircleOutlineTwoToneIcon/>}
                                onClick={() => setStartServiceDialogOpen(true)}
                            >
                                Start
                            </Button>
                        )}
                        {((service.status === "SCHEDULED" || service.status === "IN_PROGRESS") && (role === "ROLE_MECHANIC" || role === "ROLE_ADMIN")) && (
                            <Button
                                size="small"
                                variant="contained"
                                color="primary"
                                startIcon={<CheckTwoToneIcon/>}
                                onClick={() => setCompleteServiceDialogOpen(true)}
                            >
                                Complete
                            </Button>
                        )}
                    </CardActions>
                </Box>
            </Paper>
            <CancelServiceDialog
                open={cancelServiceDialogOpen}
                onClose={() => setCancelServiceDialogOpen(false)}
                service={service}
                onCancel={onCancel}
            />
            <StartServiceDialog
                open={startServiceDialogOpen}
                onClose={() => setStartServiceDialogOpen(false)}
                service={service}
                onStart={onStart}
            />
            <CompleteServiceDialog
                open={completeServiceDialogOpen}
                onClose={() => setCompleteServiceDialogOpen(false)}
                service={service}
                onComplete={onComplete}
            />
        </>
    );
};

export default ServiceCard;