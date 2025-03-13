import { ABOUT_TXT, ABOUT_COURSE_TXT,TG_URL } from "../../assets/data/Constants";
import AboutImg from "../../assets/content/abouImg.png";
import CurrencyValue from "../CurrencyValue";
import GetButton from "../GetButton";
import MailIcn from "../../assets/content/mail_icn.svg"
import TgIcn from "../../assets/content/tg_icn.svg"


const Main = ({ openModal }) => {
  const handlMailBtnClick = () => {
    openModal(); 
  };
  
  return (
    <main className="main">
      <div className="main__container">
        <section className="main__about">
          <div className="main__about-info">
            <img src={AboutImg} className="main__about-img" alt="aboutImg" />
            <span className="main__text main__text-about">{ABOUT_TXT}</span>
          </div>
        </section>
        <section className="main__course">
          <span className="main__text main__text-course">
            {ABOUT_COURSE_TXT}
          </span>
          <div className="main__extra-data" > 
          <div className="get-buttons__wrapper" id="get-course__anchor">
          <GetButton  imgSrc={MailIcn}  onClick={handlMailBtnClick} text="Купить через"/>
          <GetButton  imgSrc={TgIcn}  onClick={() => window.open(TG_URL, "_blank")} text="Купить через"/>
          </div>
          <CurrencyValue />
          </div>   
        </section>
      </div>
    </main>
  );
};

export default Main;