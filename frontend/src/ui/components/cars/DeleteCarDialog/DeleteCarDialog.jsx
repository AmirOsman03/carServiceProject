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
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';

const DeleteCarDialog = ({open, onClose, car, onDelete}) => {

    const handleSubmit = () => {
        onDelete(car.id);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <DialogContent>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <HighlightOffTwoToneIcon
                                fontSize="large"
                                color="error"
                                sx={{fontSize: 170}}
                            />
                        </Box>
                        <DialogContentText align="center" sx={{paddingX: 5}} fontSize={"xx-large"}>
                            Are you sure?
                        </DialogContentText>
                        <DialogContentText align="center" sx={{padding: 5}}>
                            Are you sure you want to delete <strong>{car.manufacturer}</strong>? This action cannot be
                            undone.
                        </DialogContentText>
                        <Box sx={{display: "flex", justifyContent: "center"}}>
                            <DialogActions>
                                <Button onClick={onClose} variant="contained" color="inherit" size="large"
                                        sx={{marginInlineEnd: 2}}>Cancel</Button>
                                <Button onClick={handleSubmit} color="error" variant="contained"
                                        size="large">Delete</Button>
                            </DialogActions>
                        </Box>

                    </DialogContent>
                </Grid>
            </Grid>
            {/*<DialogTitle>Delete Product</DialogTitle>*/}
        </Dialog>
    );
};

export default DeleteCarDialog;