import {
  ABOUT_TXT,
  ABOUT_COURSE_TXT,
  TG_URL,
  VIDEO_URL
} from "../../assets/data/Constants";
import CurrencyValue from "../MainComponents/CurrencyValue";
import GetButton from "../Buttons/GetButton";
import React from "react";
import VideoPlayer from "../Player/VideoPlayer"  

const Main = ({ openModal }) => {
  const handlMailBtnClick = () => {
    openModal();
  };

  return (
    <main className="main">
      <div className="main__container">
        <section className="main__about">
          <div className="main__about-info">
            <img
              src="/content/abouImg.png"
              className="main__about-img"
              alt="aboutImg"
            />
            <span className="main__text main__text-about">{ABOUT_TXT}</span>
            <VideoPlayer src={VIDEO_URL}/>
          </div>
        </section>
        <section className="main__course">
          <span className="main__text main__text-course">
            {ABOUT_COURSE_TXT}
          </span>
          <div className="main__extra-data">
            <div className="get-buttons__wrapper" id="get-course__anchor">
              <GetButton
                imgSrc="/content/mail_icn.svg"
                onClick={handlMailBtnClick}
                text="Купить через"
              />
              <GetButton
                imgSrc="/content/tg_icn.svg"
                onClick={() => window.open(TG_URL, "_blank")}
                text="Купить через"
              />
            </div>
            <CurrencyValue />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
