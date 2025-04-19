import React, { useState } from 'react';
import axios from 'axios';

function AvatarTwin() {
  const [image, setImage] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState('');

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    setImage(file);
    setAvatarUrl('');
  };

  const handleGenerate = async () => {
    if (!image) {
      alert('Please upload an image first');
      return;
    }
    const formData = new FormData();
    formData.append('image', image);
    try {
      const res = await axios.post('/api/avatar-twin', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setAvatarUrl(res.data.avatarUrl);
    } catch (error) {
      alert('Error generating avatar twin');
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleUpload} className="mb-2" />
      <button
        onClick={handleGenerate}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Generate Avatar Twin
      </button>
      {avatarUrl && (
        <div className="mt-4">
          <img src={avatarUrl} alt="AI Avatar Twin" className="rounded shadow max-w-full" />
        </div>
      )}
    </div>
  );
}

export default AvatarTwin;
