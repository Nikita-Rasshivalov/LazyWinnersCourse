import React, { useRef, useState, useEffect, useCallback } from "react";
import { VideoControl } from "./Controls/VideoControl";
import { VolumeControl } from "./Controls/VolumeControl";
import { SeekBar } from "./Controls/SeekBar";
import { FullScreenButton } from "./Controls/FullScreenButton";
import { formatTime } from "../../utils/formatTime";
import "./videoPlayer.css";

export default function VideoPlayer({ src }) {
  let clickTimeout = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [localVolume, setLocalVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isVideoValid, setIsVideoValid] = useState(true);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  }, [isPlaying]);

  const toggleFullScreen = useCallback((event) => {
    event.preventDefault();
    const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement;

    if (!isFullscreen) {
      document.documentElement.dataset.scrollY = window.scrollY; // Save scroll position

      if (videoRef.current) {
        enterFullScreen(videoRef.current);
      }
    } else {
      exitFullScreen();
    }
  }, []);

  const enterFullScreen = (element) => {
    if (element.webkitEnterFullscreen) {
      element.webkitEnterFullscreen();
      return;
    }

    if (element.requestFullscreen) {
      element.requestFullscreen();
      return;
    }

    if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
      return;
    }
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      return;
    }

    if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
      return;
    }
  };

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
    const handlePlay = () => {
      setIsPlaying(true);
    };
    const handlePause = () => {
      setIsPlaying(false);
    };
    const handleEnded = () => {
      setIsPlaying(false);
    };
    const handleVolumeChange = () => {
      setIsMuted(videoElement.muted);
      setLocalVolume(videoElement.volume);
    };
    const handleFullScreenChange = () => {
      const isFullscreen = !!document.fullscreenElement;
      if (!isFullscreen) {
        const savedScrollY = document.documentElement.dataset.scrollY || "0";
        window.scrollTo(0, parseInt(savedScrollY, 10));
      }
    };

    const handleDoubleClick = (e) => {
      e.preventDefault();
      if (clickTimeout.current) {
        clearTimeout(clickTimeout.current);
        clickTimeout.current = null;
      }
      toggleFullScreen(e);
    };

    const handleOneClick = (e) => {
      e.preventDefault();
      if (clickTimeout.current) {
        clearTimeout(clickTimeout.current);
      }

      clickTimeout.current = setTimeout(() => {
        togglePlay();
        clickTimeout.current = null;
      }, 200);
    };

    videoElement.addEventListener("error", handleError);
    videoElement.addEventListener("loadeddata", handleLoadedData);
    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("pause", handlePause);
    videoElement.addEventListener("ended", handleEnded);
    videoElement.addEventListener("volumechange", handleVolumeChange);
    videoElement.addEventListener("click", handleOneClick);
    videoElement.addEventListener("dblclick", handleDoubleClick);
    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      videoElement.removeEventListener("error", handleError);
      videoElement.removeEventListener("loadeddata", handleLoadedData);
      videoElement.removeEventListener("play", handlePlay);
      videoElement.removeEventListener("pause", handlePause);
      videoElement.removeEventListener("ended", handleEnded);
      videoElement.removeEventListener("volumechange", handleVolumeChange);
      videoElement.removeEventListener("click", handleOneClick);
      videoElement.removeEventListener("dblclick", handleDoubleClick);
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, [src, togglePlay, toggleFullScreen]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    setProgress((video.currentTime / video.duration) * 100);
    setCurrentTime(formatTime(video.currentTime));
  };

  if (!isVideoValid || !src) return null;

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        className="video"
        src={src}
        playsInline
        controlsList="noremoteplayback nofullscreen nodownload"
        onTimeUpdate={handleTimeUpdate}
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
          localVolume={localVolume}
          setLocalVolume={setLocalVolume}
        />
        <FullScreenButton toggleFullScreen={toggleFullScreen} />
      </div>
    </div>
  );
}
