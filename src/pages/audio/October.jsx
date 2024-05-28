import "./style/seasons.less";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import atiehwhite from "../../assets/img/atiehwhite.png";
import WebsiteItems from "../../components/websites/WebsiteItems";
import SocialNetworks from "../../components/social/SocialNetworks";
import AudioPlayer from "../../components/Audio/AudioPlayer";
import { tracks } from "../../components/Audio/tracks";
import { useState } from "react";
export default function October() {
  const [trackIndex, setTrackIndex] = useState(7);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const currentLable = "نادرابراهیمی";
  const currentText =
   "انسان آهسته آهسته عقب نشینی میکند، هیچکس یکباره سقوط نمی کند؛ یکباره وا نمی دهد، یکباره خسته نمیشود، رنگ عوض نمیکند، تبدیل نمیشود و ازدست نمی رود، زندگی بسیار آهسته از شکل می افتد و تکرار خستگی بسیار موذیانه و پاورچین رخنه میکند؛ قدم اول را اگر به سوی حذف چیزهای خوب برداریم شک نکن که قدم های بعدی را شتابان برخواهیم داشت.";
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
