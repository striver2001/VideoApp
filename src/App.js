import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import './App.css'
function App() {
  const videoId = 'KjGxeZvj824';
  const apiKey = 'AIzaSyCw3XHZQYCIPfBcBQHaTGg9Kn-wtthJkCM';

  return (
    <div className="App">
      <h1>YouTube Video App</h1>
      <VideoPlayer videoId={videoId} apiKey={apiKey} />
    </div>
  );
}

export default App;

// Vf0h9XupE
// https://www.youtube.com/watch?v=Vf0h9XupE-c&ab_channel=Kaka