import React from 'react'
import { Tabs, Button, Select, Radio, Icon, Menu, Dropdown } from 'antd'
import { Helmet } from 'react-helmet'
import styles from './style.module.scss'
import data from './data.json'

const { TabPane } = Tabs
const { Option } = Select

const downloadDropdown = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
)

class GitHubExplore extends React.Component {
  state = {
    projectData: data.projectData,
  }

  render() {
    const { projectData } = this.state

    return (
      <div>
        <Helmet title="GitHub Explore" />
        <section className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>GitHub Explore</strong>
            </div>
          </div>
          <div className="card-body">
            <div className={styles.explore}>
              <div className="mb-3">
                <Tabs type="card" defaultActiveKey="1">
                  <TabPane
                    tab={
                      <span>
                        <i className="mr-2 fa fa-home" />
                        Home
                      </span>
                    }
                    key="1"
                  />
                  <TabPane
                    tab={
                      <span>
                        <i className="mr-2 fa fa-comments" />
                        Discussion
                      </span>
                    }
                    key="2"
                  />
                  <TabPane
                    tab={
                      <span>
                        <i className="mr-2 fa fa-user" />
                        Profile
                      </span>
                    }
                    key="3"
                  />
                  <TabPane
                    tab={
                      <span>
                        <i className="mr-2 fa fa-envelope" />
                        Messages
                      </span>
                    }
                    key="4"
                  />
                  <TabPane
                    tab={
                      <span>
                        <i className="mr-2 fa fa-cog" />
                        Settings
                      </span>
                    }
                    key="5"
                  />
                </Tabs>
              </div>
              <div className={`${styles.descr} clearfix`}>
                <p className={styles.descrText}>{projectData.description}</p>
                <span className="pull-right">
                  <Button>Edit</Button>
                </span>
              </div>
              <div className={styles.overallData}>
                <ul className={styles.overallDataList}>
                  <li className={styles.overallDataItem}>
                    <a href="javascript: void(0);">
                      <i className="fa fa-check-circle-o mr-2" />
                      {`${projectData.commits} commits`}
                    </a>
                  </li>
                  <li className={styles.overallDataItem}>
                    <a href="javascript: void(0);">
                      <i className="fa fa-th-list mr-2" />
                      {`${projectData.branches} branch`}
                    </a>
                  </li>
                  <li className={styles.overallDataItem}>
                    <a href="javascript: void(0);">
                      <i className="fa fa-window-maximize mr-2" />
                      {`${projectData.releases} releases`}
                    </a>
                  </li>
                  <li className={styles.overallDataItem}>
                    <a href="javascript: void(0);">
                      <i className="fa fa-bell mr-2" />
                      {`${projectData.contributors} contributors`}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="clearfix">
                <div className={styles.sortLeft}>
                  <Select
                    className="mr-2 mb-2"
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a type"
                    optionFilterProp="children"
                    defaultActiveFirstOption
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="html">HTML</Option>
                    <Option value="css">CSS</Option>
                    <Option value="javascript">JavaScript</Option>
                  </Select>
                  <Button>New request</Button>
                </div>
                <div className={styles.sortRight}>
                  <div className={`${styles.sortOption} mr-2 mb-2`}>
                    <Radio.Group>
                      <Radio.Button value="create">Create new file</Radio.Button>
                      <Radio.Button value="upload">Upload files</Radio.Button>
                      <Radio.Button value="find">Find file</Radio.Button>
                    </Radio.Group>
                  </div>
                  <div className={`${styles.sortOption} mb-2`}>
                    <Dropdown overlay={downloadDropdown}>
                      <Button>
                        Download <Icon type="down" />
                      </Button>
                    </Dropdown>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className={`${styles.nav} table table-hover text-nowrap`}>
                  <tbody>
                    {projectData.explore.map(item => (
                      <tr key={item.name}>
                        <td className={styles.navIcon}>
                          {item.type === 'folder' && <i className="fa fa-folder" />}
                          {item.type === 'file' && <i className="fa fa-file-o" />}
                        </td>
                        <td>
                          <a href="javascript: void(0);" className="explore__nav-link">
                            {item.name}
                          </a>
                        </td>
                        <td>{item.info}</td>
                        <td className={styles.navTime}>{item.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default GitHubExplore
