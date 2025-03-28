import React from "react";
import CurrencyValue from "../MainComponents/CurrencyValue";
import { VideoDiscriptionLarge } from "../MainComponents/VideoDiscriptionLarge/VideoDiscriptionLarge";
import { VideoDiscriptionSmall } from "../MainComponents/VideoDiscriptionSmall/VideoDiscriptionSmall";
import GetButton from "../Buttons/GetButton";
import VideoPlayer from "../Player/VideoPlayer";
import { CourseOverview } from "../MainComponents/CourseOverview";
import {
  ABOUT_TXT_P1,
  ABOUT_TXT_P2,
  ABOUT_TXT_P3,
  ABOUT_TXT_P4,
  TG_URL,
  VIDEO_URL,
} from "../../assets/data/Constants";

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
              src="/content/abouImg.webp"
              className="main__about-img"
              alt="aboutImg"
              fetchpriority="high"
            />
            <h4>
              Привет! Я и моя команда занимаемся трейдингом уже более 6 лет.
            </h4>
            <div className="main__text main__text-about">
              <div className="textItem">{ABOUT_TXT_P1}</div>
              <div className="textItem">{ABOUT_TXT_P2}</div>
              <div className="textItem">{ABOUT_TXT_P3}</div>
              <div className="textItem">{ABOUT_TXT_P4}</div>
            </div>
            <div className="video--smaill-side">
              <VideoDiscriptionSmall />
              <VideoPlayer src={VIDEO_URL} />
            </div>
          </div>
        </section>
        <section className="main__course">
          <h3>
            🚀 Хотите освоить блокчейн на новом уровне? Этот курс – ваш путь к
            глубокому пониманию криптоиндустрии!
          </h3>
          <CourseOverview />
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
          <VideoDiscriptionLarge />
        </section>
      </div>
    </main>
  );
};

export default Main;
