import React, { useEffect } from 'react';
import dogBarkSound from './sounds/dog-bark.mp3';

const SoundPlayer = () => {
  useEffect(() => {
    const playSound = new Audio(dogBarkSound);
    playSound.play();
  }, []);

  return null;
};

export default SoundPlayer;