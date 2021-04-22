import { CryptoConversionRates, Cryptocurrencies } from "../types.d";

const cryptocurrenciesToConvert: Cryptocurrencies[] = [
  Cryptocurrencies.BTC,
  Cryptocurrencies.ETH,
  Cryptocurrencies.DASH,
  Cryptocurrencies.DOGE,
  Cryptocurrencies.LTC,
  Cryptocurrencies.SALT,
];

const fetchCryptoConversionRates = async (): Promise<CryptoConversionRates> => {
  const response = await fetch(
      `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${cryptocurrenciesToConvert.join(',')}&tsyms=USD&api_key={${process.env.REACT_APP_CRYPTO_COMPARE_API_KEY}}`
  );
  const data = await response.json();
  
  return data;
};

export default fetchCryptoConversionRates;
