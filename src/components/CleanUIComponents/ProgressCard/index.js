import React from 'react'
import { Progress } from 'antd'

import styles from './style.module.scss'

class ProgressCard extends React.Component {
  render() {
    const { title, note, currentValue, percent, dataColor } = this.props

    return (
      <div className="card">
        <div className="card-body">
          <div className={styles.head}>
            <div className={styles.name}>
              {title && <h2 className={styles.title}>{title}</h2>}
              {note && <p className={styles.note}>{note}</p>}
            </div>
            {currentValue && (
              <div className={`${styles.value} text-primary`}>
                <span style={{ color: dataColor }}>{currentValue}</span>
              </div>
            )}
          </div>
          <div className="progressCard__line">
            <Progress
              type="line"
              percent={+percent}
              showInfo={false}
              strokeWidth={8}
              strokeColor={dataColor}
            />
          </div>
          {percent && (
            <div className={styles.lineDescr}>
              <span>Change</span>
              <span>{`${percent}%`}</span>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ProgressCard
