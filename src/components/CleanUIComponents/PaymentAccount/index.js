import React from 'react'
import styles from './style.module.scss'

class PaymentAccount extends React.Component {
  state = {
    icon: '',
    number: '',
    sum: '',
    footer: '',
  }

  componentWillMount() {
    this.getParams()
  }

  getParams = () => {
    const params = this.props
    this.setState({
      ...params,
    })
  }

  render() {
    const { icon, number, footer, sum } = this.state

    return (
      <a href="javascript: void(0)" className={`card card--withShadow ${styles.account}`}>
        {icon && (
          <div className={styles.icon}>
            <i className={icon} />
          </div>
        )}
        {number && <span className={styles.number}>{number}</span>}
        {sum && <span className={styles.sum}>{sum}</span>}
        {footer && <div className={styles.footer}>{footer}</div>}
      </a>
    )
  }
}

export default PaymentAccount
