import { ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';
import { formatAmount } from '../helpers/calculations';

export default function LoanTotalCost({
  loanTotalCost,
  loanAmount
}: {
  loanTotalCost: number,
  loanAmount: number | null,
}): ReactElement {
  return (
    <>
      <Typography style={{fontWeight: 600}} variant='caption'>
        Total Loan Cost
      </Typography>
      {
        loanAmount && (
          <Typography style={{fontWeight: 700}} variant='h6'>
            ${formatAmount(loanTotalCost)}
          </Typography>
        )
      }
    </>
  );
}
