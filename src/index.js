import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CssBaseline } from '@mui/material';
import SoundPlayer from './SoundPlayer';
import dogBarkSound from './sounds/dog-bark.mp3';

// Create a new Audio object with the sound file
const playSound = new Audio(dogBarkSound);

// Create a functional component to use the useEffect Hook
function SoundEffectComponent() {
  // Play the sound effect when the component mounts
  useEffect(() => {
    playSound.play();
  }, []);

  return null; // This component doesn't render any UI
}

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
    <SoundPlayer />
    <SoundEffectComponent /> {/* Render the new component */}
  </React.StrictMode>,
  document.getElementById('root')
);
