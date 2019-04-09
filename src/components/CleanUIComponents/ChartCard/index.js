import React from 'react'
import Sparkline from '@rowno/sparkline'
import style from './style.module.scss'

class ChartCard extends React.Component {
  static defaultProps = {
    chartProps: {},
    title: '',
    amount: '',
  }

  render() {
    const { chartProps, title, amount } = this.props
    return (
      <div className={`card ${style.card}`}>
        {chartProps && (
          <div className={style.chart}>
            <Sparkline {...chartProps} />
          </div>
        )}
        {amount && <div className={style.amount}>{amount}</div>}
        {title && <div className={style.title}>{title}</div>}
      </div>
    )
  }
}

export default ChartCard
