import {
  TG_URL,
  INST_URL,
  MAIL_ICN_URL,
  TG_ICN_URL,
  INST_ICN_URL,
} from "../../assets/data/Constants";
import {Logo} from  "../Logo"
import React from "react";

const Footer = ({ openModal }) => {
  const handleMailLinkClick = (event) => {
    event.preventDefault();
    openModal();
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__socials">
          <a
            href={TG_URL}
            className="footer__socials-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={TG_ICN_URL}
              alt="Telegram"
              className="footer__socials-icon"
            />
          </a>
          <a
            href={INST_URL}
            className="footer__socials-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={INST_ICN_URL}
              alt="Instagram"
              className="footer__socials-icon"
            />
          </a>
          <button
            onClick={handleMailLinkClick}
            className="footer__socials-item"
          >
            <img
              src={MAIL_ICN_URL}
              alt="Email"
              className="footer__socials-icon"
            />
          </button>
        </div>
        <div className="footer_dsc">
          <span className="footer_dsc-txt">
            Веду общение лично. По вопросам оплаты и любым другим - пишите.
          </span>
        </div>
        <Logo/>
      </div>
    </footer>
  );
};

export default Footer;
