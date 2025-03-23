// src/pages/Tema2.jsx
import React from 'react';
import { Container, Box, Typography, Card, CardContent } from '@mui/material';
import AudioPlayer from '../components/AudioPlayer';
import VideoSlider from '../components/VideoSlider';
import ResourceCards from '../components/ResourceCards';

const Tema2 = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 10, // margen superior para separar del navbar
        py: 8,
        background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      {/* Sección: Ciber Ética aplicada */}
      <Box
        sx={{
          mb: 8,
          p: 4,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ textAlign: 'center', fontWeight: 'bold' }}
        >
          Ciber ética aplicada
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ textAlign: 'center', mb: 4 }}
        >
          Explora cómo proteger tu privacidad y seguridad en el mundo digital. Escucha el audio explicativo a continuación:
        </Typography>

        {/* Carrusel de Videos */}
        <Box sx={{ mb: 4 }}>
          <VideoSlider />
        </Box>

        {/* Reproductor de Audio */}
        <Card sx={{ boxShadow: 3, borderRadius: 2, mt: 2 }}>
          <CardContent>
            <AudioPlayer />
          </CardContent>
        </Card>
      </Box>

      {/* Sección: Recursos - Space Shelter y Phishing Quiz */}
      <Box
        sx={{
          p: 4,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <ResourceCards />
      </Box>
    </Container>
  );
};

export default Tema2;
