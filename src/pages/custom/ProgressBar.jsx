export default function ProgressBar({
  progressBarRef,
  audioRef,
  timeProgress,
  duration,
}) {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <div className="progress">
      <span className="time">{formatTime(duration)}</span>

      {/* <span className="time-current">{formatTime(timeProgress)}</span> */}
      <input className="time-current-input"
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
        // style={{direction:'ltr'}}
      />
      {/* <span className="time">{formatTime(duration)}</span> */}
      <span className="time-current">{formatTime(timeProgress)}</span>

    </div>
  );
}

