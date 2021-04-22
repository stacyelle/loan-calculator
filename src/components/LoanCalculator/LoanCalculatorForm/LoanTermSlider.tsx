import { ReactElement } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import FormLabel from './FormLabel';
import { getSliderMarks } from '../helpers/getSliderMarks';
import { LoanTermSliderStyle } from '../styles';

function valueLabelFormat(value: number) {
  return `${value} months`;
}

const formLabel = 'loanTerm';
const StyledSlider = withStyles(LoanTermSliderStyle)(Slider);

/**
 * 
 * @param updateFormValues This function updates the FormContextProvider
 * @returns LoanTermSlider ReactElement. Updates the FormContextProvider loanTerm value.
 */
export default function LoanTermSlider({ updateFormValues }: { updateFormValues: any }): ReactElement {
const handleChange = (event: any, newValue: number | number[]): void => updateFormValues(formLabel, newValue);

  return (
    <>
      <FormLabel labelText={'How long do you need to pay it back?'} htmlFor={formLabel} />
      <StyledSlider 
        defaultValue={12}
        marks={getSliderMarks}
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
