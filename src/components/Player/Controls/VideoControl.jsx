import React, { useEffect, useCallback } from "react";
import { Play, Pause, Rewind, FastForward } from "lucide-react";

export const VideoControl = ({
  isPlaying,
  togglePlay,
  videoRef,
  setProgress,
}) => {
  const seek = useCallback(
    (seconds) => {
      if (videoRef.current) {
        videoRef.current.currentTime += seconds;
        const newProgress =
          (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(newProgress);
      }
    },
    [videoRef, setProgress]
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          seek(-10);
          break;
        case "ArrowRight":
          seek(10);
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [seek, togglePlay]);

  return (
    <div className="move-controls">
      <button onClick={() => seek(-10)} className="control-button">
        <Rewind size={24} />
      </button>
      <button onClick={togglePlay} className="control-button">
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <button onClick={() => seek(10)} className="control-button">
        <FastForward size={24} />
      </button>
    </div>
  );
};
