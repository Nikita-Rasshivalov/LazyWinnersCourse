import { COURSE_PRICE, COURSE_PRICE_DISCOUNT, CURRENCY_ICN_URL } from "../assets/data/Constants";
import React from 'react';
const CurrencyValue = () => {
  return (
    <div className="main__course__currency-wrapper">
      <div className="main__course__currency-value">
        <img src={CURRENCY_ICN_URL} className="currency-logo" alt="currencyIcn" />
        <span className="main__course-cost">{COURSE_PRICE_DISCOUNT}</span>
        <img src={CURRENCY_ICN_URL} className="currency-logo" alt="currencyIcn" />
      </div>
      <div className="main__course__currency-value discounted">
        <img src={CURRENCY_ICN_URL} className="currency-logo" alt="currencyIcn" />
        <span className="main__course-cost original-price">{COURSE_PRICE}</span>
        <img src={CURRENCY_ICN_URL} className="currency-logo" alt="currencyIcn" />
      </div>
    </div>
  );
};

export default CurrencyValue;
