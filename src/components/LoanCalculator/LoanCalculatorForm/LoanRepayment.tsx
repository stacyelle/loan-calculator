import { ReactElement, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import FormLabel from './FormLabel';

const RepaymentOptions = ['Interest Only', 'Principal & Interest'];
const formLabel = 'loanRepayment';

const StyledButton = withStyles({
  root: {
    border: '#FFFFFF 1px solid',
    borderRadius: '2px',
    color: '#FFFFFF',
    fontSize: '10px',
    fontWeight: 700,
  },
  label: {
    padding: '3px 5px',
    textTransform: 'capitalize',
    width: '100%'
  },
})(Button);

/**
 * 
 * @param updateFormValues This function updates the FormContextProvider
 * @returns LoanRepayment ReactElement. Updates the FormContextProvider loanRepayment value.
 */
export default function LoanRepayment({ updateFormValues }: { updateFormValues: any }): ReactElement {
  const [ selectedOption, setSelectedOption ] = useState<string>('Interest Only');

  const handleClick = (option: string): void => {
    setSelectedOption(option);
    updateFormValues(formLabel, option);
  }

  return (
    <>
      <FormLabel labelText={'Repayment Options'} htmlFor={formLabel} />
      <ButtonGroup color="primary" size='small'aria-label="outlined primary button group">
      {
        RepaymentOptions.map((option) => (
            <StyledButton
              key={option}
              onClick={() => handleClick(option)}
              color={'secondary'}
              style={{ 
                backgroundColor: (selectedOption === option ? '#00ffc3' : undefined),
                color: (selectedOption === option ? '#28283d' : '#FFFFFF'),
              }}
            >
              {option}
            </StyledButton>
        ))
      }
      </ButtonGroup>
    </>
  );
}
