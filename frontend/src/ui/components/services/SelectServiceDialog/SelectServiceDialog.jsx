import {useState} from "react";
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField} from "@mui/material";
import ManageAccountsTwoToneIcon from "@mui/icons-material/ManageAccountsTwoTone";

const SelectServiceDialog = ({open, onClose, car, addToService}) => {
    const serviceTypes = ["OIL_CHANGE", "TIRE_CHANGE", "BRAKE_SERVICE", "GENERAL_CHECKUP"];
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        type: "",
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        addToService(car.id, formData);
        setFormData(formData);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <ManageAccountsTwoToneIcon
                    fontSize="large"
                    color="warning"
                    sx={{fontSize: 170, marginTop: 5}}
                />
            </Box>
            <DialogTitle align="center" fontSize={"xx-large"} fontWeight="bold">Select service</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Enter your location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    select
                    margin="dense"
                    label="Type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    fullWidth
                >
                    {serviceTypes.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
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
    )
        ;
};

export default SelectServiceDialog;