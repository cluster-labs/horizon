import React from 'react'
import { Line } from 'peity-react'
import { FormattedMessage } from 'react-intl'
import style from './style.module.scss'

class BitcoinPrice extends React.Component {
  state = {
    chartsData: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2],
  }

  render() {
    const { chartsData } = this.state
    return (
      <div className={style.bitcoinPrice}>
        <FormattedMessage id="topBar.bitcoin" />:
        <span style={{ margin: '0 8px', position: 'relative', top: '3px' }}>
          <Line values={chartsData} />
        </span>
        +20%
      </div>
    )
  }
}

export default BitcoinPrice
