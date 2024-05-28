import "./style/seasons.less";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import atiehwhite from "../../assets/img/atiehwhite.png";
import WebsiteItems from "../../components/websites/WebsiteItems";
import SocialNetworks from "../../components/social/SocialNetworks";
import AudioPlayer from "../../components/Audio/AudioPlayer";
import { tracks } from "../../components/Audio/tracks";
import { useState } from "react";
export default function January() {
  const [trackIndex, setTrackIndex] = useState(10);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const currentLable = "آلن دوباتن";
  const currentText =
    "توانایی آرام ماندن از جمله مهارت‌ های بسیار مهم زندگی است که بسیار نادیده گرفته شده است. بدترین تصمیمات را هنگامی می‌ گیریم که آرامشمان را از دست داده‌ایم یا دچار اضطراب و آشفتگی شده‌ ایم. ترس به‌طور کشنده‌ای می‌تواند توانایی ما را برای مقابله با مشکلات واقعی و زیر بنایی از بین ببرد. آرام ‌تر بودن اصلا به این معنا نیست که فکر کنیم همه چیز به خیر و خوشی تمام خواهد شد، بلکه صرفا بدین معناست که با وضعیت ذهنی بهتری با چالش‌ های حقیقی زندگی‌ مان روبه‌رو خواهیم شد.";
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
