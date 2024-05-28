import "../audio/style/seasons.less";
import AudioPlayer from "./AudioPlayer";
import { tracks } from "../../components/Audio/tracks";
import { useState } from "react";
export default function RedTrees(){
   
        const [trackIndex, setTrackIndex] = useState(18);
        const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
        const currentLable = "نام اثر: درختان سرخ";
        const currentText = `ابعاد : ۱۱۰×۱۱۰\nتکنیک : رنگ و روغن روی بوم\nدرباره اثر : درختان ، همانند انسان‌ها ، با ریشه‌هایی در خاک ، از آن تغذیه می‌کنند ، اما رویاها و اندیشه‌ هایشان به سوی آسمان است . در این اثر ، رنگ سرخ با قدرتی محوری در مرکز تابلو قرار گرفته ، میان انبوهی از تاریکی و رنگ‌های تیره می‌درخشد . این ، نمادی از آن است که افکار و رویاهای ما ، همواره منبع انرژی و پیشران ما به سمت آینده‌ ای روشن‌ تر هستند.`;
        return (
          <div  
          className="customMain"
          >
                    <AudioPlayer {...{ currentTrack, currentLable, currentText }} />
                 </div>
        );
    
}