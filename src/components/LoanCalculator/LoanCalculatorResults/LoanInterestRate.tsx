import { ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';

export default function LoanInterestRate({
  interestRate,
  loanAmount,
}: {
  interestRate: number,
  loanAmount: number | null,
}): ReactElement {
  return (
    <>
      <Typography style={{fontWeight: 600}} variant='caption'>
        Interest Rate (APR)
      </Typography>
      {
        loanAmount && (
          <Typography style={{fontWeight: 700}} variant='h6'>
            {interestRate}.00%
          </Typography>
        )
      }
    </>
  );
}
