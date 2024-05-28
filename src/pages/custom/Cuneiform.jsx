import "../audio/style/seasons.less";
import AudioPlayer from "./AudioPlayer";
import { tracks } from "../../components/Audio/tracks";
import { useState } from "react";
export default function Cuneiform(){
    const [trackIndex, setTrackIndex] = useState(17);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const currentLable = "نام اثر:خط میخی";
    const currentText =
    `ابعاد : ۱۱۰×۱۱۰\nتکنیک : رنگ و روغن روی بوم\nدرباره اثر : خط میخی ، نشان‌ دهنده یکی از قدیمی‌ ترین سیستم‌ های نوشتاری جهان ، حدود ۳۵۰۰ سال پیش از میلاد در سومر بین‌ النهرین پدید آمد . این خط ، که برای نوشتن زبان‌ های متعددی مانند سومری و اکدی به کار می‌ رفت ، توسط هخامنشیان در سده ششم پیش از میلاد برای نوشتن کتیبه‌ ها استفاده شد . خط میخی هخامنشی ، جدیدترین شکل خط میخی ، با نشانه‌ هایی برای واژگان مهم مانند شاه و کشور ، به عنوان ساده‌ ترین نوع خط میخی شناخته می‌شود . کتیبه‌های معروف هخامنشی مانند بیستون و تخت جمشید ، حاوی متونی با اهمیت تاریخی و زبان شناسی هستند که توسط شاهان هخامنشی سفارش داده شده‌ اند .`;
    return (
      <div  
      className="customMain"
      >
                <AudioPlayer {...{ currentTrack, currentLable, currentText }} />
             </div>
    );
}