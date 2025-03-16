import { COURSE_PRICE, COURSE_PRICE_DISCOUNT } from "../assets/data/Constants";
import React from 'react';
const CurrencyValue = () => {
  return (
    <div className="main__course__currency-wrapper">
      <div className="main__course__currency-value">
        <img src="content/currency.svg" className="currency-logo" alt="currencyIcn" />
        <span className="main__course-cost">{COURSE_PRICE_DISCOUNT}</span>
        <img src="content/currency.svg" className="currency-logo" alt="currencyIcn" />
      </div>
      <div className="main__course__currency-value discounted">
        <img src="content/currency.svg" className="currency-logo" alt="currencyIcn" />
        <span className="main__course-cost original-price">{COURSE_PRICE}</span>
        <img src="content/currency.svg" className="currency-logo" alt="currencyIcn" />
      </div>
    </div>
  );
};

export default CurrencyValue;
