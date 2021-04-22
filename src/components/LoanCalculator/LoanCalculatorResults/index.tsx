import { ReactElement, useContext, useEffect, useState } from 'react'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormContext from '../FormContext';
import { FormContextType, CryptoConversionRates } from '../types.d';
import fetchCryptoConversionRates from '../hooks/fetchCryptoConversionRates';
import { getMonthlyPayment, getTotalLoanCost, getInterest, getCollateral, getInterestOnlyPayment, getLastPayment, getMonthlyInterestRate } from '../helpers/calculations';
import { LoanCalculatorResultsStyle } from '../styles';
import LoanMonthlyPayment from './LoanMonthlyPayment';
import LoanAmount from './LoanAmount';
import LoanInterestRate from './LoanInterestRate';
import LoanTotalCost from './LoanTotalCost';
import LoanInterest from './LoanInterest';
import LoanCollateral from './LoanCollateral';
import SALTCollateral from './SALTCollateral';

const InterestRatesForLTV: any = {
  30: 7,
  40: 8,
  50: 9,
  60: 10,
  70: 11,
};

export default function LoanCalculatorResults(): ReactElement {
  const { formValues: { loanAmount, loanTerm, loanLTV, loanRepayment } } = useContext<FormContextType>(FormContext);
  const [ conversionRates, setConversionRates ] = useState<CryptoConversionRates | null>(null);

  useEffect(() => {
    if (conversionRates) return;
    return () => {
      fetchCryptoConversionRates()
      .then((data) => setConversionRates(data))
      .catch((error) =>  console.error(error))
    }
  }, [loanAmount, conversionRates]);

  const interestRate: number = InterestRatesForLTV[loanLTV];
  const monthlyInterestRate: number = getMonthlyInterestRate(interestRate);
  let interest: number = 0;
  let monthlyPayment:number = 0;
  let totalLoanCost: number = 0;
  let collateral: number = 0;
  let interestOnlyPayment: number = 0;
  let lastPayment:number = 0;

  if (loanAmount) {
    monthlyPayment = getMonthlyPayment(loanAmount, loanTerm, monthlyInterestRate)
    totalLoanCost= getTotalLoanCost(monthlyPayment,loanTerm);
    interest = getInterest(totalLoanCost, loanAmount);
    collateral = getCollateral(loanAmount, loanLTV);
    interestOnlyPayment = getInterestOnlyPayment(monthlyInterestRate, loanAmount);
    lastPayment = getLastPayment(loanAmount, interestOnlyPayment, loanTerm);
  }

  return (
    <Box alignItems='center' display='flex' justifyContent='center' style={LoanCalculatorResultsStyle}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <LoanMonthlyPayment 
            interestOnlyPayment={interestOnlyPayment}
            loanAmount={loanAmount}
            lastPayment={lastPayment}
            loanRepayment={loanRepayment}
            loanTerm={loanTerm}
            monthlyPayment={monthlyPayment}
          />
        </Grid>

        <Grid item xs={6}>
          <LoanAmount loanAmount={loanAmount} />
        </Grid>

        <Grid item xs={6}>
          <LoanInterestRate interestRate={interestRate} loanAmount={loanAmount} />
        </Grid>

        <Grid item xs={6}>
          <LoanTotalCost loanTotalCost={totalLoanCost}  loanAmount={loanAmount} />
        </Grid>
  
        <Grid item xs={6}>
          <LoanInterest interest={interest} loanAmount={loanAmount} />
        </Grid>

        <Grid item xs={12}>
          <LoanCollateral conversionRates={conversionRates} collateral={collateral} />
        </Grid>

        <Grid item xs={12}>
          <SALTCollateral  conversionRates={conversionRates} collateral={collateral} />
        </Grid>
      </Grid>
    </Box>
  );
}
