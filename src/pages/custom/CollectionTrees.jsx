import "../audio/style/seasons.less";
import AudioPlayer from "./AudioPlayer";
import { tracks } from "../../components/Audio/tracks";
import { useState } from "react";
export default function CollectionTrees(){
    const [trackIndex, setTrackIndex] = useState(19);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const currentLable = "نام اثر: مجموعه درختها";
    const currentText = `ابعاد : ۱۱۰×۱۱۰\nتکنیک : رنگ و روغن روی بوم\nدرباره اثر : این نقاشی ، بخشی از مجموعه‌ ای درباره‌ ی درختان است و در پی آن است تا تفاوت‌ ها را به تصویر بکشد؛ تفاوت‌ هایی که می‌ توانند خوب یا بد باشند و همین امر، دلیل تمایز آن‌ها با دیگران است . درختی با رنگی متمایز ، اما آبی به رنگ آسمان ، در فضایی خاکستری به چشم می‌خورد . این تصویر ، نمایانگر قدرت و برتری است در مقابل سایر درختانی که تصمیم گرفته‌ اند شبیه به هم باشند و بر این شباهت اصرار دارند. درختان، به خاطر قامت بلندشان که ریشه در زمین دارند و تنه و برگ‌ هایشان به آسمان می‌رسند، به مثابه واسطه‌های تمثیلی عمل می‌کنند که دنیای خاکی پایین را به عالم بالا و لاهوتی متصل می‌سازند . درختان برای من ، همواره نمادی از امید ، رشد و آگاهی بوده‌اند و البته ، موضوع بسیاری از آثار هنری من را تشکیل می‌دهند.`;
    return (
      <div  
      className="customMain"
      >
                <AudioPlayer {...{ currentTrack, currentLable, currentText }} />
             </div>
    );

}