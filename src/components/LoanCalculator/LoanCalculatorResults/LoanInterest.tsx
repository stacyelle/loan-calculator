import { ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';
import { formatAmount } from '../helpers/calculations';

export default function LoanInterest({
  interest,
  loanAmount,
}: {
  interest: number,
  loanAmount: number | null,
}): ReactElement {
  return (
    <>
      <Typography style={{fontWeight: 600}} variant='caption'>
        Interest
      </Typography>
      {
        loanAmount && (
          <Typography style={{fontWeight: 700}} variant='h6'>
            ${formatAmount(interest)}
          </Typography>
        )
      }
    </>
  );
}
