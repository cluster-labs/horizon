import React from 'react'
import { Helmet } from 'react-helmet'
import { data } from './data.json'
import styles from './style.module.scss'

class Antd extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="AntDesign Components" />
        <section className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>AntDesign Components</strong>
              <a
                href="https://ant.design/docs/react/introduce"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary ml-4"
              >
                Official Documentation <i className="icmn-link ml-1" />
              </a>
            </div>
            <div className="utils__titleDescription">
              A design system with values of Nature and Determinacy for better user experience of
              enterprise applications
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              {data.map(category => (
                <div className="col-lg-12" key={category.name}>
                  <div className={styles.block}>
                    <div className={styles.label}>{category.name}</div>
                    <div className="row">
                      {category.items.map(item => (
                        <div className="col-md-6" key={item.name}>
                          <div className={styles.item}>
                            <h5 className={`text-black ${styles.itemTitle}`}>
                              <strong>{item.name}</strong>
                            </h5>
                            <div>
                              {item.description}{' '}
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="utils__link--blue utils__link--underlined"
                              >
                                Examples
                                <small>
                                  <i className="icmn-link ml-1" />
                                </small>
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Antd
