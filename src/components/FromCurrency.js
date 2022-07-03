import Options from "./Options";

const FromCurrency = ({ onAmountChange, amount, onFromCurrencyChange }) => {
  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
      />
      <Options onCurrencyChange={onFromCurrencyChange} value='USD'/>
    </div>
  );
};

export default FromCurrency;
