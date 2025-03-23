// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Typography, Button } from '@mui/material';
import mapa from '../assets/images/mapa.png'; // Importa la imagen

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', py: 8 }}>
      {/* Título y descripción */}
      <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 4 }}>
        Bienvenidos a Ética en la IA
      </Typography>
      <Typography variant="h6" component="p" sx={{ mb: 6 }}>
        Explora la influencia de las humanidades en la inteligencia artificial y aprende sobre ciberética de forma interactiva.
      </Typography>
      
      {/* Mapa Conceptual */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
        <img 
          src={mapa} 
          alt="Mapa Conceptual de Ética" 
          style={{
            maxWidth: '100%',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }} 
        />
      </Box>
      
      {/* Botones de navegación */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
        <Button component={Link} to="/tema1" variant="contained" sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
          Tema 1
        </Button>
        <Button component={Link} to="/tema2" variant="contained" sx={{ backgroundColor: '#388e3c', color: '#fff' }}>
          Tema 2
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
