// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Typography, Button } from '@mui/material';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import mapa from '../assets/images/mapa.png'; // Importa la imagen

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', py: 8 }}>
      {/* Título y descripción */}
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 'bold',
          mb: { xs: 2, sm: 4 },
          fontSize: { xs: '2rem', sm: '3rem' }
        }}
      >
        Bienvenidos a ética en la IA & Ciberseguridad
      </Typography>

      <Typography variant="h6" component="p" sx={{ mb: 6 }}>
        Explora la influencia de las humanidades en la inteligencia artificial y aprende sobre ciberética de forma interactiva.
      </Typography>

      {/* Mapa Conceptual Interactivo */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
        <Zoom>
          <img
            src={mapa}
            alt="Mapa Conceptual de Ética"
            style={{
              maxWidth: '100%',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          />
        </Zoom>
      </Box>

      {/* Botones de navegación */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          gap: 2,
          alignItems: 'center',
        }}
      >
        <Button
          component={Link}
          to="/tema1"
          variant="contained"
          sx={{
            backgroundColor: '#1976d2',
            color: '#fff',
            fontSize: { xs: '0.9rem', sm: '1rem' },
            padding: { xs: '8px 16px', sm: '10px 20px' }
          }}
        >
          Ética en la IA
        </Button>
        <Button
          component={Link}
          to="/tema2"
          variant="contained"
          sx={{
            backgroundColor: '#388e3c',
            color: '#fff',
            fontSize: { xs: '0.9rem', sm: '1rem' },
            padding: { xs: '8px 16px', sm: '10px 20px' }
          }}
        >
          Ética en la Ciberseguridad
        </Button>
        <Button
          component={Link}
          to="/ciberetica"
          variant="contained"
          sx={{
            backgroundColor: '#d32f2f',
            color: '#fff',
            fontSize: { xs: '0.9rem', sm: '1rem' },
            padding: { xs: '8px 16px', sm: '10px 20px' }
          }}
        >
          Ciberética
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
