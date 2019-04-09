import React from 'react'
import styles from './style.module.scss'

class PaymentCard extends React.Component {
  state = {
    icon: '',
    name: '',
    number: '',
    type: '',
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
    const { icon, name, number, type, footer, sum } = this.state

    return (
      <a href="javascript: void(0);" className={`card card--withShadow ${styles.paymentCard}`}>
        {sum && <span className={styles.sum}>{sum}</span>}
        {icon && (
          <div className={styles.icon}>
            <i className={icon} />
          </div>
        )}
        {name && <span className={styles.name}>{name}</span>}
        {number && <span className={styles.number}>{number}</span>}
        {type && <span className={styles.type}>{type}</span>}
        {footer && <div className={styles.footer}>{footer}</div>}
      </a>
    )
  }
}

export default PaymentCard
