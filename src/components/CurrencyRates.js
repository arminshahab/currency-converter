import React, { useEffect, useState } from "react";
import iran from "../assets/iran.png";
import iraq from "../assets/iraq.png";
import british from "../assets/united-kingdom.png";
import turkey from "../assets/turkey.png";
import euro from '../assets/european-union.png'

const date = new Date().toLocaleDateString("uk");
const time = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
});

const CurrencyRates = () => {
  const [currencies, setCurrencies] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "453d45eaacmshd74c8b222849501p197e53jsnb36911bd5837",
        "X-RapidAPI-Host": "currency-converter-pro1.p.rapidapi.com",
      },
    };

    fetch(
      "https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=USD",
      options
    )
      .then((response) => response.json())
      .then((response) => setCurrencies(response.result))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <h2>Currency Rates</h2>
      <p className="today">today: {date + " - " + time}</p>

      <div className="currency-rate">
        <span> 100$ = {currencies && formatNumber(currencies["IQD"])}</span>
        <img src={iraq} />
        <span> iraqi dinar</span>
      </div>
      <div className="currency-rate">
        <span> 100$ = {currencies && formatNumber(currencies["IRR"])}</span>
        <img src={iran} />
        <span>irani lira</span>
      </div>
      <div className="currency-rate">
        <span>100$ = {currencies && formatNumber(currencies["TRY"])}</span>
        <img src={turkey} />
        <span> turkish lira</span>
      </div>
      <div className="currency-rate">
        <span> 100$ = {currencies && formatNumber(currencies["GBP"])}</span>
        <img src={british} />
        <span> british pound</span>
      </div>
      <div className="currency-rate">
        <span> 100$ = {currencies && formatNumber(currencies["EUR"])}</span>
        <img src={euro} />
        <span> euro</span>
      </div>
    </>
  );
};

const formatNumber = (number) =>
  Math.round(number * 100).toLocaleString("en-us") + " ";

export default CurrencyRates;
