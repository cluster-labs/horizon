import React from 'react'
import { Tabs, Input, Icon, Table, Button } from 'antd'
import { Helmet } from 'react-helmet'
import styles from './style.module.scss'
import data from './data.json'

const { TabPane } = Tabs
const { Search } = Input

const mailTab = category => (
  <div className={styles.tab}>
    <div className={styles.tabContent}>
      <div className="mb-1">
        <strong>
          {category.mailCount > 0 ? `${category.title} (${category.mailCount})` : category.title}
        </strong>
      </div>
      {category.mailCount > 0 && (
        <div>
          <small className={styles.tabTime}>8:34PM</small>
          <div className={styles.tabName}>Barak Obama</div>
          <div className={styles.tabText}>
            Hello! Where you are now? I want to talk. Hello! Where you are now? I want to talk
          </div>
        </div>
      )}
    </div>
  </div>
)

class MailList extends React.Component {
  state = {
    mailData: data.mailData,
    mailCategories: data.mailData.mailCategories,
    activeCategory: 'inbox',
    mails: data.mailData.inbox,
  }

  changeCategory = key => {
    const { mailData } = this.state
    const activeCategory = key
    const mails = mailData[activeCategory]

    this.setState({
      activeCategory,
      mails,
    })
  }

  render() {
    const { mailCategories, mails, activeCategory } = this.state

    const columns = [
      {
        title: '',
        dataIndex: 'favorites',
        key: 'favorites',
        render: text => (
          <i
            className={
              text === true ? 'icmn-star-full text-warning' : 'icmn-star-full text-default'
            }
          />
        ),
      },
      {
        title: 'From',
        dataIndex: 'from',
        key: 'from',
        render: text => <a href="javascript: void(0);">{text}</a>,
        sorter: (a, b) => a.from.length - b.from.length,
      },
      {
        title: 'Message',
        dataIndex: 'message',
        key: 'message',
        sorter: (a, b) => a.message.length - b.message.length,
      },
      {
        title: '',
        dataIndex: 'attachments',
        key: 'attachments',
        render: text => {
          if (text === true) {
            return <i className="icmn-attachment text-default" />
          }
          return ''
        },
      },
      {
        title: '',
        dataIndex: 'time',
        key: 'time',
      },
    ]

    return (
      <div>
        <Helmet title="Mail App" />
        <div className={`card ${styles.mail}`}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
              <Search placeholder="input search text" style={{ width: '100%' }} />
            </div>
            <div className={styles.tabs}>
              <Tabs
                defaultActiveKey={activeCategory}
                tabPosition="left"
                onChange={this.changeCategory}
              >
                {mailCategories.map(category => (
                  <TabPane tab={mailTab(category)} key={category.key} />
                ))}
              </Tabs>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.contentHeader}>
              <div className="card-header clearfix">
                <div className="pull-right">
                  <Button type="primary">Compose mail</Button>
                </div>
                <Tabs defaultActiveKey="1" tabPosition="top">
                  <TabPane
                    tab={
                      <span>
                        <Icon type="home" />
                        Primary
                      </span>
                    }
                    key="1"
                  />
                  <TabPane
                    tab={
                      <span>
                        <Icon type="message" />
                        Social
                      </span>
                    }
                    key="2"
                  />
                  <TabPane
                    tab={
                      <span>
                        <Icon type="tags" />
                        Promotion
                      </span>
                    }
                    key="3"
                  />
                </Tabs>
              </div>
            </div>
            <div className={styles.contentWrapper}>
              <Table
                className="utils__scrollTable"
                scroll={{ x: '100%' }}
                columns={columns}
                dataSource={mails}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MailList
