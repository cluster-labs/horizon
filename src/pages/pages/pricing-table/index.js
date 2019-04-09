import React from 'react'
import { Helmet } from 'react-helmet'
import PricingItem from 'components/CleanUIComponents/PricingItem'
import styles from './style.module.scss'

class PricingTable extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Pricing Table" />
        <div className="mb-5">
          <div className={styles.pricingTable}>
            <PricingItem type="success" extended />
            <PricingItem />
            <PricingItem />
            <PricingItem type="default" />
          </div>
          <div className={styles.pricingTable}>
            <PricingItem type="warning" />
            <PricingItem />
            <PricingItem extended />
            <PricingItem />
          </div>
        </div>
      </div>
    )
  }
}

export default PricingTable
