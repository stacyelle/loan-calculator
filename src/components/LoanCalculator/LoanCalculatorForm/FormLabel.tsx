import InputLabel from '@material-ui/core/InputLabel';

export default function FormLabel({labelText, htmlFor}: {labelText: string, htmlFor: string}) {
  return (
    <InputLabel style={{color: '#FFFFFF', marginBottom: '10px'}}  shrink htmlFor={htmlFor}>
      {labelText}
    </InputLabel>
  );
}
