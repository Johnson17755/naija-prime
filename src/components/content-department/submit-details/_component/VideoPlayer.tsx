// VideoPlayer.tsx
"use client";

import { useRef, useState } from "react";

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setCurrentTime(current);
      setDuration(total);
      setProgress((current / total) * 100);
    }
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours > 0 ? `${hours}:` : ""}${
      minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className="w-full h-full"
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="absolute inset-0 flex items-center justify-center"
        onClick={togglePlay}
      >
        {!isPlaying && (
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer">
            <div className="w-0 h-0 border-l-8 border-t-4 border-b-4 border-solid border-l-black border-t-transparent border-b-transparent"></div>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-black">
        <div
          className="h-full bg-[#0283FABA]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="absolute bottom-0 right-0 m-2 text-white text-sm">
        {formatTime(currentTime)}/{formatTime(duration)}
      </div>
    </div>
  );
};

export default VideoPlayer;
