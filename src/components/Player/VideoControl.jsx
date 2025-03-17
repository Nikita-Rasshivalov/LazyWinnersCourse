import React from "react";
import { Play, Pause, Rewind, FastForward } from "lucide-react";

export const VideoControl = ({ isPlaying, togglePlay, videoRef, setProgress }) => {
  const seek = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
      const newProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(newProgress);
    }
  };

  return (
    <div className="move-controls">
      <button onClick={() => seek(-10)}>
        <Rewind size={24} />
      </button>
      <button onClick={togglePlay}>
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <button onClick={() => seek(10)}>
        <FastForward size={24} />
      </button>
    </div>
  );
};
