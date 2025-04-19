import React, { useState } from 'react';
import axios from 'axios';

function ScriptCreator() {
  const [topic, setTopic] = useState('');
  const [script, setScript] = useState('');

  const handleGenerate = async () => {
    setScript('Generating script...');
    try {
      const res = await axios.post('/api/script', { topic });
      setScript(res.data.script);
    } catch (error) {
      setScript('Error generating script');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter topic for script"
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />
      <button
        onClick={handleGenerate}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Generate Script
      </button>
      <pre className="mt-4 bg-gray-50 p-3 rounded whitespace-pre-wrap min-h-[100px]">{script}</pre>
    </div>
  );
}

export default ScriptCreator;
