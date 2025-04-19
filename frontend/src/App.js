import React from 'react';
import Chatbot from './components/Chatbot';
import ScriptCreator from './components/ScriptCreator';
import VoiceCloner from './components/VoiceCloner';
import AvatarTwin from './components/AvatarTwin';
import AutoEditor from './components/AutoEditor';
import UploadScheduler from './components/UploadScheduler';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">Content Creation Web App</h1>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Chatbot for Trend & News Research</h2>
          <Chatbot />
        </section>
        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">AI Script Creator</h2>
          <ScriptCreator />
        </section>
        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Voice Cloning & Generator</h2>
          <VoiceCloner />
        </section>
        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">AI Avatar Twin</h2>
          <AvatarTwin />
        </section>
        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">AI Auto Editing</h2>
          <AutoEditor />
        </section>
        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Upload Scheduler</h2>
          <UploadScheduler />
        </section>
      </main>
    </div>
  );
}

export default App;
