import "./style/seasons.less";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import atiehwhite from "../../assets/img/atiehwhite.png";
import WebsiteItems from "../../components/websites/WebsiteItems";
import SocialNetworks from "../../components/social/SocialNetworks";
import AudioPlayer from "../../components/Audio/AudioPlayer";
import { tracks } from "../../components/Audio/tracks";
import { useState } from "react";
export default function June() {
  const [trackIndex, setTrackIndex] = useState(3);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const currentLable = "آنتوان اگزوپری";
  const currentText =
   "روباه گفت. یادت باشه ارزش گل تو به قدر عمریه که به پاش صرف کردی. انسانها این حقیقت رو فراموش کرده اند اما تو نباید فراموشش کنی، تو تا زنده ای نسبت به چیزی که اهلیش کرده ای مسئولی تو مسئول گلت هستی، اینو یادت باشه شازده کوچولو برای اینکه یادش بمونه تکرارکرد. من مسئول گلم هستم.";
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
      <a href="https://reg.atieh-broker.ir/tel:90006000" className="support">
        <HeadphonesIcon />
        <span>پشتیبانی:</span>
        <span className="num">90006000</span>
      </a>
    </div>
  );
}
