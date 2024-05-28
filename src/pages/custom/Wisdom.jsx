import "../audio/style/seasons.less";
import AudioPlayer from "./AudioPlayer";
import { tracks } from "../../components/Audio/tracks";
import { useState } from "react";
export default function Wisdom(){
    const [trackIndex, setTrackIndex] = useState(16);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const currentLable = "نام اثر: خرد";
    const currentText = `ابعاد : ۱۱۰×۱۱۰\nتکنیک : رنگ و روغن روی بوم\nدرباره اثر : در این اثر با نام " خرد " ، از نمادها و کدهایی برای ارسال پیامی عمیق و انتقال موضوع تجربه انسان استفاده شده است. تصویر چشمگیر یک دست، که بر روی پس زمینه ای قدیمی و فرسوده قرار گرفته است، یادآور توانایی ما برای شکل دادن به سرنوشت خود در چارچوب جامعه است. قرار گرفتن توپ های بیلیارد، نشان دهنده شانس ها و فرصت هایی است که در زندگی هر یک از ما پیش می آید،  با این شانس ها است که ما سفر خود را طی می کنیم و تجربیات و خرد به دست می آوریم.  بخش مینیاتوری نقاشی، به خرد اساسی بشریت اشاره دارد و بر دانش عمیقی که هر فرد از طریق انباشت سال ها تجربیات به دست می آورد تأکید می کند.  این ترکیب،  بینندگان را دعوت می‌کند تا در مورد پیوستگی عاملیت شخصی، اتفاقات تصادفی و خرد پایدار ذاتی روح انسان تأمل کنند.`;
    return (
      <div  
      className="customMain"
      >
                <AudioPlayer {...{ currentTrack, currentLable, currentText }} />
             </div>
    );
}