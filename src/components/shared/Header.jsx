import { useEffect, useRef } from "react";
import dollarIcon from "../../assets/content/dollar.png";
import  {smoothScroll} from '../../utils/smoothScroll'

const Header = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1025px)");
  
    if (!mediaQuery.matches) return; // Проверяем ширину экрана
  
    const text = textRef.current;
    if (!text) return;
  
    const parent = text.parentElement;
    if (!parent) return;
  
    let position = 0;
    const speed = 3;
    let direction = 1;
    let animationFrameId;
    const moveText = () => {

      position += speed * direction;
  
      if (position >= parent.offsetWidth - text.offsetWidth) {
        direction = -1;
      }
  
      if (position <= 0) {
        direction = 1;
      }
  
      text.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(moveText);
    };
  
    moveText();
  
    // Отслеживаем изменение ширины экрана
    const handleResize = (e) => {
      if (!e.matches) {
        cancelAnimationFrame(animationFrameId); // Останавливаем анимацию, если экран стал меньше 1025px
        text.style.transform = `translateX(${0}px)`;
      } else {
        moveText(); // Перезапускаем анимацию, если экран снова больше 1024px
      }
    };
  
    mediaQuery.addEventListener("change", handleResize);
  
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
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
        <button className="header__button button" onClick={() => smoothScroll("get-course__anchor",200)}>Получить</button>
      </div>
    </header>
  );
};

export default Header;

