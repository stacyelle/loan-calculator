import { useContext, ReactElement } from 'react'
import Grid from '@material-ui/core/Grid';
import FormContext from '../FormContext';
import { FormContextType, FormValues } from '../types.d';
import LoanAmountInput from './LoanAmountInput';
import LoanTermSlider from './LoanTermSlider';
import LoanLTVRadio from './LoanLTVRadio';
import LoanRepayment from './LoanRepayment';

export default function LoanCalculatorForm(): ReactElement {
  const { setFormValues } = useContext<FormContextType>(FormContext);

  const updateFormValues = (valueName: string, value: any): void => 
    setFormValues((prevValues: FormValues) => ({...prevValues, [valueName]: value }));

  return (
      <Grid container spacing={3} alignItems='center'style={{width: '90%', margin: 'auto'}} >
        <Grid item>
          <LoanAmountInput updateFormValues={updateFormValues} />
        </Grid>
        <Grid item>
          <LoanTermSlider updateFormValues={updateFormValues} />
        </Grid>
        <Grid item container >
          <LoanLTVRadio updateFormValues={updateFormValues} />
        </Grid>
        <Grid item>
          <LoanRepayment updateFormValues={updateFormValues} />
        </Grid>
      </Grid>
  );
}
