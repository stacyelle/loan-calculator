export enum Cryptocurrencies {
  BTC = 'BTC',
  ETH = 'ETH',
  DASH = 'DASH',
  DOGE = 'DOGE',
  LTC = 'LTC',
  SALT = 'SALT'
}

export type CryptoConversionRates = {
  BTC: USDRate;
  ETH: USDRate;
  DASH: USDRate;
  DOGE: USDRate;
  LTC: USDRate;
  SALT: USDRate;
}

export type FormContextType = {
  formValues: FormValues;
  setFormValues: any;
}

export type FormValues = {
  loanAmount: number | null;
  loanTerm: number;
  loanLTV: LoanLTVOptions;
  loanRepayment: LoanRepaymentOptions;
};

export enum LoanLTVOptions {
  Thirty = 30,
  Forty = 40,
  Fifty = 50,
  Sixty = 60,
  Seventy = 70,
}

export enum LoanRepaymentOptions {
  InterestOnly = 'Interest Only',
  PrincipalAndInterest = 'Principal & Interest',
}

export type SliderMarkObject = {
  value: number;
  label: string | null;
}

export type USDRate = {
  USD: number;
}
