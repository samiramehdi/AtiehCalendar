
import "../audio/style/seasons.less";
import AudioPlayer from "./AudioPlayer";
import { tracks } from "../../components/Audio/tracks";
import { useState } from "react";
export default function Interpretations(){
    const [trackIndex, setTrackIndex] = useState(15);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const currentLable = "نام اثر : تفاسیر";
    const currentText = `ابعاد:۱۱۰×۱۱۰ سانتیمتر\nتکنیک: ترکیب مواد\nدرباره اثر:در این اثر " تفاسیر" ، جوهر نوستالژی و رمز و راز از طریق کنار هم قرار گرفتن تعدادی کاغذ چروک با بافتی قدیمی به تصویر کشیده شده است.  کاغذهای چروک و تا شده ، که به طور عمده در مرکز و در پس زمینه ای انتزاعی با بافت برجسته با استفاده از تکنیک ترکیب مواد به تصویر کشیده شده اند، به گذر زمان و سنگینی داستان های ناگفته اشاره می کنند. چین‌های قابل مشاهده و ظاهر قدیمی کاغذها به عنوان یادآوری از تاریخ عمل می‌کند و این احتمال را میرساند که زمانی نامه‌های ارزشمندی از بزرگان و عاشقان در فراسوی یک سرزمین ارسال و هر کدام با داستان منحصر به فرد خود حکایتی ماندگار دارند .  از طریق این ترکیب سعی کردم حضور ماندگار تاریخ های شخصی، احساسات در هم تنیده با کلمات دست نوشته و اهمیت ماندگار این قطعات گذشته را منتقل نمایم.`;
  return (
      <div  
      className="customMain"
      >
                <AudioPlayer {...{ currentTrack, currentLable, currentText }} />
             </div>
    );
}