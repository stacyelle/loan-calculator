import { ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import { CryptoConversionRates, Cryptocurrencies } from '../types.d';
import { formatAmount } from '../helpers/calculations';
import { LogoStyle } from '../styles';

import {ReactComponent as BitcoinLogo} from '../logos/btc-logo.svg';
import {ReactComponent as EthereumLogo} from '../logos/eth-logo.svg';
import {ReactComponent as DogeCoinLogo} from '../logos/doge-logo.svg';
import {ReactComponent as LTCLogo} from '../logos/ltc-logo.svg';
import {ReactComponent as DashLogo} from '../logos/dash-logo.svg';


export default function CryptoCollateral({
  conversionRates, 
  collateral,
}: {
  conversionRates: CryptoConversionRates | null, 
  collateral: number,
}): ReactElement {
  const renderCollateralAmount = (
    crypto: Cryptocurrencies, 
    ): string | null => {
    return conversionRates && collateral ? formatAmount(collateral / conversionRates[crypto].USD) : null
  }

  return (
    <Grid item container>
      <Grid item xs={6}>
        <BitcoinLogo style={LogoStyle} /> {renderCollateralAmount(Cryptocurrencies.BTC)} BTC
      </Grid>
      <Grid item xs={6}>
        <LTCLogo style={LogoStyle} /> {renderCollateralAmount(Cryptocurrencies.LTC)} LTC
      </Grid>
      <Grid item xs={6}>
        <DashLogo style={LogoStyle} /> {renderCollateralAmount(Cryptocurrencies.DASH)} DASH
      </Grid>
      <Grid item xs={6}>
        <DogeCoinLogo style={LogoStyle} /> {renderCollateralAmount(Cryptocurrencies.DOGE)}  DOGE
      </Grid>
      <Grid item xs={6}>
        <EthereumLogo style={LogoStyle} /> {renderCollateralAmount(Cryptocurrencies.ETH)} ETH
      </Grid>
    </Grid>
  );
}
