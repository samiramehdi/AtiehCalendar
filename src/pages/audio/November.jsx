import "./style/seasons.less";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import atiehwhite from "../../assets/img/atiehwhite.png";
import WebsiteItems from "../../components/websites/WebsiteItems";
import SocialNetworks from "../../components/social/SocialNetworks";
import AudioPlayer from "../../components/Audio/AudioPlayer";
import { tracks } from "../../components/Audio/tracks";
import { useState } from "react";
export default function November() {
  const [trackIndex, setTrackIndex] = useState(8);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const currentLable = "کتاب بینوایان اثر ویکتور هوگو";
  const currentText =
  "هرگز نه از دزدان بترسیم، نه از آدمکشان. این‌ ها خطرات بیرونی‌ اند، خطرات کوچکند. از خودمان بترسیم. دزدان واقعی، پیش‌ داوری‌ های ما هستند؛ آدم‌کشان واقعی نادرستی‌ های ما هستند. مهالک بزرگ در درون مایند. چه اهمیت دارد آنچه سرهای ما را، یا کیسه پولمان را تهدید می‌کند! نیندیشیم جز در آنچه که روحمان را تهدید می‌ کند.";
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
