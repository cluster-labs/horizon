import React from 'react'
import { Tooltip } from 'antd'
import { Helmet } from 'react-helmet'

import data from './data.json'

class LinearIcons extends React.Component {
  state = {
    iconsData: [],
  }

  componentWillMount() {
    this.setState({
      iconsData: data.iconsData,
    })
  }

  render() {
    const { iconsData } = this.state

    return (
      <div>
        <Helmet title="Linear Icons" />
        <section className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>Linear Icons Free</strong>
              <a
                href="https://linearicons.com/free"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary ml-4"
              >
                Official Documentation <i className="icmn-link ml-1" />
              </a>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-xl-6 offset-xl-3">
                <ul className="utils__iconsBlock list-unstyled">
                  {iconsData.map(icon => (
                    <Tooltip title={`lnr ${icon}`} key={icon}>
                      <li>
                        <i className={`lnr ${icon}`} />
                      </li>
                    </Tooltip>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default LinearIcons
