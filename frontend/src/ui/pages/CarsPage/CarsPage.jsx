import React, {useState} from 'react';
import {Box, Button, CircularProgress} from "@mui/material";
import useCars from "../../../hooks/useCars.js";
import CarsGrid from "../../components/cars/CarsGrid/CarsGrid.jsx";
import AddCarDialog from "../../components/cars/AddCarDialog/AddCarDialog.jsx";
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import useUserDetails from "../../../hooks/useUserDetails.js";

const CarsPage = () => {
    const {role} = useUserDetails();
    const {cars, loading, onAdd, onEdit, onDelete} = useCars();
    const [AddCarDialogOpen, setAddCarDialogOpen] = useState(false);

    return (
        <>
            <Box className="products-box">
                {loading && (
                    <Box className="progress-box">
                        <CircularProgress/>
                    </Box>
                )}
                {!loading &&
                    <>
                        <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                            {(role === "ROLE_USER" || role === "ROLE_ADMIN") && (
                                <Button startIcon={<AddCircleOutlineTwoToneIcon/>} variant="contained" color="success"
                                        onClick={() => setAddCarDialogOpen(true)}>
                                    Add Car
                                </Button>
                            )}
                        </Box>
                        <CarsGrid cars={cars} onEdit={onEdit} onDelete={onDelete}/>
                    </>}
            </Box>
            <AddCarDialog
                open={AddCarDialogOpen}
                onClose={() => setAddCarDialogOpen(false)}
                onAdd={onAdd}
            />
        </>
    );
};

export default CarsPage;