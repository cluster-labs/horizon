import React from 'react'
import { stats, commerceStats } from './data.json'
import styles from './style.module.scss'

class InfoCard extends React.Component {
  static defaultProps = {
    form: 'stats',
    icon: 'bullhorn',
    type: '',
    btnType: 'default',
  }

  render() {
    const { form, icon, btnType, type } = this.props
    const className = `${styles.infoCard} ${type.length > 0 ? styles[type] : ''}`
    return (
      <div>
        {form === 'stats' && (
          <div className={className}>
            {icon !== false && (
              <span className={styles.digit}>
                <i className={`icmn-${icon}`} />
              </span>
            )}
            <div className={styles.desc}>
              <span className={styles.title}>{stats.title}</span>
              <p>Total: {stats.count}</p>
            </div>
          </div>
        )}
        {form === 'stats-large' && (
          <div className={className}>
            <h5 className="text-uppercase mb-3 text-white">{commerceStats.title}</h5>
            <div className="clearfix" />
            <div>
              <span className="pull-right font-size-36">
                <strong>{commerceStats.count}</strong>
              </span>
              {icon !== false && <i className={`font-size-36 icmn-${icon}`} />}
            </div>
          </div>
        )}
        {form === 'interactive' && (
          <div className={`${className} px-3 py-5`}>
            {icon !== false && (
              <div className="text-center font-size-30">
                <i className={`icmn-${icon}`} />
              </div>
            )}
            <div className="mt-2 text-center">
              <div className="mb-2">
                <p>Lorem Ipsum is simply dummy text of printing the printing and typesetti...</p>
              </div>
              <a href="javascript: void(0);" className={`btn btn-outline-${btnType}`}>
                Information
              </a>
            </div>
          </div>
        )}
        {form === 'bordered' && (
          <div className={`${className} ${styles.bordered}`}>
            {icon !== false && (
              <span className={styles.digit}>
                <i className={`icmn-${icon}`} />
              </span>
            )}
            <div className={styles.desc}>
              <span className={styles.title}>{stats.title}</span>
              <p>{stats.descr}</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default InfoCard
