import { useEffect, useRef } from "react";
import dollarIcon from "../../assets/content/dollar.png";

const Header = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;
  
    const parent = text.parentElement;
    if (!parent) return;
  
    let position = 0;
    const speed = 0; // Скорость движения
    let direction = 1; // Направление движения (1 - вправо, -1 - влево)
  
    const moveText = () => {
      position += speed * direction;
  
      if (position >= parent.offsetWidth - text.offsetWidth) {
        direction = -1; // Двигаемся влево
      }
  
      if (position <= 0) {
        direction = 1; // Двигаемся вправо
      }
  
      text.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(moveText);
    };
  
    moveText();
  }, []);
  
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <img
            src="./content/logo.png"
            alt="Логотип"
            className="header__logo-image logo-image"
          />
          <span className="header__logo-text logo-text">Lazy Winners</span>
        </div>
        <div className="header__running-wrapper">
          <div className="header__running-text" ref={textRef}>
              <img src={dollarIcon} alt="Доллар" className="running-text__icon" />
              <p>Не теряй времени - забирай курс уже сейчас</p>
              <img src={dollarIcon} alt="Доллар" className="running-text__icon" />
          </div>
        </div>
        <button className="header__button button">Получить</button>
      </div>
    </header>
  );
};

export default Header;

