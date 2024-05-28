import "./style/seasons.less";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import atiehwhite from "../../assets/img/atiehwhite.png";
import WebsiteItems from "../../components/websites/WebsiteItems";
import SocialNetworks from "../../components/social/SocialNetworks";
import AudioPlayer from "../../components/Audio/AudioPlayer";
import { tracks } from "../../components/Audio/tracks";
import { useState } from "react";
export default function July() {
  const [trackIndex, setTrackIndex] = useState(4);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const currentLable = "ویلیام گلاسر";
  const currentText =
  // "بذر تمام بدبختی‌های ما در سال‌هایی کاشته می‌شوند که با آدم‌هایی سر و کار داریم که معتقدند، نه تنها دریافته‌اند چه چیزهایی برای خودشان درست است، بلکه صلاح دیگران را نیز می‌دانند. "
   "بذر تمام بدبختی‌های ما در سال‌هایی کاشته می‌شوند که با آدم‌هایی سر و کار داریم که معتقدند، نه تنها دریافته‌اند چه چیزهایی برای خودشان درست است، بلکه صلاح دیگران را نیز می‌دانند. آنها با توسل به این اکتشاف و سنت مخربی که هزاران سال است بر فکر بشر سایه افکنده است احساس می‌کنند وظیفه دارند دیگران را نیز مجبور کنند تا کاری را که از نظر آنها درست است انجام دهند.";
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
