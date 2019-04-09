import React from 'react'
import { user } from './data.json'
import Avatar from '../Avatar'
import styles from './style.module.scss'

class ProfileHeadCard extends React.Component {
  render() {
    return (
      <div className={styles.card}>
        <div
          className={styles.head}
          style={{
            backgroundImage: `url('${user.cover}')`,
          }}
        >
          <h2 className="text-white">
            <strong>{user.mind}</strong>
          </h2>
        </div>
        <div>
          <div className={styles.left}>
            <Avatar src={user.avatar} size="90" borderColor="white" border />
            <strong className="d-block">{user.name}</strong>
            <span className="text-muted">{user.link}</span>
          </div>
          <div className={styles.right}>
            <p>{user.description}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ProfileHeadCard
