import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import "./style/audio.less";
export default function DisplayTrack({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  duration,
  timeProgress,
  setTimeProgress,
  currentLable,
  currentText,
}) {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };
  return (
    <Card
      className="main-card"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <audio
          src={currentTrack.src}
          ref={audioRef}
          onLoadedMetadata={onLoadedMetadata}
        />

        <CardContent className="card-content">
          <Typography component="div" variant="h5" className="lable-text">
            {currentLable}
          </Typography>
          <Typography
            // variant="subtitle1"
            color="text.secondary"
            component="div"
            variant="h6"
            className="title-text"
          >
            {currentText}
          </Typography>
        </CardContent>

        <Box className="box-center">
          <Controls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
            }}
          />
          <ProgressBar
            {...{ progressBarRef, audioRef, timeProgress, duration }}
          />
        </Box>
      </Box>
      <CardMedia 
        component="img"
        image={currentTrack.thumbnail}
        alt="Live from space album cover"
      />
    </Card>
  );
}
