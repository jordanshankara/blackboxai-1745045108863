import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse('Loading...');
    try {
      const res = await axios.post('/api/chatbot', { query });
      setResponse(res.data.answer);
    } catch (error) {
      setResponse('Error fetching response');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about trends or news..."
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Ask
        </button>
      </form>
      <div className="whitespace-pre-wrap bg-gray-50 p-3 rounded min-h-[100px]">
        {response}
      </div>
    </div>
  );
}

export default Chatbot;
