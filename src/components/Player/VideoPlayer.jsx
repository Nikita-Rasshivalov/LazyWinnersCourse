import React,{ useRef, useState, useEffect } from "react";
import { VideoControl } from "./VideoControl";
import { VolumeControl } from "./VolumeControl";
import { SeekBar } from "./SeekBar";
import "./videoPlayer.css";

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isVideoValid, setIsVideoValid] = useState(true);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  useEffect(() => {
    if (!src) {
      setIsVideoValid(false);
      return;
    }
    const videoElement = videoRef.current;
    const handleError = () => setIsVideoValid(false);
    const handleLoadedData = () => {
      setIsVideoValid(true);
      setDuration(formatTime(videoElement.duration));
    };

    videoElement.addEventListener("error", handleError);
    videoElement.addEventListener("loadeddata", handleLoadedData);
    return () => {
      videoElement.removeEventListener("error", handleError);
      videoElement.removeEventListener("loadeddata", handleLoadedData);
    };
  }, [src]);

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    setProgress((video.currentTime / video.duration) * 100);
    setCurrentTime(formatTime(video.currentTime));
  };

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  if (!isVideoValid || !src) return null;

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        className="video"
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
        onLoadedMetadata={() =>
          setDuration(formatTime(videoRef.current.duration))
        }
      />
      <SeekBar
        progress={progress}
        setProgress={setProgress}
        videoRef={videoRef}
      />
      <div className="controls">
        <VideoControl
          isPlaying={isPlaying}
          togglePlay={togglePlay}
          setProgress={setProgress}
          videoRef={videoRef}
        />
        <div className="time-display">
          <span>{currentTime}</span> / <span>{duration}</span>
        </div>
        <VolumeControl
          isMuted={isMuted}
          setIsMuted={setIsMuted}
          videoRef={videoRef}
        />
      </div>
    </div>
  );
}
