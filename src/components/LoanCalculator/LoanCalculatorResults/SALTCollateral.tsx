import { ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';
import { CryptoConversionRates } from '../types.d';
import { formatAmount } from '../helpers/calculations';
import {ReactComponent as SALTLogo} from '../logos/salt-logo.svg';
import { LogoStyle } from '../styles';

export default function SALTCollateral({
  conversionRates, 
  collateral,
}: {
  conversionRates: CryptoConversionRates | null, 
  collateral: number,
}): ReactElement {
  return (
    <>
      <Typography style={{fontWeight: 600}} variant='caption'>
        Stake SALT
      </Typography>
      <Typography style={{fontWeight: 700}} variant='h6'>
        {conversionRates && collateral ? formatAmount(collateral / conversionRates.SALT.USD) : null} <SALTLogo style={LogoStyle} /> 
      </Typography>
    </>
  );
}
