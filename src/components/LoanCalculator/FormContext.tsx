import { createContext } from 'react';

export type FormValues = {
  loanAmount: number | null;
  loanTerm: number | null;
  loanLTV: number | null;
  loanRepayment: string | null;
};

export type FormContextType = {
  formValues: FormValues;
  setFormValues: any;
}

export const FormDefaults: FormValues = {
  loanAmount: null,
  loanTerm: 12,
  loanLTV: 60, 
  loanRepayment: 'Interest Only',
};

export default createContext<FormContextType>({
  formValues: FormDefaults,
  setFormValues: () => {}
});
