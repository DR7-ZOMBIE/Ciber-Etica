// src/components/ResourceCards.jsx
import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import spaceImage from '../assets/images/space.png';
import phishingImage from '../assets/images/phishing.png';

const ResourceCards = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {/* Card Space Shelter */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, textAlign: 'center' }}>
            <CardMedia
              component="img"
              height="200"
              image={spaceImage}
              alt="Space Shelter"
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography gutterBottom variant="h5" component="div">
                Space Shelter
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Descubre Space Shelter, un juego interactivo de Google que enseña buenas prácticas de seguridad en línea a través de dinámicas y retos.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button 
                size="small" 
                variant="contained" 
                color="success" 
                href="https://spaceshelter.withgoogle.com/intl/es_es/" 
                target="_blank"
                rel="noreferrer"
              >
                Jugar Space Shelter
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Card Phishing Quiz */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, textAlign: 'center' }}>
            <CardMedia
              component="img"
              height="200"
              image={phishingImage}
              alt="Phishing Quiz"
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography gutterBottom variant="h5" component="div">
                Phishing Quiz
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pon a prueba tus conocimientos en seguridad digital y aprende a identificar ataques de phishing con este quiz interactivo de Google.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button 
                size="small" 
                variant="contained" 
                color="primary" 
                href="https://phishingquiz.withgoogle.com/" 
                target="_blank"
                rel="noreferrer"
              >
                Realizar el Quiz
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResourceCards;
