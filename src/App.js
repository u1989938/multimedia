import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import AudioSection from './components/AudioSection';
import ActivitySelector from './components/ActivitySelector';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <VideoSection />
      <AudioSection />
      <ActivitySelector />
      <footer>
        <p>&copy; 2026 Menorca Tourism. All Rights Reserved.</p>
        <p>
          Visit the <a href="https://www.menorca.es/portal.aspx?IDIOMA=1" target="_blank" rel="noopener noreferrer">official Menorca Tourism Website</a>
        </p>
      </footer>
    </div>
    
  );
}

export default App;
