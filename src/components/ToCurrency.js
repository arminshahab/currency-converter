import Options from "./Options";
import iran from "../assets/iran.png";
import iraq from "../assets/iraq.png";
import british from "../assets/united-kingdom.png";
import turkey from "../assets/turkey.png";
import euro from "../assets/european-union.png";
import usa from "../assets/united-states.png";

const images = {
  IRR: iran,
  IQD: iraq,
  EUR: euro,
  TRY: turkey,
  USD: usa,
  GBP: british,
};

const ToCurrency = ({ result, onToCurrencyChange, toCurrency }) => {
  return (
    <div>
      <span className="to-currency">
        <img src={images[toCurrency]} />
        <Options onCurrencyChange={onToCurrencyChange} value="IQD" />
      </span>
      <p className="result"> {result && Math.round(result).toLocaleString("en-us")}</p>
    </div>
  );
};

export default ToCurrency;
