import React from 'react'
import { Button } from 'antd'
import styles from './style.module.scss'

const Footer = () => (
  <div className={styles.footer}>
  <div className={styles.inner}>
    <div className={styles.bottom}>
      <div className="row">
        <div className="col-sm-3">
          <a href="https://github.com/cluster-labs/horizon/issues/new" target="_blank">
            <h5>Report Bugs</h5>
          </a>
        </div>
        <div className="col-sm-3">
          <a href="mailto:vasa@towardsblockchain.com" target="_blank">
          <h5>Contact Us</h5>
          </a>
        </div>
        <div className="col-sm-3">
          <a href="http://clusterlabs.io" target="_blank">
          <h5>Made with <span className="lnr lnr-heart"></span> by Cluster Labs</h5>
          </a>
        </div>
        <div className="col-sm-3">
          <div className={styles.copyright}>
            <img
              src="https://i.pinimg.com/originals/04/a0/6c/04a06ccfc5edfc6edc92f2f73c548991.png"
              rel="noopener noreferrer"
              alt="Cluster Labs"
            />
            <span>
              <a href="http://clusterlabs.io" target="_blank" rel="noopener noreferrer">
                Copyright © {`${Date().split(' ')[3]} `}
                <br/>
                Cluster Labs
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)
{/* <div className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.bottom}>

\
        <h5>Made with <span class="lnr lnr-heart"></span> by Cluster Labs</h5>
      </div>
    </div>
  </div> */}

export default Footer
