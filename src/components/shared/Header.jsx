import { smoothScroll } from "../../utils/smoothScroll";
import React from "react";

const Header = () => {
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
        <div className="header__wrapper">
          <div className="header__text">
            <p>
            «Все упирается в то, как много ты готов терять:
              <span>
                <span style={{ color: "#f0b90b" }}>Очень</span> - учась на своих
                ошибках, или <span style={{ color: "#f0b90b" }}>один раз</span>, 
                использовав наши услуги»
              </span>
            </p>
          </div>
        </div>
        <button
          className="header__button button"
          onClick={() => smoothScroll("get-course__anchor", 200)}
        >
          Получить
        </button>
      </div>
    </header>
  );
};

export default Header;
