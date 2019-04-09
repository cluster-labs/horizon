import React from 'react'
import { Menu, Dropdown, Icon } from 'antd'
import { Helmet } from 'react-helmet'

const dropdownMenu = (
  <Menu>
    <Menu.Item>
      <a href="javascript:void(0)">Project Management</a>
    </Menu.Item>
    <Menu.Item>
      <a href="javascript:void(0)">User Inetrface Development</a>
    </Menu.Item>
    <Menu.Item>
      <a href="javascript:void(0)">Documentation</a>
    </Menu.Item>
    <Menu.Item>
      <a href="javascript:void(0)">Marketing</a>
    </Menu.Item>
    <Menu.Item>
      <a href="javascript:void(0)">
        <i className="dropdown-icon icmn-cog" /> Settings
      </a>
    </Menu.Item>
  </Menu>
)

class GridCard extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Card" />
        <section className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>Cards</strong>
              <a
                href="http://v4-alpha.getbootstrap.com/components/card/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary ml-4"
              >
                Official Documentation <i className="icmn-link ml-1" />
              </a>
            </div>
          </div>
          <div className="card-body">
            <span>Default Card Body</span>
          </div>
          <div className="card-footer">
            <span>Default Card Footer</span>
          </div>
        </section>
        <section className="card">
          <div className="card-header">
            <div className="pull-right mt-2">
              <span className="mr-3">
                User: <a href="javascript: void(0);">Administrator</a>
              </span>
              <div className="d-inline-block">
                <Dropdown overlay={dropdownMenu}>
                  <a href="javascript: void(0);">
                    <i className="icmn-database mr-2" />
                    <span className="hidden-lg-down mr-2">Dashboards</span>
                    <Icon type="down" />
                  </a>
                </Dropdown>
              </div>
            </div>
            <div className="utils__title">
              <strong>Default Card Heading w/ Controls</strong>
            </div>
          </div>
          <div className="card-body">
            <span>Default Card Body</span>
          </div>
          <div className="card-footer">
            <span>Default Card Footer</span>
          </div>
        </section>
        <section className="row">
          <div className="col-lg-4">
            <section className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Card in Grid</strong>
                </div>
              </div>
              <div className="card-body">
                <span>
                  Grid: <code>.col-lg-4</code>
                </span>
              </div>
              <div className="card-footer">
                <span>Default Card footer</span>
              </div>
            </section>
          </div>
          <div className="col-lg-8">
            <section className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Card in Grid</strong>
                </div>
              </div>
              <div className="card-body">
                <span>
                  Grid: <code>.col-lg-8</code>
                </span>
              </div>
              <div className="card-footer">
                <span>Default Card footer</span>
              </div>
            </section>
          </div>
        </section>
        <section className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>Nested Cards</strong>
            </div>
          </div>
          <div className="card-body">
            <section className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Nested Card Heading: Level 1</strong>
                </div>
              </div>
              <div className="card-body">
                <section className="card">
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Nested Card Heading: Level 2</strong>
                    </div>
                  </div>
                  <div className="card-body">
                    <span>Nested Card body: Level 2</span>
                  </div>
                  <div className="card-footer">
                    <span>Nested Card footer: Level 2</span>
                  </div>
                </section>
                <section className="card">
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Nested Card Heading: Level 2</strong>
                    </div>
                  </div>
                  <div className="card-body">
                    <span>Nested Card body: Level 2</span>
                  </div>
                  <div className="card-footer">
                    <span>Nested Card footer: Level 2</span>
                  </div>
                </section>
              </div>
              <div className="card-footer">
                <span>Nested Card footer: Level 1</span>
              </div>
            </section>
          </div>
          <div className="card-footer">
            <span>Nested Cards footer</span>
          </div>
        </section>
      </div>
    )
  }
}

export default GridCard
