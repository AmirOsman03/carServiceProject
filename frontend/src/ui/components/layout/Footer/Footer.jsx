import React from 'react';
import { Box, Typography, Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#212121",
                color: "white",
                py: 3,
                px: 2,
                textAlign: "center",
            }}
        >
            <Typography variant="body2" sx={{ mb: 1 }}>
                &copy; {new Date().getFullYear()} Car Service App — Built by Amir Osman
            </Typography>
            <Link
                href="https://github.com/AmirOsman03"
                target="_blank"
                rel="noopener"
                color="inherit"
                underline="hover"
                sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}
            >
                <GitHubIcon />
                GitHub Profile
            </Link>
        </Box>
    );
};

export default Footer;