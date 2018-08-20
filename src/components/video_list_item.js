import React from "react";

const VideoListItem = (props) => {
    console.log(props);
  return <li>
      <div>{props.video.snippet.title}</div>
      <div>
        <img src={props.video.snippet.thumbnails.high.url} />
      </div>
      <div>{props.video.snippet.description}</div>
    </li>;
};

export default VideoListItem;