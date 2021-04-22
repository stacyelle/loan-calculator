import { ReactElement } from 'react';
import InputLabel from '@material-ui/core/InputLabel';

/**
 * 
 * @param labelText The text for the form Label
 * @param htmlFor The key for the form element this label is assigned to
 * @returns FormLabel ReactElement
 */
export default function FormLabel({labelText, htmlFor}: {labelText: string, htmlFor: string}): ReactElement {
  return (
    <InputLabel style={{color: '#FFFFFF', marginBottom: '10px'}}  shrink htmlFor={htmlFor}>
      {labelText}
    </InputLabel>
  );
}
