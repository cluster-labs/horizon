import React from 'react'
import item from './data.json'
import styles from './style.module.scss'

class PricingItem extends React.Component {
  static defaultProps = {
    data: item.item,
    type: '',
    extended: false,
  }

  render() {
    const { data, extended, type } = this.props

    return (
      <div
        className={`${styles.item}  ${extended ? styles.extended : ''} ${type ? styles[type] : ''}`}
      >
        <div className={styles.header}>
          <div className={styles.price}>
            <span className={styles.currency}>{data.currency}</span>
            <span className={styles.amount}>{data.amount}</span>
            <span className={styles.period}>{data.period}</span>
          </div>
          <div className={styles.title}>{data.title}</div>
        </div>
        <ul className={styles.features}>
          {data.features.map(feature => (
            <li key={feature.id}>
              <strong>{feature.main}</strong> {feature.descr}
            </li>
          ))}
        </ul>
        <div className={styles.footer}>
          <a href="javascript: void(0);" className="btn" role="button">
            <i className="icmn-download mr-3" aria-hidden="true" />
            {data.btnText}
          </a>
        </div>
      </div>
    )
  }
}

export default PricingItem
