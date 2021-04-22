import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { LoanCalculatorStyle } from './styles';
import FormContext, { FormDefaults } from './FormContext';
import { FormContextType, FormValues } from './types.d';
import LoanCalculatorHeader from './LoanCalculatorHeader';
import LoanCalculatorForm from './LoanCalculatorForm/index';
import LoanCalculatorResults from './LoanCalculatorResults/index';

export default function LoanCalculator() {
  const [formValues, setFormValues] = useState<FormValues>(FormDefaults);

  return (
    <FormContext.Provider
      value={{ formValues, setFormValues } as FormContextType}
    >
      <Container maxWidth='md'>
        <LoanCalculatorHeader />
        <Grid container style={LoanCalculatorStyle}>
          <Grid style={{padding: '3vw'}} item xs={12} sm={6}>
            <LoanCalculatorForm />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LoanCalculatorResults />
          </Grid>
        </Grid>
      </Container>
    </FormContext.Provider>
  );
}
