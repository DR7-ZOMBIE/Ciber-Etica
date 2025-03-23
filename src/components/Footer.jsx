// src/components/Footer.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ backgroundColor: "#2E2E2E", color: "#FFFFFF", py: 2, textAlign: 'center', mt: 4 }}>
    <Typography variant="body2">
      © {new Date().getFullYear()} Ética en la IA. Todos los derechos reservados.
    </Typography>
    <Typography variant="caption">
      Desarrollado por: Dennis Patrick Juilland Prada y Santiago Alejandro Pino Giraldo
    </Typography>
  </Box>
);

export default Footer;
