import LinkIcon from "@mui/icons-material/Link";
import "../../pages/audio/style/seasons.less";
export default function WebsiteItems() {
  return (
    <section className="link-items">
      <div className="link-item">
        <a href="https://atieh-broker.ir" target="_blank">
          <LinkIcon className="svg" />
          <span className="title">وبسایت کارگزاری آتیه</span>
        </a>
      </div>

      <div className="link-item">
        <a
          href="https://sejam.atieh-broker.ir/_srlu/index?ReturnUrl=%2f%3fMK%3dinstagram%2f&MK=instagram/"
          target="_blank"
        >
          <LinkIcon className="svg" />
          <span className="title">ثبت نام غیرحضوری</span>
        </a>
      </div>
      <div className="link-item">
        <a href="https://online.atieh-broker.ir/Account/Login" target="_blank">
          <LinkIcon className="svg" />
          <span className="title">سامانه معاملات</span>
        </a>
      </div>
      <div className="link-item">
        <a href="https://calendar.atieh-broker.ir/branchs" target="_blank">
          <LinkIcon className="svg" />
          <span className="title">لیست شعب</span>
        </a>
      </div>
    </section>
  );
}
