"use client";
import React, { Suspense, useRef } from "react";
import VideoPlayButton from "../../VideoPlayButton";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  return (
    <div className="relative">
      <Suspense fallback={<p>Loading video...</p>}>
        <video
          ref={videoRef}
          width="100%"
          height="240"
          className="h-full sm:h-[38rem] border rounded-md shadow-medium"
          controls
        >
          <source src={"/videos/trip-law.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <span className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
          <VideoPlayButton videoRef={videoRef} />
        </span>
      </Suspense>
    </div>
  );
};

export default VideoPlayer;
