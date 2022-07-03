const Options = ({ onCurrencyChange, value }) => {
  return (
    <select
      onChange={(e) => onCurrencyChange(e.target.value)}
      defaultValue={value}
    >
      <option value="EUR">EUR</option>
      <option value="IRR">IRR</option>
      <option value="IQD">IQD</option>
      <option value="USD">USD</option>
      <option value="TRY">TRY</option>
      <option value="GBP">GBP</option>
    </select>
  );
};

export default Options;
