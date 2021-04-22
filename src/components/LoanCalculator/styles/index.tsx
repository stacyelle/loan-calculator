import { CSSProperties, StyleRules } from "@material-ui/core/styles/withStyles";

export const LogoStyle: CSSProperties = { 
  position:'relative', 
  top: 4
};

export const LoanAmountInputStyle: StyleRules = {
  root: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '#FFFFFF 1px solid',
    borderRadius: '2px',
    '& input:valid:focus + fieldset': {
      border: '#FFFFFF 1px solid',
      borderRadius: '2px',
    },
    '& .MuiInputBase-root': {
      color: '#FFFFFF',
    },
    // This hides the stepper buttons from the text field
    '& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      display: 'none'
    },
  },
};
