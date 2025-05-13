
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">That Kiss</h1>
      <p className="text-lg md:text-xl mb-10">
        A tribute to our love story — 13 years of laughter, growth, and forever.
      </p>
      <button
        onClick={handleEnter}
        className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition"
      >
        Enter Album
      </button>
    </div>
  );
};

export default Splash;
