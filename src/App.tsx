import React, { useState } from "react";
import ConversionDisplay from "./components/ConversionDisplay";
import CurrencyInput from "./components/CurrencyInput";
import CurrencySelector from "./components/CurrencySelector";
import ConversionRatesTable from "./components/ConversionRatesTable";
import "./App.css";
import { useAmount, useCurrencyRateToUSD, useBaseCurrency, useConversionCurrency } from "./utilities/Stores";

export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const currencyList = Object.keys(useCurrencyRateToUSD.getState().rates);

  const { setCurrency: setBaseCurrency } = useBaseCurrency();
  const { setCurrency: setConversionCurrency } = useConversionCurrency();

  const handleBaseCurrencyChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setBaseCurrency(event.target.value);
  };
  const handleConversionCurrencyChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setConversionCurrency(event.target.value);
  };

  // amount is updates in CurrencyInput.tsx, hence listening to changes like this
  const amount = useAmount((state) => state.amount);
  const baseCurrency = useBaseCurrency.getState().currency;
  const conversionCurrency = useConversionCurrency.getState().currency;
  const currencyRatesToUSD = useCurrencyRateToUSD.getState().rates;

  // ! This is being called twice on each update, tried useMemo and hooks but couldn't get it to stop
  const calculateConversion = () => {
    const baseCurrencyRateToUSD = currencyRatesToUSD[baseCurrency].rateToUSD;
    const conversionCurrencyRateToUSD = currencyRatesToUSD[conversionCurrency].rateToUSD;

    console.log(baseCurrencyRateToUSD);

    const conversionRate = baseCurrencyRateToUSD / conversionCurrencyRateToUSD;
    console.log(`Converting ${amount} ${baseCurrency} to ${conversionCurrency} at a rate of ${conversionRate}`);
    return amount * conversionRate;
  };

  return (
    <div className="app">
      <div className="converter">
        <h1 className="main-header"> Ancient Currency Converter </h1>
        <div className="display">
          <div className="column">
            <CurrencyInput />
            <CurrencySelector currencyList={currencyList} handleChange={handleBaseCurrencyChange} />
          </div>
          <div className="column">
            <ConversionDisplay calculatedConversion={calculateConversion()} />
            <CurrencySelector currencyList={currencyList} handleChange={handleConversionCurrencyChange} />
          </div>
        </div>
        <div className="footer">
          <i>Built using React, Typescript and Zustand stores just for fun - </i>
          <button onClick={toggleExpand}>{isExpanded ? "Hide Rates" : "Show Rates"}</button>
        </div>
      </div>
      {isExpanded && <ConversionRatesTable />}
    </div>
  );
}
