
import React from 'react';

const Home = () => {
  return (
    <div className="bg-black text-white h-full p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Tribute Album</h1>
        <p className="text-lg mb-6">
          This album is a collection of memories, emotions, and stories that have shaped who we are today. 
          A journey of love, laughter, and growth. We are so happy to share this with you.
        </p>

        <p className="text-lg italic text-gray-300">
          "Love isn't just a feeling, it's an experience — and this is ours."
        </p>

        <button className="mt-8 bg-sage-600 text-white px-6 py-2 rounded-xl hover:bg-sage-700 transition">
          Start Listening
        </button>
      </div>
    </div>
  );
};

export default Home;
