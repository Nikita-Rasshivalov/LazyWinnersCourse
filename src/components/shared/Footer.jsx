import {TG_URL,INST_URL} from "../../assets/data/Constants"
import React from 'react';


const Footer = ({ openModal }) => {
  const handleMailLinkClick = (event) => {
    event.preventDefault(); 
    openModal(); 
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__socials">
          <a href={TG_URL} className="footer__socials-item" target="_blank" rel="noopener noreferrer">
            <img src="content/mail_icn.svg" alt="Telegram" className="footer__socials-icon" />
          </a>
          <a href={INST_URL} className="footer__socials-item" target="_blank" rel="noopener noreferrer">
            <img src="content/mail_icn.svg" alt="Instagram" className="footer__socials-icon" />
          </a>
          <button onClick={handleMailLinkClick} className="footer__socials-item">
            <img src="content/mail_icn.svg" alt="Email" className="footer__socials-icon" />
          </button>
        </div>
        <div className="footer_dsc">
          <span className="footer_dsc-txt">Веду общение лично. По вопросам оплаты и любым другим - пишите.</span>
        </div>
        <div className="footer__logo">
          <img src="./content/logo.png" alt="Логотип" className="footer__logo-image logo-image" />
          <span className="footer__logo-text logo-text">Lazy Winners</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
