import React,{ useEffect, useRef } from "react";


export function SeekBar({ progress, setProgress, videoRef }) {
  const seekBarRef = useRef(null);

  useEffect(() => {
    if (seekBarRef.current) {
      seekBarRef.current.style.background = `linear-gradient(to right, #fcd535 0%, #fcd535 ${progress}%, #fff ${progress}%, white 100%)`;
    }
  }, [progress]);

  const handleSeekChange = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
    const newTime = (newProgress / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
  };

  return (
    <input
      ref={seekBarRef}
      type="range"
      className="seek-bar"
      min="0"
      max="100"
      value={progress}
      onChange={handleSeekChange}
    />
  );
}
