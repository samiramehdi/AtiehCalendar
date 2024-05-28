import WebsiteItems from "../../components/websites/WebsiteItems";
import SocialNetworks from "../../components/social/SocialNetworks";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import atiehwhite from "../../assets/img/atiehwhite.png";
import AudioPlayer from "../../components/Audio/AudioPlayer";
import { useState } from "react";
import { tracks } from "../../components/Audio/tracks";

export default function Home() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const currentLable = "قرآن";
  const currentText =
    "و شما به حال خود آگاه‌ ترید؛ چون خدای عزّ‌وجلّ می فرماید:«بَلِ الْإِنْسانُ عَلی نَفْسِهِ بَصِیرَةٌ وَ لَوْ أَلْقی مَعاذِیرَهُ» بلکه آدمی بر حال خودش بیناست، هر چند در ظاهر براى خود عذرهايى بتراشد.";
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
