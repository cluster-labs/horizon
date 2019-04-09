import React from 'react'
import { Button } from 'antd'
import styles from './style.module.scss'

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.inner}>
      <div className="row">
        <div className="col-lg-9">
          <p>
            <strong>Clean UI React Admin Template - Best Solution for Your App!</strong>
          </p>
          <p>
            Clean UI – a modern professional admin template, based on Bootstrap 4 framework. Clean
            UI is a powerful and super flexible tool, which suits best for any kind of web
            application: Web Applications; CRM; CMS; Admin Panels; Dashboards; etc. Clean UI is
            fully responsive, which means that it looks perfect on mobiles and tablets.
          </p>
          <p>
            Clean UI is fully based on SASS pre-processor, includes 50+ commented SASS files. Each
            file corresponds to a single component, layout, page, plugin or extension – so you can
            easily find necessary piece of code and edit it for your needs. The package includes
            both normal and minified CSS files, compiled from SASS.
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="row">
          <div className="col-sm-6">
            <a
              href="https://themeforest.net/item/clean-ui-react-admin-template/21938700"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <Button type="danger">Buy Now 24$</Button>
            </a>
          </div>
          <div className="col-sm-6">
            <div className={styles.copyright}>
              <img
                src="resources/images/mediatec.png"
                rel="noopener noreferrer"
                alt="Mediatec Software"
              />
              <span>
                © 2019{' '}
                <a href="http://mediatec.org/" target="_blank" rel="noopener noreferrer">
                  Mediatec Software
                </a>
                <br />
                All rights reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
