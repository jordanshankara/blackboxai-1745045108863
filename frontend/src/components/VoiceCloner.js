import React, { useState } from 'react';
import axios from 'axios';

function VoiceCloner() {
  const [text, setText] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  const handleGenerate = async () => {
    setAudioUrl('');
    try {
      const res = await axios.post('/api/voice-clone', { text }, { responseType: 'blob' });
      const url = URL.createObjectURL(res.data);
      setAudioUrl(url);
    } catch (error) {
      alert('Error generating voice');
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to generate voice"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        rows={4}
      />
      <button
        onClick={handleGenerate}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      >
        Generate Voice
      </button>
      {audioUrl && (
        <audio controls className="mt-4 w-full">
          <source src={audioUrl} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default VoiceCloner;
