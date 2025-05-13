
import React, { useRef, useState, useEffect } from 'react';

const Player = ({ track }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const setTotalTime = () => setDuration(audio.duration || 0);

    if (audio) {
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', setTotalTime);
    }

    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', setTotalTime);
      }
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const onSliderChange = (e) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = e.target.value;
      setCurrentTime(e.target.value);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-black/80 text-white p-4 rounded-xl shadow-lg backdrop-blur">
      <h2 className="text-xl font-bold mb-2">{track.title}</h2>
      <audio ref={audioRef} src={track.audio} preload="metadata" />

      <div className="flex items-center space-x-4">
        <button
          onClick={togglePlay}
          className="bg-sage-600 hover:bg-sage-700 text-white font-bold px-4 py-2 rounded transition"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        <div className="flex-grow">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={onSliderChange}
            className="w-full"
          />
        </div>

        <span className="text-sm w-16 text-right">{formatTime(currentTime)}</span>
      </div>
    </div>
  );
};

export default Player;
