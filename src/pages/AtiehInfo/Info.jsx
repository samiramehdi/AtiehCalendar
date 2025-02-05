 import "../audio/style/seasons.less";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import atiehwhite from "../../assets/img/atiehwhite.png";
import WebsiteItems from "../../components/websites/WebsiteItems";
import SocialNetworks from "../../components/social/SocialNetworks";
 
export default function Info() {
 
  return (
    <div className="maininfo">
      <div className="avatar " >
        <img src={atiehwhite} alt="کارگزاری آتیه"  />
      </div>

      <header>
        <h1>کارگزاری آتیه</h1>
        <span>آتیه خود را با ما بسازید</span>
      </header>
   
      <WebsiteItems />
      <SocialNetworks />
      <a
    //    href="https://reg.atieh-broker.ir/tel:90006000"
        className="support">
        <HeadphonesIcon />
        <span>پشتیبانی:</span>
        <span className="num">90006000</span>
      </a>
    </div>
  );
}
