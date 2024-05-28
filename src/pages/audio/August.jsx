import "./style/seasons.less";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import atiehwhite from "../../assets/img/atiehwhite.png";
import WebsiteItems from "../../components/websites/WebsiteItems";
import SocialNetworks from "../../components/social/SocialNetworks";
import AudioPlayer from "../../components/Audio/AudioPlayer";
import { tracks } from "../../components/Audio/tracks";
import { useState } from "react";
export default function August() {
  const [trackIndex, setTrackIndex] = useState(5);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const currentLable = "مارتین سلیگمن";
  const currentText =
    "ضرورتی ندارد که الگوی فکر کردن ما دائمی و ثابت باشد، یکی از مهمترین یافته های روانشناسی در دو دهه اخیر این است که افراد، درباره نحوه فکر کردنشان، قدرت انتخاب دارند.";
  return (
    <div className="main">
      <div className="avatar">
        <img src={atiehwhite} alt="کارگزاری آتیه" />
      </div>

      <header>
        <h1>کارگزاری آتیه</h1>
        <span>آتیه خود را با ما بسازید</span>
      </header>
      <AudioPlayer {...{ currentTrack, currentLable, currentText }} />
      <WebsiteItems />
      <SocialNetworks />
      <a
        href="https://calendar.atieh-broker.ir/tel:90006000"
        className="support"
      >
        <HeadphonesIcon />
        <span>پشتیبانی:</span>
        <span className="num">90006000</span>
      </a>
    </div>
  );
}
