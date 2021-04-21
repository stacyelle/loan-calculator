import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import FormContext from './FormContext';
import LoanCalculatorHeader from './LoanCalculatorHeader';

type FormValues = {
  loanAmount: number | null;
  loanTerms: number | null;
  loanLTV: number | null;
  loanRepayment: string | null;
};

const LoanCalculatorDefaults: FormValues = {
  loanAmount: null,
  loanTerms: 12,
  loanLTV: 60, 
  loanRepayment: 'Interest Only',
};

export default function LoanCalculator() {
  const [formValues, setFormValues] = useState<FormValues>(LoanCalculatorDefaults);

  return (
    <FormContext.Provider
      value={{ formValues, setFormValues }}
    >
      <Container maxWidth='md'>
        <LoanCalculatorHeader />
        <Grid container style={{border: '1px solid white', margin: '5vh auto'}}>
          <Grid style={{padding: '3vw'}} item xs={12} sm={6}>

          </Grid>
          <Grid item xs={12} sm={6}>

          </Grid>
        </Grid>
      </Container>
    </FormContext.Provider>
  );
}
