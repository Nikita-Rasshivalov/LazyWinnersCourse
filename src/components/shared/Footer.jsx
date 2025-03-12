import TgIcn from "../../assets/content/tg_icn.svg"
import InstIcn from "../../assets/content/inst_icn.svg"
import MailIcn from "../../assets/content/mail_icn.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__socials">
          <a href="https://t.me/yourchannel" className="footer__socials-item" target="_blank" rel="noopener noreferrer">
            <img src={TgIcn} alt="Telegram" className="footer__socials-icon" />
          </a>
          <a href="https://instagram.com/yourprofile" className="footer__socials-item" target="_blank" rel="noopener noreferrer">
            <img src={InstIcn} alt="Instagram" className="footer__socials-icon" />
          </a>
          <a href="mailto:example@mail.com" className="footer__socials-item">
            <img src={MailIcn} alt="Email" className="footer__socials-icon" />
          </a>
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
