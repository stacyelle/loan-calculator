import { useContext, ReactElement } from 'react'
import Grid from '@material-ui/core/Grid';

import FormContext, { FormContextType, FormValues } from '../FormContext';
import LoanAmountInput from './LoanAmountInput';
import LoanTermSlider from './LoanTermSlider';
import LoanLTVButtons from './LoanLTVButtons';
import LoanRepayment from './LoanRepayment';

// TODO: styling, see here https://www.headway.io/blog/global-styling-with-material-ui-theme-overrides-and-props

export default function LoanCalculatorForm(): ReactElement {
  const { setFormValues } = useContext<FormContextType>(FormContext);

  const updateFormValues = (valueName: string, value: any): void => 
    setFormValues((prevValues: FormValues) => ({...prevValues, [valueName]: value }));

  return (
      <Grid container spacing={3} alignItems='center'style={{width: '90%', margin: 'auto'}} >
        <Grid item >
          <LoanAmountInput updateFormValues={updateFormValues} />
        </Grid>
        <Grid item >
          <LoanTermSlider updateFormValues={updateFormValues} />
        </Grid>
        <Grid item container >
          <LoanLTVButtons updateFormValues={updateFormValues} />
        </Grid>
        <Grid item >
          <LoanRepayment updateFormValues={updateFormValues} />
        </Grid>
      </Grid>
  );
}
