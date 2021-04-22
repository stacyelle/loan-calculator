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

export const LoanLTVRadioStyle: StyleRules = {
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
};

export const LoanRepaymentStyle: StyleRules = {
  root: {
    border: '#FFFFFF 1px solid',
    borderRadius: '2px',
    color: '#FFFFFF',
    fontSize: '10px',
    fontWeight: 700,
  },
  label: {
    padding: '3px 5px',
    textTransform: 'capitalize',
    width: '100%'
  },
};

export const LoanTermSliderStyle: StyleRules = {
  root: {
    color: '#FFFFFF',
    height: 2,
    width: '100%'
  },
  thumb: {
    height: 12,
    width: 12,
    backgroundColor: '#00ffc3',
    marginTop: -5,
    marginLeft: -5,
  },
  active: {},
  valueLabel: {
    color: '#FFFFFF',
    fontSize: '12px',
    fontWeight: 700,
    top: 30,
    '& *': {
      background: 'transparent',
      color: '#FFFFFF',
    },
  },
  track: {
    height: 2,
    opacity: 0,
  },
  rail: {
    height: 2,
    opacity: 0,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    color: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markLabel : {
    color: '#FFFFFF',
  },
  markActive: {
    backgroundColor: '#FFFFFF',
  },
};

export const LoanCalculatorResultsStyle = { 
  backgroundColor: '#00ffc3', 
  color: '#28283d',
  height: '100%', 
  padding: '20px', 
};

export const LoanCalculatorStyle = {
  border: '1px solid white', 
  margin: '5vh auto'
};
