import React, { useState } from 'react';
import axios from 'axios';

function AutoEditor() {
  const [videoUrl, setVideoUrl] = useState('');
  const [editedVideoUrl, setEditedVideoUrl] = useState('');

  const handleEdit = async () => {
    setEditedVideoUrl('');
    try {
      const res = await axios.post('/api/auto-edit', { videoUrl });
      setEditedVideoUrl(res.data.editedVideoUrl);
    } catch (error) {
      alert('Error auto editing video');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="Enter video URL to auto edit"
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />
      <button
        onClick={handleEdit}
        className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition"
      >
        Auto Edit Video
      </button>
      {editedVideoUrl && (
        <video controls className="mt-4 w-full max-h-60">
          <source src={editedVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default AutoEditor;
