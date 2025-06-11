import React from 'react';
import useServices from "../../../hooks/useServices.js";
import {Box, Button, CircularProgress} from "@mui/material";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import CarsGrid from "../../components/cars/CarsGrid/CarsGrid.jsx";
import AddCarDialog from "../../components/cars/AddCarDialog/AddCarDialog.jsx";
import ServiceGrid from "../../components/services/ServiceGrid/ServiceGrid.jsx";

const ServicesPage = () => {
    const {services, loading} = useServices();

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
                        {/*<Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>*/}
                        {/*    <Button startIcon={<AddCircleOutlineTwoToneIcon/>} variant="contained" color="success" onClick={() => setAddCarDialogOpen(true)}>*/}
                        {/*        Add Car*/}
                        {/*    </Button>*/}
                        {/*</Box>*/}
                        <ServiceGrid services={services}/>
                    </>}
            </Box>
        </>
    );
};

export default ServicesPage;