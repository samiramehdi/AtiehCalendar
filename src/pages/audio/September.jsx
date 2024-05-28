import "./style/seasons.less";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import atiehwhite from "../../assets/img/atiehwhite.png";
import WebsiteItems from "../../components/websites/WebsiteItems";
import SocialNetworks from "../../components/social/SocialNetworks";
import AudioPlayer from "../../components/Audio/AudioPlayer";
import { tracks } from "../../components/Audio/tracks";
import { useState } from "react";
export default function September() {
  const [trackIndex, setTrackIndex] = useState(6);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const currentLable = "مارتین سلیگمن";
  const currentText =
    "زندگی همان شکست ها و تراژدی هایی را که بر سر خوش بین ها می آورد، بر بدبین ها هم تحمیل می کند، اما خوش بین ها این سختی ها را راحت تر تحمل می کنند.";
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
