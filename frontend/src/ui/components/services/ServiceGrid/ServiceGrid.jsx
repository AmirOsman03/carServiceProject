import React from 'react';
import {Grid} from "@mui/material";
import ServiceCard from "../ServiceCard/ServiceCard.jsx";

const ServiceGrid = ({services}) => {
    return (
        <Grid container spacing={{xs: 2, md: 3}}>
            {services.map((service) => (
                <Grid key={service.id} size={{xs: 12, sm: 6, md: 5, lg: 3 }}>
                    <ServiceCard service={service}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default ServiceGrid;