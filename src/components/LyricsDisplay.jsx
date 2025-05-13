
import React, { useState, useEffect } from 'react';

const LyricsDisplay = ({ lyrics, currentTime }) => {
  const [currentLyric, setCurrentLyric] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const syncLyrics = () => {
      const currentLyricIndex = lyrics.findIndex((lyric) => lyric.time >= currentTime);
      if (currentLyricIndex !== currentIndex && currentLyricIndex !== -1) {
        setCurrentIndex(currentLyricIndex);
        setCurrentLyric(lyrics[currentLyricIndex].text);
      }
    };

    syncLyrics();
  }, [currentTime, lyrics, currentIndex]);

  return (
    <div className="text-center text-lg font-semibold">
      <p className="text-white">{currentLyric}</p>
    </div>
  );
};

export default LyricsDisplay;
