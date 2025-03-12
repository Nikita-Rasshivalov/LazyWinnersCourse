import CurrencySVG from "../assets/content/currency.svg";
import { COURSE_PRICE, COURSE_PRICE_DISCOUNT } from "../assets/data/Constants";

const CurrencyValue = () => {
  return (
    <div className="main__course__currency-wrapper">
      <div className="main__course__currency-value">
        <img src={CurrencySVG} className="currency-logo" alt="currencyIcn" />
        <span className="main__course-cost">{COURSE_PRICE_DISCOUNT}</span>
        <img src={CurrencySVG} className="currency-logo" alt="currencyIcn" />
      </div>
      <div className="main__course__currency-value discounted">
        <img src={CurrencySVG} className="currency-logo" alt="currencyIcn" />
        <span className="main__course-cost original-price">{COURSE_PRICE}</span>
        <img src={CurrencySVG} className="currency-logo" alt="currencyIcn" />
      </div>
    </div>
  );
};

export default CurrencyValue;
