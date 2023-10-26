import React, { useEffect, useState} from 'react';
import Song from '../../static/music/love.mp3';
import Play from '../../static/icons/play.png';
import Pause from '../../static/icons/pause.png';
import classes from './style.module.scss';

const AudioPlayer = ({ isPlaying, setIsPlaying}) => {
  const [audio] = useState(new Audio(Song));

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  return (
    <div className={classes.audioContainer}>
      <img onClick={() => setIsPlaying(!isPlaying)} src={isPlaying ? Pause : Play} alt="audio-player" />
    </div>
  )
}

export default AudioPlayer
