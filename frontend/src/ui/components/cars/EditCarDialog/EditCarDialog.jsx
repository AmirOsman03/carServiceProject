import React, {useState} from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel, MenuItem, Select,
    TextField
} from "@mui/material";
import CarRentalTwoToneIcon from '@mui/icons-material/CarRentalTwoTone';

const EditCarDialog = ({open, onClose, car, onEdit}) => {
    const [formData, setFormData] = useState({
        "manufacturer": car.manufacturer,
        "model": car.model,
        "year": car.year,
        "currentKm": car.currentKm,
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        onEdit(car.id, formData)
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <CarRentalTwoToneIcon
                    fontSize="large"
                    color="primary"
                    sx={{fontSize: 170, marginTop: 5}}
                />
            </Box>
            <DialogTitle align="center" fontSize={"xx-large"} fontWeight="bold">Edit Car</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Manufacturer"
                    name="manufacturer"
                    value={formData.manufacturer}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Year"
                    name="year"
                    type="number"
                    value={formData.year}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Current Kilometers"
                    name="currentKm"
                    type="number"
                    value={formData.currentKm}
                    onChange={handleChange}
                    fullWidth
                />
            </DialogContent>
            <Box sx={{display: "flex", justifyContent: "center", marginBottom: 2}}>
                <DialogActions>
                    <Button onClick={onClose} variant="contained" color="inherit" size="large"
                            sx={{marginInlineEnd: 2}}>Cancel</Button>
                    <Button onClick={handleSubmit} color="success" variant="contained"
                            size="large">Confirm</Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};

export default EditCarDialog;