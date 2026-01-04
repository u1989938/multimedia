import React from 'react';

const AudioSection = () => {
  return (
    <div className="audio-section">
      <h2>Menorca's Sounds</h2>
      <audio controls>
        <source src="assets/menorca_audio.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioSection;
