import { useEffect, useState } from "react";
import FromCurrency from "./components/FromCurrency";
import ToCurrency from "./components/ToCurrency";
import "./App.css";
import CurrencyRates from "./components/CurrencyRates";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "453d45eaacmshd74c8b222849501p197e53jsnb36911bd5837",
    "X-RapidAPI-Host": "currency-converter-pro1.p.rapidapi.com",
  },
};

function App() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("IQD");
  const [amount, setAmount] = useState("100");
  const [result, setResult] = useState();

  useEffect(() => {
    fetch(
      `https://currency-converter-pro1.p.rapidapi.com/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`,
      options
    )
      .then((res) => res.json())
      .then((res) => setResult(res.result))
      .catch((err) => console.error(err));
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="container">
      <CurrencyRates />
      <div className="flex">
        <h2>Convert Currency</h2>
        <FromCurrency
          onAmountChange={setAmount}
          onFromCurrencyChange={setFromCurrency}
          amount={amount}
        />
        <div className="equal">=</div>
        <ToCurrency result={result} onToCurrencyChange={setToCurrency} toCurrency={toCurrency}/>
      </div>
    </div>
  );
}

export default App;
