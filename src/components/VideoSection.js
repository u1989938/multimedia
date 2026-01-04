import React from 'react';

const VideoSection = () => {
  return (
    <div className="video-section">
      <hr></hr>
      <video width="100%" height="auto" controls>
        <source src="/assets/menorca_video.mp4" type="video/mp4" id="video" />
        Your browser does not support the video tag.
      </video>
    </div>
  );

  
};

export default VideoSection;
