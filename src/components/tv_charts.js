import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import React from 'react';
import { ResponsiveContainer } from 'recharts';


export default function TV_Chart(props) {

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <TradingViewWidget
            symbol= {props.symbol}
            theme={Themes.DARK}
            locale="fr"
            popup_height={1000}
            />
      </ResponsiveContainer>
    </React.Fragment>
  );
}
