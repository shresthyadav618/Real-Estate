'use client'
// import Video from 'next-video';
// import VideoSource from "../videos/frontVideo.mp4";
const VideoComponent = ({ videoSrc }) => {
    return (
      <div className="video__container">
        <iframe
      scrolling="no"
      src={videoSrc}
      frameborder="0"
      allowfullscreen
      loading="lazy"
    />
      </div>
    // <div className="video__container">
      
    //   <Video src={VideoSource} 
    //   autoPlay
    //   loop
    //   // playsInline

    //   // controls={false}
    //   />
    // </div>

    );
  };
  
  export default VideoComponent;
  