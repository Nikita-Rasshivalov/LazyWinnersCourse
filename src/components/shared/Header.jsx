import { smoothScroll } from "../../utils/smoothScroll";
import {Logo} from "../Logo"
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <Logo />
        <div className="header__wrapper">
          <p className="header__text">
            <span> «Как много ты готов терять?</span>
            <span>
              <span style={{ color: "#f0b90b" }}> Достаточно </span>— учась на
              своих ошибках или же
            </span>
            <span>
              <span style={{ color: "#f0b90b" }}> раз</span>, применив наши
              знания»
            </span>
          </p>
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
