import PropTypes from "prop-types";
const InputComponent = ({
  label,
  amount = 1,
  currency = "usd",
  handleAmount,
  handleCurrency,
  isInputDisable,
  options,
  isCurrencyDisabled,
  className
}) => {
  return (
    <div className={`bg-slate-200 rounded-md flex w-full ${className}`}>
      <div className="flex-grow ps-4 pt-1">
        <h1 className="text-slate-500 tracking-wider">{label}</h1>
        <input
          type="number"
          value={amount}
          onChange={(e) => handleAmount(e)}
          name="sourceAmount"
          disabled={isInputDisable}
          className="my-3 text-blue-700 outline-none bg-slate-200 font-semibold tracking-wide w-full"
        />
      </div>
      <div className="text-right pe-4 pt-1">
        <h1 className="text-slate-500 tracking-wider">Currency Type</h1>
        <select
          type="text"
          name="currency"
          placeholder="0"
          className="my-3 text-blue-700 outline-none bg-slate-300 font-semibold rounded-sm p-2"
          value={currency}
          onChange={(e) => handleCurrency(e.target.value)}
          disabled={isCurrencyDisabled}
        >
          {options &&
            options.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

InputComponent.defaultProps = {
  isInputDisable: false,
  isCurrencyDisabled: false
};
InputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  handleAmount: PropTypes.func.isRequired,
  handleCurrency: PropTypes.func.isRequired,
  isInputDisable: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
  isCurrencyDisabled: PropTypes.bool.isRequired,
  className: PropTypes.string,
};
export default InputComponent;

