import React from 'react'
import { Tooltip } from 'antd'
import { Helmet } from 'react-helmet'

import data from './data.json'

class FontAwesomeIcons extends React.Component {
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
        <Helmet title="FontAwesome Icons" />
        <section className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>FontAwesome</strong>
              <a
                href="http://fontawesome.io/"
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
              <div className="col-lg-12">
                <h5 className="text-black">
                  <strong>The iconic font</strong>
                </h5>
                <p className="text-muted">
                  The complete set of 634 icons in Font Awesome 4.6.3
                  <br />
                  License: MIT License. You can use it for commercial projects, open source
                  projects, or really just about whatever you want
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 offset-xl-3">
                {iconsData.map(iconsSet => (
                  <div className="text-center" key={iconsSet.setName}>
                    <h3 className="text-block mt-5 mb-4">
                      <strong>{iconsSet.setName}</strong>
                    </h3>
                    <ul className="utils__iconsBlock list-unstyled">
                      {iconsSet.icons.map(icon => (
                        <Tooltip title={`fa ${icon}`} key={icon}>
                          <li>
                            <i className={`fa ${icon}`} />
                          </li>
                        </Tooltip>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default FontAwesomeIcons
