import React from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid, Icon,
    Typography
} from "@mui/material";
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';


const CompleteServiceDialog = ({open, onClose, service, onComplete}) => {

    const handleSubmit = () => {
        onComplete(service.id)
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <DialogContent>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <CheckTwoToneIcon
                                fontSize="large"
                                color="success"
                                sx={{fontSize: 170}}
                            />
                        </Box>
                        <DialogContentText align="center" sx={{paddingX: 5}} fontSize={"xx-large"}>
                            Are you sure?
                        </DialogContentText>
                        <DialogContentText align="center" sx={{padding: 5}}>
                            Are you sure you want to complete <strong>{service.manufacturer}</strong>?
                        </DialogContentText>
                        <Box sx={{display: "flex", justifyContent: "center"}}>
                            <DialogActions>
                                <Button onClick={onClose} variant="contained" color="inherit" size="large"
                                        sx={{marginInlineEnd: 2}}>Cancel</Button>
                                <Button onClick={handleSubmit} color="success" variant="contained"
                                        size="large">Confirm</Button>
                            </DialogActions>
                        </Box>
                    </DialogContent>
                </Grid>
            </Grid>
            {/*<DialogTitle>Delete Product</DialogTitle>*/}
        </Dialog>
    );
};

export default CompleteServiceDialog;