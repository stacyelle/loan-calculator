import { ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';
import { formatAmount } from '../helpers/calculations';

export default function LoanAmount({
  loanAmount,
}: {
  loanAmount: number | null,
}): ReactElement {
  const isLoanAmountValid = loanAmount && loanAmount > 5000 && loanAmount < 25000000;

  return (
    <>
      <Typography style={{fontWeight: 600}} variant='caption'>
        Loan Amount
      </Typography>
      { isLoanAmountValid && (
        <Typography style={{fontWeight: 700}} variant='h6'>
          ${loanAmount ? formatAmount(loanAmount) : null}
        </Typography>
      )}
    </>
  );
}
