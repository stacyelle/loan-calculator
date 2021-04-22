import { ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';
import { LoanRepaymentOptions } from '../types.d';
import { formatAmount } from '../helpers/calculations';

export default function LoanMonthlyPayment({
  interestOnlyPayment, 
  lastPayment,
  loanRepayment, 
  loanTerm, 
  monthlyPayment, 
  loanAmount,
}: {
  interestOnlyPayment: number, 
  lastPayment: number,
  loanRepayment: string,
  loanTerm: number,
  monthlyPayment: number,
  loanAmount: number | null,
}): ReactElement {
  return (
    <>
      <Typography variant='body2'>
        Monthly Payment ({loanTerm} Months)
      </Typography>
      {  loanAmount &&
      (
        <>
          <Typography style={{fontWeight: 700}} variant='h4'>
            {loanRepayment === LoanRepaymentOptions.InterestOnly ? `$${formatAmount(interestOnlyPayment)}` : `$${formatAmount(monthlyPayment)}`}
          </Typography>
          <Typography style={{fontWeight: 600}} variant='body1'>
            {loanRepayment === LoanRepaymentOptions.InterestOnly ? `Last Payment: $${formatAmount(lastPayment)}` : ''}
          </Typography>
        </>
      )
      }
    </>
  );
}
