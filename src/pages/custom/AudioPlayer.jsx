import DisplayTrack from "./DisplayTrack";
import { useRef, useState } from "react";
import "./style/audio.less";
export default function AudioPlayer({
  currentTrack,
  currentLable,
  currentText,
}) {
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef();
  const progressBarRef = useRef();
  return (
    <div className="customMain-audio">
     
      <DisplayTrack
        {...{
          currentTrack,
          audioRef,
          setDuration,
          progressBarRef,
          duration,
          timeProgress,
          setTimeProgress,
          currentLable,
          currentText,
        }}
      />
    </div>
  );
}
