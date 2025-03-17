import { Volume2, VolumeX } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

export const VolumeControl = ({ isMuted, setIsMuted, videoRef }) => {
  const [localVolume, setLocalVolume] = useState(1);
  const [previousVolume, setPreviousVolume] = useState(1); 
  const volumeBarRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = localVolume;
    }
    if (volumeBarRef.current) {
      volumeBarRef.current.style.background = `linear-gradient(to right, #fcd535 0%, #fcd535 ${localVolume * 100}%, #fff ${localVolume * 100}%, white 100%)`;
    }
  }, [localVolume, videoRef]);

  const toggleMute = () => {
    if (videoRef.current.muted) {
      setLocalVolume(previousVolume);
      videoRef.current.volume = previousVolume;
      videoRef.current.muted = false;
      setIsMuted(false);
    } else {
      setPreviousVolume(localVolume);
      setLocalVolume(0); 
      videoRef.current.volume = 0;
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setLocalVolume(newVolume);
    videoRef.current.volume = newVolume;

    if (newVolume === 0) {
      videoRef.current.muted = true;
      setIsMuted(true);
    } else {
      videoRef.current.muted = false;
      setIsMuted(false);
      setPreviousVolume(newVolume);
    }
  };

  return (
    <div className="volume-control">
      <button onClick={toggleMute}>
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
      <input
        ref={volumeBarRef}
        type="range"
        className="volume-bar"
        min="0"
        max="1"
        step="0.01"
        value={localVolume}
        onChange={handleVolumeChange}
      />
    </div>
  );
};
