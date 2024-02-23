'use client'
// VideoComponent.js

const VideoComponent = ({ videoSrc }) => {
    return (
      <div className="video__container">
        <iframe
      scrolling="no"
      src={videoSrc}
      frameborder="0"
      allowfullscreen
    />
      </div>
    );
  };
  
  export default VideoComponent;
  