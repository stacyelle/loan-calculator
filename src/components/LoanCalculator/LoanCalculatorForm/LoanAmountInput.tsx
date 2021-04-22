import { ReactElement, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import FormLabel from './FormLabel';
import { LoanAmountInputStyle } from '../styles';

const formLabel = 'loanAmount';
const dollarSignAdornment: ReactElement = <InputAdornment position='start'><span style={{color: '#00ffc3'}}>$</span></InputAdornment>;

const StyledTextField = withStyles(LoanAmountInputStyle)(TextField);

/**
 * 
 * @param updateFormValues This function updates the FormContextProvider
 * @returns LoanAmountInput ReactElement with Validation. Updates the FormContextProvider loanAmount value.
 */
export default function LoanAmountInput({ updateFormValues }: { updateFormValues: any }): ReactElement {
  const [ error, setError ] = useState<boolean>(false);
  const [ errorMessage, setErrorMessage ] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // Validate Input
    if (parseInt(event.target.value, 10) < 5000) {
      setErrorMessage('Please enter an amount greater than 5,000')
      return setError(true);
    }

    if (parseInt(event.target.value, 10) > 25000000) {
      setErrorMessage('Please enter an amount less than 25,000,000')
      return setError(true);
    }

    // If input is valid, remove error if one exists
    setError(false);
    setErrorMessage(null);
    
    updateFormValues(formLabel, event.target.value);
  }

  return (
    <>
      <FormLabel labelText={'How much do you want to borrow?'} htmlFor={formLabel} />
      <StyledTextField 
        error={error}
        InputProps={{
          startAdornment: dollarSignAdornment,
          type: 'number'
        }}
        fullWidth
        onChange={handleChange}
        size='small'
        variant='outlined'
        helperText={errorMessage}
      />
    </>
  );
}
