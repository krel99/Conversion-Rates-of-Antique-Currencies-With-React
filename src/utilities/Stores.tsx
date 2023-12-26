import { create } from "zustand";

const styleUpdate = "color: orange; font-weight: bold; line-height: 1.5;line-height: 2;";
const styleUpdateMessage = "line-height: 2;";
const styleUpdateVariable = "font-size: 16px;";

interface CurrencyInfo {
  country: string;
  year: string;
  rateToUSD: number;
}

interface CurrencyRate {
  rates: { [key: string]: CurrencyInfo };
}

interface Currency {
  currency: string;
  setCurrency: (amount: string) => void;
}

interface AmountStore {
  amount: number;
  setAmount: (amount: number) => void;
}

const useCurrencyRateToUSD = create<CurrencyRate>(() => ({
  rates: {
    Latinum: {
      country: "Ferengi Alliance",
      year: "2370",
      rateToUSD: 2300,
    },
    Septim: {
      country: "Tamriel",
      year: "3E 433",
      rateToUSD: 0.7,
    },
    Denarius: {
      country: "Roman Republic",
      year: "211 BC",
      rateToUSD: 20,
    },
    Sestertius: {
      country: "Roman Republic",
      year: "1st Century BC",
      rateToUSD: 5,
    },
    Aureus: {
      country: "Roman Empire",
      year: "1st Century AD",
      rateToUSD: 200,
    },
    Drachma: {
      country: "Ancient Greece",
      year: "5th Century BC",
      rateToUSD: 15,
    },
    Tetradrachm: {
      country: "Athens, Ancient Greece",
      year: "5th Century BC",
      rateToUSD: 60,
    },
    Stater: {
      country: "Various Greek City-States",
      year: "6th Century BC",
      rateToUSD: 100,
    },
    Shekel: {
      country: "Ancient Israel",
      year: "First Temple Period",
      rateToUSD: 50,
    },
    Talent: {
      country: "Ancient Greece",
      year: "5th Century BC",
      rateToUSD: 1000,
    },
    BanLiang: {
      country: "China, Qin Dynasty",
      year: "3rd Century BC",
      rateToUSD: 10,
    },
    SpadeMoney: {
      country: "China, Zhou Dynasty",
      year: "7th Century BC",
      rateToUSD: 20,
    },
    CowryShells: {
      country: "Various Regions",
      year: "Various",
      rateToUSD: 1,
    },
    LivresTournois: {
      country: "Kingdom of France",
      year: "1360",
      rateToUSD: 0.7,
    },
    Thaler: {
      country: "Holy Roman Empire",
      year: "15th century",
      rateToUSD: 1.1,
    },
    Tolar: {
      country: "British Colonies",
      year: "17th century",
      rateToUSD: 1,
    },
    Daric: {
      country: "Persian Empire",
      year: "5th Century BC",
      rateToUSD: 150,
    },
    Satamana: {
      country: "Ancient India",
      year: "6th Century BC",
      rateToUSD: 40,
    },
    AesGrave: {
      country: "Roman Republic",
      year: "3rd Century BC",
      rateToUSD: 30,
    },
    Deb: {
      country: "Aksumite Empire, Ethiopia",
      year: "3rd Century AD",
      rateToUSD: 100,
    },
    USD: {
      country: "Wild West",
      year: "21st Century",
      rateToUSD: 1,
    },
  },
}));

const useBaseCurrency = create<Currency>((set) => ({
  currency: "Tolar",
  setCurrency: (currency) => {
    set({ currency });
    console.log(`%c[Update]%c Base currency changed to: %c${currency}`, styleUpdate, styleUpdateMessage, styleUpdateVariable);
  },
}));

const useConversionCurrency = create<Currency>((set) => ({
  currency: "USD",
  setCurrency: (currency) => {
    set({ currency });
    console.log(`%c[Update]%c Output currency changed to: %c${currency}`, styleUpdate, styleUpdateMessage, styleUpdateVariable);
  },
}));

const useAmount = create<AmountStore>((set) => ({
  amount: 0,
  setAmount: (amount) => {
    set({ amount });
    console.log(`%c[Update]%c Amount of currency to be converted: %c${amount}`, styleUpdate, styleUpdateMessage, styleUpdateVariable);
  },
}));

export { useCurrencyRateToUSD, useBaseCurrency, useConversionCurrency, useAmount };
