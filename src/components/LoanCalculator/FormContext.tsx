import { createContext } from 'react';
import { FormValues, LoanLTVOptions, LoanRepaymentOptions, FormContextType } from './types.d';

export const FormDefaults: FormValues = {
  loanAmount: null,
  loanTerm: 12,
  loanLTV: LoanLTVOptions.Sixty, 
  loanRepayment: LoanRepaymentOptions.InterestOnly,
};

export default createContext<FormContextType>({
  formValues: FormDefaults,
  setFormValues: () => {}
});
