import { useAmount } from "../utilities/Stores";

export default function CurrencyInput() {
  const { setAmount } = useAmount();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(+event.target.value);
  };

  return (
    <div className="row">
      <label htmlFor="amount">Amount: </label>
      <input
        type="number"
        id="amount"
        name="amount"
        required
        minLength={2}
        maxLength={12}
        size={12}
        step="0.01"
        placeholder="0"
        onChange={handleChange}
      />
    </div>
  );
}
