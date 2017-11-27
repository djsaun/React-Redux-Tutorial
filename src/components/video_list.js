import React from 'react';
import VideoListItem from './video_list_item';

// No need for state - doesn't record user interaction or rerender itself, so it can be a plain, functional component
// Include 'props' in function creation to pull in props passed to component within the main App
// In a class-based component, props are available anywhere, in any defined method, as this.props. Props are available as just "props" in a function-based component
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    // Keys allow React to know which element to rerender on change -- a key is a consistent and unique piece of information for each record
    return <VideoListItem key={video.etag} video={video} />
  });

  return (
    <ul className="col-md-4 list-group"> 
      {videoItems}
    </ul>
  );
};

export default VideoList;


