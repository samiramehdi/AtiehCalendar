import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import IconButton from "@mui/material/IconButton";
import Forward10 from "@mui/icons-material/Forward10";
import Replay10 from "@mui/icons-material/Replay10";
import { useCallback, useEffect, useRef, useState } from "react";
import "./style/audio.less";
export default function Controls({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const skipForward = () => {
    audioRef.current.currentTime += 10;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 10;
  };
  return (
    <div className="main-icons">
      <div className="icon-button">
        <IconButton
          aria-label="previous"
          onClick={skipForward}
          className="icon"
        >
          <Forward10 />
        </IconButton>
        <IconButton
          aria-label="play/pause"
          onClick={togglePlayPause}
          className="icon"
        >
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>

        <IconButton aria-label="next" onClick={skipBackward} className="icon">
          <Replay10 />
        </IconButton>
      </div>
    </div>
  );
}
