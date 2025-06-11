import React from 'react';
import useServices from "../../../hooks/useServices.js";
import {Box, CircularProgress} from "@mui/material";
import ServiceGrid from "../../components/services/ServiceGrid/ServiceGrid.jsx";

const ServicesPage = () => {
    const {services, loading, onCancel, onStart, onComplete} = useServices();

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
                        <ServiceGrid services={services} onCancel={onCancel} onStart={onStart} onComplete={onComplete}/>
                    </>}
            </Box>
        </>
    );
};

export default ServicesPage;