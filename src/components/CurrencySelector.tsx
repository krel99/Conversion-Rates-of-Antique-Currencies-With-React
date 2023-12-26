type CurrencySelectorProps = {
  currencyList: string[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function CurrencySelector({ currencyList, handleChange }: CurrencySelectorProps) {
  return (
    <span className="input">
      <select onChange={handleChange}>
        {currencyList.map((currency: string) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </span>
  );
}
