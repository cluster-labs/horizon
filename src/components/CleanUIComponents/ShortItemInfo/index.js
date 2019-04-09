import React from 'react'
import styles from './style.module.scss'

class ShortItemInfo extends React.Component {
  render() {
    const { actionData, name, note, img, size } = this.props

    return (
      <div className={`${styles.item} ${size === 'large' ? styles.large : ''}`}>
        {img && (
          <div className={styles.img}>
            <img src={img} alt="alt" />
          </div>
        )}
        <div className={styles.description}>
          {name && <h2 className={styles.name}>{name}</h2>}
          {note && <p className={styles.note}>{note}</p>}
        </div>
        {actionData && <div className={styles.actionData}>{actionData}</div>}
      </div>
    )
  }
}

export default ShortItemInfo
