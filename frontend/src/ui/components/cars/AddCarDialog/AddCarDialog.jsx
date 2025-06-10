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
import DirectionsCarFilledTwoToneIcon from '@mui/icons-material/DirectionsCarFilledTwoTone';

const AddCarDialog = ({open, onClose, onAdd}) => {
    const [formData, setFormData] = useState({
        "manufacturer": "",
        "model": "",
        "year": "",
        "currentKm": "",
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        onAdd(formData);
        setFormData(formData);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <DirectionsCarFilledTwoToneIcon
                    fontSize="large"
                    color="success"
                    sx={{fontSize: 170, marginTop: 5}}
                />
            </Box>
            <DialogTitle align="center" fontSize={"xx-large"} fontWeight="bold">Add Car</DialogTitle>
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
                            size="large">Add</Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};

export default AddCarDialog;