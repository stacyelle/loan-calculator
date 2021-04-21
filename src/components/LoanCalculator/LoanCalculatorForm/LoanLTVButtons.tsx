import { ReactElement, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import FormLabel from './FormLabel';

const LTVPercentageOptions = [30, 40, 50, 60, 70];

const StyledButton = withStyles({
  root: {
    border: '#FFFFFF 1px solid',
    borderRadius: '2px',
    color: '#FFFFFF',
    fontSize: '10px',
    fontWeight: 700,
    marginRight: '8px',
    minWidth: '10px',
    width: '40px',
  },
})(Button);

// TODO: leave function comments
export default function LoanLTVButtons({ updateFormValues }: { updateFormValues: any }): ReactElement {
  const [ selectedPercentage, setSelectedPercentage ] = useState<number>(60);

  const handleClick = (percentage: number): void => {
    setSelectedPercentage(percentage);
    updateFormValues('loanLTV', percentage);
  }

  return (
    <>
      <FormLabel labelText={'Loan-to-Value (LTV)'} htmlFor={'loan-ltv'} />
      <Grid container item>
        {
          LTVPercentageOptions.map((percentage) => (
            <Grid item>
              <StyledButton
                onClick={() => handleClick(percentage)}
                style={{ 
                  backgroundColor: (selectedPercentage === percentage ? '#00ffc3' : undefined),
                  color: (selectedPercentage === percentage ? '#28283d' : '#FFFFFF'),
                }}
              >
                {percentage}%
              </StyledButton>
            </Grid>
          ))
        }
      </Grid>
    </>
  );
}
