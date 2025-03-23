// src/pages/Tema1.jsx
import React from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Link as MuiLink,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VideoPlayer from '../components/VideoPlayer';
import canvasImage from '../assets/images/circular.png';

const Tema1 = () => {
  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        mt: { xs: 4, md: 10 }, 
        mb: { xs: 4, md: 10 }, 
        py: 4, 
        px: { xs: 2, md: 0 } 
      }}
    >
      {/* Hero Section */}
      <Paper 
        elevation={4} 
        sx={{ 
          position: 'relative', 
          height: { xs: 200, md: 300 },
          backgroundImage: 'url(https://source.unsplash.com/random?technology,abstract)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 2,
          mb: 6 
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: 2,
          }}
        />
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            px: 2,
          }}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ fontWeight: 'bold', textAlign: 'center' }}
          >
            Ética en la IA
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ mt: 2, textAlign: 'center' }}
          >
            Integrando humanidades y tecnología para un futuro justo.
          </Typography>
        </Box>
      </Paper>

      {/* Sección 1: Perfiles de Humanidades */}
      <Paper elevation={2} sx={{ mb: 6, p: { xs: 2, md: 4 }, borderRadius: 2 }}>
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom 
          sx={{ textAlign: 'center', fontWeight: 'bold' }}
        >
          La inteligencia artificial necesita perfiles de humanidades
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          sx={{ textAlign: 'center', mb: 4 }}
        >
          El desarrollo del procesamiento natural del lenguaje y la IA requiere la influencia de las humanidades para detectar sesgos, mejorar la comprensión del lenguaje, evaluar el impacto social y facilitar la comunicación entre humanos y máquinas.
        </Typography>

        {/* Lista con explicaciones */}
        <Box sx={{ maxWidth: 600, mx: 'auto', textAlign: 'left', mb: 4 }}>
          <List>
            <ListItem alignItems="flex-start" sx={{ mb: 2 }}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" sx={{ fontSize: { xs: 24, md: 32 } }} />
              </ListItemIcon>
              <ListItemText 
                primary="Corrección de sesgos"
                secondary="La IA aprende a partir de datos, pero estos pueden contener desigualdades y prejuicios. Las humanidades ayudan a detectarlos y corregirlos."
              />
            </ListItem>
            <ListItem alignItems="flex-start" sx={{ mb: 2 }}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" sx={{ fontSize: { xs: 24, md: 32 } }} />
              </ListItemIcon>
              <ListItemText 
                primary="Mejorar la interpretación del lenguaje humano"
                secondary="Disciplinas como la filología y la lingüística son fundamentales para mejorar la comprensión y generación de lenguaje por parte de las máquinas."
              />
            </ListItem>
            <ListItem alignItems="flex-start" sx={{ mb: 2 }}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" sx={{ fontSize: { xs: 24, md: 32 } }} />
              </ListItemIcon>
              <ListItemText 
                primary="Impacto social y cultural"
                secondary="La IA no es neutral; la filosofía y la sociología permiten evaluar y crear modelos más equitativos."
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <CheckCircleIcon color="primary" sx={{ fontSize: { xs: 24, md: 32 } }} />
              </ListItemIcon>
              <ListItemText 
                primary="Comunicación entre humanos y máquinas"
                secondary="La psicología cognitiva aporta conocimientos sobre cómo interactuamos con la IA, mejorando la experiencia del usuario."
              />
            </ListItem>
          </List>
        </Box>

        {/* Imagen ilustrativa */}
        <Box sx={{ textAlign: 'center' }}>
          <img
            src={canvasImage}
            alt="Ilustración de Ética en la IA"
            style={{
              maxWidth: '100%',
              borderRadius: 8,
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          />
        </Box>
      </Paper>

      {/* Sección 2: IA como Herramienta Complementaria */}
      <Paper elevation={2} sx={{ mb: 6, p: { xs: 2, md: 4 }, borderRadius: 2 }}>
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom 
          sx={{ textAlign: 'center', fontWeight: 'bold' }}
        >
          La IA como herramienta complementaria
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          sx={{ textAlign: 'center', mb: 4 }}
        >
          La IA potencia las capacidades humanas pero requiere supervisión experta para evitar implicaciones sociales negativas.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <VideoPlayer
            videoUrl="https://www.youtube.com/embed/gYGi9iDbHtM"
            title="La IA como herramienta complementaria"
          />
        </Box>
      </Paper>

      {/* Sección 3: Moral Machine y Ética de la IA */}
      <Paper elevation={2} sx={{ mb: 6, p: { xs: 2, md: 4 }, borderRadius: 2 }}>
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom 
          sx={{ textAlign: 'center', fontWeight: 'bold' }}
        >
          Moral Machine y la ética de la IA: ¿Cómo programar decisiones justas?
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          sx={{ textAlign: 'center' }}
        >
          La IA no es neutral. A través de experimentos como el de{' '}
          <MuiLink
            href="https://www.moralmachine.net/hl/es"
            target="_blank"
            rel="noreferrer"
            underline="hover"
          >
            Moral Machine
          </MuiLink>{' '}
          se exploran dilemas éticos en situaciones límite. Los criterios morales varían entre culturas y personas, evidenciando que la toma de decisiones en vehículos autónomos es un reto filosófico, social y legal.
        </Typography>
      </Paper>

      {/* Sección 4: Conclusiones y Reflexión */}
      <Paper elevation={2} sx={{ mb: 6, p: { xs: 2, md: 4 }, borderRadius: 2 }}>
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom 
          sx={{ textAlign: 'center', fontWeight: 'bold' }}
        >
          Conclusiones y Reflexión
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          sx={{ textAlign: 'center' }}
        >
          La integración de las humanidades en el desarrollo de la inteligencia artificial es esencial para corregir sesgos, comprender mejor el lenguaje y garantizar un impacto social positivo. Fomentar un diálogo interdisciplinario entre expertos en tecnología, filosofía y ciencias sociales es clave para construir un futuro digital ético y justo.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Tema1;
