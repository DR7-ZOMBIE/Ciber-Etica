// src/components/AudioPlayer.jsx
import React from 'react';
import audioFile from '../assets/audios/CiberEtica.mp3';

const AudioPlayer = () => {
  return (
    <audio controls style={{ width: '100%' }}>
      <source src={audioFile} type="audio/mp3" />
      Tu navegador no soporta el elemento de audio.
    </audio>
  );
};

export default AudioPlayer;
