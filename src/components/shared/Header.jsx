import dollarIcon from "../../assets/content/dollar.png";
import  {smoothScroll} from '../../utils/smoothScroll'

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
          <div className="header__text" >
              <img src={dollarIcon} alt="Доллар" className="text__icon" />
              <p>Прочитайте всю информацию - все для вас</p>
              <img src={dollarIcon} alt="Доллар" className="text__icon" />
          </div>
        </div>
        <button className="header__button button" onClick={() => smoothScroll("get-course__anchor",200)}>Получить</button>
      </div>
    </header>
  );
};

export default Header;

