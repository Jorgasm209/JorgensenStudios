
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();

  const enterSite = () => {
    navigate('/home');
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center flex-col text-white"
      style={{
        backgroundImage: `url('/img/briannancy-75.jpg')`,
        backdropFilter: 'blur(8px)',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.6)',
      }}
    >
      <div className="bg-black/70 p-8 rounded-xl text-center shadow-lg max-w-xl">
        <h1 className="text-4xl font-bold tracking-wide">That Kiss</h1>
        <p className="mt-4 text-lg italic text-sage-200">
          A tribute in lyrics and love
        </p>

        <hr className="my-4 border-sage-500 w-1/2 mx-auto" />

        <p className="text-sm text-gray-300">
          Nancy...  
          You were never just the girl who walked in that day...  
          You were the moment my life began to make sense.
        </p>

        <button
          onClick={enterSite}
          className="mt-6 px-6 py-2 bg-sage-600 hover:bg-sage-700 text-white font-semibold rounded transition"
        >
          Enter the Album
        </button>
      </div>
    </div>
  );
};

export default Splash;
