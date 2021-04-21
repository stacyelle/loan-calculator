import { ReactElement } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

import FormLabel from './FormLabel';
import { marks } from './marks';

function valueLabelFormat(value: number) {
  return `${value} months`;
}
// TODO: move styles
const StyledSlider = withStyles({
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
})(Slider);

export default function LoanTermSlider({ updateFormValues }: { updateFormValues: any }): ReactElement {
const handleChange = (event: any, newValue: number | number[]): void => updateFormValues('loanTerm', newValue);

  return (
    <>
      <FormLabel labelText={'How long do you need to pay it back?'} htmlFor={'loan-term-slider'} />
      <StyledSlider 
        id='loan-term-slider'
        defaultValue={12}
        marks={marks}
        max={36}
        min={3}
        onChangeCommitted={handleChange}
        step={1}
        valueLabelDisplay='auto'
        valueLabelFormat={valueLabelFormat}
      />
    </>
  );
}
