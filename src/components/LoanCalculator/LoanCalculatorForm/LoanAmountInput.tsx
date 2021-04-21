import { ReactElement } from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import FormLabel from './FormLabel';

const StyledTextField = withStyles({
  root: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '#FFFFFF 1px solid',
    borderRadius: '2px',
    '& input:valid:focus + fieldset': {
      border: '#FFFFFF 1px solid',
      borderRadius: '2px',
    },
    '& .MuiInputBase-root': {
      color: '#FFFFFF',
    },
  },
})(TextField);

export default function LoanAmountInput({ updateFormValues }: { updateFormValues: any }): ReactElement {
const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => updateFormValues('loanAmount', event.target.value);
// TODO: pull out adornment
  return (
    <>
      <FormLabel labelText={'How much do you want to borrow?'} htmlFor={'loan-amount-input'} />
      <StyledTextField 
        id='loan-amount-input'
        InputProps={{
          startAdornment: <InputAdornment position="start"><span style={{color: '#00ffc3'}}>$</span></InputAdornment>,
        }}
        fullWidth
        onChange={handleChange}
        size='small'
        variant='outlined'
      />
    </>
  );
}
