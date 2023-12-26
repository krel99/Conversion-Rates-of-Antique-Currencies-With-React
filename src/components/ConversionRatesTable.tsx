import { useCurrencyRateToUSD } from "../utilities/Stores";

export default function ConversionRatesTable() {
  const { rates } = useCurrencyRateToUSD();

  return (
    <table>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Country</th>
          <th>Year of Rate</th>
          <th>Conversion Rate to USD</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(rates).map(([currency, rate]) => (
          <tr key={currency}>
            <td>{currency}</td>
            <td>{rate.country}</td>
            <td>{rate.year}</td>
            <td>{rate.rateToUSD}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
