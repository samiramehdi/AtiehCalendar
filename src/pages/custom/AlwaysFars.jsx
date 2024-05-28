
import "../audio/style/seasons.less";
import AudioPlayer from "./AudioPlayer";
import { tracks } from "../../components/Audio/tracks";
import { useState } from "react";

export default function AlwaysFars(){
    const [trackIndex, setTrackIndex] = useState(13);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const currentLable = "نام اثر: همیشه فارس";
    const currentText = `ابعاد : ۱۱۰×۱۱۰\nتکنیک : رنگ و روغن روی بوم\nدرباره اثر : این اثر با نام همیشه فارس، نماد قدمت و صلابت یک کشور است، نمادی با به کارگرفتن تضاد آرامش سپیدی بوم و چروکهای صبورانه اش در کنار صحنه ای از شاهکار مینیاتور ایرانی در قسمت خلیج فارس که مربوط به دوره صفوی میباشد .
وسعت خلیج فارس که نمایانگر زیبایی و تاریخ یک کشور بزرگ است در وسط بوم نمایان و عظمتی طبیعی را نمایان میکند با این حال، این منظره آرام در کنار یک مینیاتور جنگی از یک نقاشی، نمادی آشکار از صلابت و زیبایی به رغم کشمکشهای تاریخی یک مکان است.`;
      return (
      <div  
      className="customMain"
      >
                <AudioPlayer {...{ currentTrack, currentLable, currentText }} />
             </div>
    );
}