import React from 'react'
import { Carousel } from 'antd'
import styles from './style.module.scss'

class SliderCard extends React.Component {
  static defaultProps = {
    inverse: false,
  }

  render() {
    const { inverse } = this.props
    return (
      <div className={`${styles.card} ${inverse ? styles.inverse : ''}`}>
        <Carousel autoplay>
          <div className={styles.item}>
            <a href="javascript: void(0);" className={styles.body}>
              <div className={styles.icon}>
                <i className="icmn-accessibility" />
              </div>
              <h2>Sales Growth</h2>
              <p>View Report</p>
            </a>
          </div>
          <div className={styles.item}>
            <a href="javascript: void(0);" className={styles.body}>
              <div className={styles.icon}>
                <i className="icmn-download" />
              </div>
              <h2>All Reports</h2>
              <p>Pdf Download</p>
            </a>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default SliderCard
