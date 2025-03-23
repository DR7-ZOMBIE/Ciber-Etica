// src/components/VideoSlider.jsx
import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const VideoSlider = () => {
  const slides = [
    { url: "https://www.youtube.com/embed/COOlXhYwfM8" },
    { url: "https://www.youtube.com/embed/HOY0CSVAA4w?start=42" },
    // Convertir el watch URL a formato embed:
    { url: "https://www.youtube.com/embed/1p6aGArHesI?start=1096" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
      }, 5000); // Cambia cada 5 segundos
      return () => clearInterval(interval);
    }
  }, [slides.length, isPaused]);

  const handlePlayClick = () => {
    setIsPaused(true);
  };

  const handlePrev = () => {
    setIsPaused(true);
    setCurrentIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setIsPaused(true);
    setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
  };

  // Agrega el parámetro autoplay según corresponda
  const getVideoSrc = (url, autoplay) => {
    if (autoplay) {
      return url.includes('?') ? `${url}&autoplay=1` : `${url}?autoplay=1`;
    }
    return url;
  };

  return (
    <Box 
      sx={{ 
        height: 300, 
        width: '100%', 
        position: 'relative', 
        overflow: 'hidden', 
        borderRadius: 2, 
        boxShadow: 3, 
        mb: 4 
      }}
    >
      <iframe 
        width="100%" 
        height="100%" 
        src={getVideoSrc(slides[currentIndex].url, isPaused)}
        title="Video Slide" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        style={{ transition: 'opacity 1s ease-in-out' }}
      ></iframe>

      {/* Overlay Play Button */}
      {!isPaused && (
        <Box 
          onClick={handlePlayClick}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <IconButton sx={{ color: 'white', fontSize: 80 }}>
            <PlayCircleOutlineIcon fontSize="inherit" />
          </IconButton>
        </Box>
      )}

      {/* Flecha Izquierda */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 16,
          transform: 'translateY(-50%)',
          color: 'white',
          bgcolor: 'rgba(0,0,0,0.5)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      {/* Flecha Derecha */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 16,
          transform: 'translateY(-50%)',
          color: 'white',
          bgcolor: 'rgba(0,0,0,0.5)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default VideoSlider;
