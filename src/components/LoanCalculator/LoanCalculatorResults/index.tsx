import { useContext, ReactElement } from 'react'
import { Box, Grid, Typography } from '@material-ui/core';
import FormContext, { FormContextType } from '../FormContext';

const InterestRatesForLTV: any = {
  30: 7,
  40: 8,
  50: 9,
  60: 10,
  70: 11,
}

export default function LoanCalculatorResults(): ReactElement {
  const { formValues: { loanAmount, loanTerm, loanLTV, loanRepayment } } = useContext<FormContextType>(FormContext);
  const interestRate: number = InterestRatesForLTV[loanLTV];

  return (
    <Box alignItems='center' display='flex' justifyContent='center' style={{ backgroundColor: '#00ffc3', height: '100%', padding: '20px', color: '#28283d'}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='body2'>
            Monthly Payment
          </Typography>
          <Typography style={{fontWeight: 700}} variant='h4'>
            ${loanAmount}
          </Typography>
          <Typography style={{fontWeight: 600}} variant='body1'>
            Last Payment: $10,100,100
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography style={{fontWeight: 600}} variant='caption'>
            Loan Amount
          </Typography>
          <Typography style={{fontWeight: 700}} variant='h6'>
          ${loanAmount}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography style={{fontWeight: 600}} variant='caption'>
            Interest Rate (APR)
          </Typography>
          <Typography style={{fontWeight: 700}} variant='h6'>
            {interestRate}.00%
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography style={{fontWeight: 600}} variant='caption'>
            Total Loan Cost
          </Typography>
          <Typography style={{fontWeight: 700}} variant='h6'>
            $11,200,000
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography style={{fontWeight: 600}} variant='caption'>
            Interest
          </Typography>
          <Typography style={{fontWeight: 700}} variant='h6'>
            $1,200,000
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography style={{fontWeight: 700}} variant='caption'>
            Collateral Needed
          </Typography>
          <Typography style={{fontWeight: 700}} variant='h5'>
            $16,666,667 USD worth of:
          </Typography>
        </Grid>
      </Grid>
      
    </Box>
  );
}
