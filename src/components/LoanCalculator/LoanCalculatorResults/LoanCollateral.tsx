import { ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';
import { CryptoConversionRates } from '../types.d';
import { formatAmount } from '../helpers/calculations';
import CryptoCollateral from './CryptoCollateral';

export default function LoanCollateral({
  conversionRates, 
  collateral,
}: {
  conversionRates: CryptoConversionRates | null, 
  collateral: number,
}): ReactElement {
  return (
    <>
      <Typography style={{fontWeight: 700}} variant='caption'>
        Collateral Needed
      </Typography>
      <Typography style={{fontWeight: 700}} variant='h5'>
        {collateral ? `$${formatAmount(collateral)} USD worth of:` : null}
      </Typography>
      <CryptoCollateral conversionRates={conversionRates} collateral={collateral} />
    </>
  );
}
