import { Volume2, VolumeX } from "lucide-react";
import React, { useState, useEffect, useRef, useCallback } from "react";

export const VolumeControl = ({ isMuted, setIsMuted, videoRef }) => {
  const [localVolume, setLocalVolume] = useState(1);
  const [previousVolume, setPreviousVolume] = useState(1); 
  const volumeBarRef = useRef(null);

  const updateVolume = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.volume = localVolume;
    }
  }, [localVolume, videoRef]);

  const updateVolumeBar = useCallback(() => {
    if (volumeBarRef.current) {
      volumeBarRef.current.style.background = `linear-gradient(to right, #fcd535 0%, #fcd535 ${localVolume * 100}%, #fff ${localVolume * 100}%, white 100%)`;
    }
  }, [localVolume]);

  const toggleMute = () => {
    if (videoRef.current.muted) {
      restorePreviousVolume();
    } else {
      muteVolume();
    }
  };

  const restorePreviousVolume = () => {
    setLocalVolume(previousVolume);
    videoRef.current.volume = previousVolume;
    videoRef.current.muted = false;
    setIsMuted(false);
  };

  const muteVolume = () => {
    setPreviousVolume(localVolume);
    setLocalVolume(0);
    videoRef.current.volume = 0;
    videoRef.current.muted = true;
    setIsMuted(true);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setLocalVolume(newVolume);
    updateMuteStatus(newVolume);
  };

  const updateMuteStatus = (newVolume) => {
    if (newVolume === 0) {
      videoRef.current.muted = true;
      setIsMuted(true);
    } else {
      videoRef.current.muted = false;
      setIsMuted(false);
      setPreviousVolume(newVolume);
    }
  };

  const adjustVolume = useCallback((delta, event) => {
    event.preventDefault();

    const newVolume = Math.min(Math.max(localVolume + delta, 0), 1);
    setLocalVolume(newVolume);
  }, [localVolume]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        adjustVolume(0.05, event);
      } else if (event.key === "ArrowDown") {
        adjustVolume(-0.05, event);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [adjustVolume]);

  useEffect(() => {
    updateVolume();
    updateVolumeBar();
  }, [localVolume, updateVolume, updateVolumeBar]);

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
