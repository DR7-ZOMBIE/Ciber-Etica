// src/components/VideoPlayer.jsx
import React from 'react';

const VideoPlayer = ({ videoUrl, title }) => {
  return (
    <div className="w-full aspect-video mb-4">
      <iframe 
        src={videoUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="w-full h-full rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
