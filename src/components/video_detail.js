import React from 'react';

// Use functional component since video detail won't have changes to state

const VideoDetail = ({video}) => {
  // Add check inside component to make sure video has been provided in the props before component renders
  if (!video) {
    return <div>Loading... </div>
  }
  
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} className="embed-responsive-item"></iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div> 
  );
};

export default VideoDetail;