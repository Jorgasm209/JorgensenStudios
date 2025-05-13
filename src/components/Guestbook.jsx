
import React, { useState } from 'react';

const Guestbook = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="bg-black text-white p-8">
      <h2 className="text-2xl font-bold mb-4">Guestbook</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          className="w-full p-4 bg-gray-800 text-white rounded-xl"
          rows="4"
          placeholder="Leave a message for Brian & Nancy..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          type="submit"
          className="mt-4 bg-sage-600 text-white px-6 py-2 rounded-xl hover:bg-sage-700 transition"
        >
          Submit
        </button>
      </form>
      <div>
        {messages.length > 0 ? (
          <ul>
            {messages.map((message, index) => (
              <li key={index} className="text-gray-300 mb-2">{message}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-300">No messages yet. Be the first to leave one!</p>
        )}
      </div>
    </div>
  );
};

export default Guestbook;
