"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({
  url,
  playing,
  muted,
  onDuration,
  onProgress,
  videoRef,
}) => (
  <div className='relative h-0 pb-[56.25%]'>
    <ReactPlayer
      url={url}
      ref={videoRef}
      playing={playing}
      muted={muted}
      onDuration={onDuration}
      onProgress={onProgress}
      width='100%'
      height='100%'
      className='absolute top-0 left-0'
    />
  </div>
);

export default VideoPlayer;
