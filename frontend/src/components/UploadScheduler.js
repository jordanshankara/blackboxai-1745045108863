import React, { useState } from 'react';
import axios from 'axios';

function UploadScheduler() {
  const [platform, setPlatform] = useState('youtube');
  const [contentUrl, setContentUrl] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSchedule = async () => {
    setMessage('');
    try {
      const res = await axios.post('/api/schedule-upload', {
        platform,
        contentUrl,
        scheduleTime,
      });
      setMessage(res.data.message);
    } catch (error) {
      setMessage('Error scheduling upload');
    }
  };

  return (
    <div>
      <label className="block mb-1 font-semibold">Platform</label>
      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2"
      >
        <option value="youtube">YouTube</option>
        <option value="instagram">Instagram</option>
        <option value="tiktok">TikTok</option>
        <option value="facebook">Facebook</option>
      </select>

      <label className="block mb-1 font-semibold">Content URL</label>
      <input
        type="text"
        value={contentUrl}
        onChange={(e) => setContentUrl(e.target.value)}
        placeholder="Enter content URL"
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />

      <label className="block mb-1 font-semibold">Schedule Time</label>
      <input
        type="datetime-local"
        value={scheduleTime}
        onChange={(e) => setScheduleTime(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <button
        onClick={handleSchedule}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Schedule Upload
      </button>

      {message && <p className="mt-3 text-center">{message}</p>}
    </div>
  );
}

export default UploadScheduler;
