import React from 'react'
import { Tabs, Input, Menu, Dropdown, Button, Icon } from 'antd'
import { Helmet } from 'react-helmet'
import Avatar from 'components/CleanUIComponents/Avatar'
import styles from './style.module.scss'
import data from './data.json'

const { TabPane } = Tabs
const { Search } = Input

const actionsMenu = (
  <Menu>
    <Menu.Item key="1">
      <Icon style={{ marginRight: 3 }} type="sound" />
      Mute
    </Menu.Item>
    <Menu.Item key="2">
      <Icon style={{ marginRight: 3 }} type="delete" />
      Delete chat
    </Menu.Item>
    <Menu.Item key="3">
      <Icon style={{ marginRight: 3 }} type="setting" />
      Settings
    </Menu.Item>
  </Menu>
)

const chatTab = chat => {
  const { chatMessages } = chat
  const tabName = chat.companionName
  const lastMessage = chatMessages[chatMessages.length - 1].content.replace(/<\/*\w*>/g, '')
  const tabImg = chat.companionImg
  return (
    <div className={styles.tab}>
      <div className={styles.tabAvatar}>
        <Avatar src={tabImg} size="50" border="true" borderColor="#fff" />
      </div>
      <div className={styles.tabContent}>
        <small className={styles.tabTime}>8:34PM</small>
        <div className={styles.tabName}>{tabName}</div>
        <div className={styles.tabText} dangerouslySetInnerHTML={{ __html: lastMessage }} />
      </div>
    </div>
  )
}

const Message = message => {
  const { content } = message.message
  const { chatOwner } = message
  const messageOwner = message.message.username
  const messageImg = message.message.img

  return (
    <div
      className={`clearfix ${styles.item} ${
        chatOwner === messageOwner ? styles.itemLeft : styles.itemRight
      }`}
    >
      <div className={styles.itemAvatar}>
        <Avatar src={messageImg} size="50" border="false" />
      </div>
      <div className={styles.itemContent}>
        <strong>{messageOwner}</strong>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

class MessagingChat extends React.Component {
  state = {
    chatOwner: '',
    chatsData: [],
    activeChatKey: data.chats[0].companionName,
  }

  componentWillMount() {
    this.setState({
      chatOwner: data.chatsOwner,
      chatsData: data.chats,
    })
  }

  changeChat = chatKey => {
    this.setState({
      activeChatKey: chatKey,
    })
  }

  render() {
    const { chatOwner, chatsData, activeChatKey } = this.state
    const selectedChatData = chatsData.find(item =>
      item.companionName === activeChatKey ? item : [],
    )
    const messagesData = selectedChatData.chatMessages
    return (
      <div>
        <Helmet title="Messaging App" />
        <div className={`card ${styles.messaging}`}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
              <Search placeholder="input search text" style={{ width: '100%' }} />
            </div>
            <div className={styles.tabs}>
              <Tabs
                defaultActiveKey={chatsData[0].companionName}
                tabPosition="left"
                onChange={this.changeChat}
              >
                {chatsData.map(chat => (
                  <TabPane tab={chatTab(chat)} key={chat.companionName} />
                ))}
              </Tabs>
            </div>
          </div>
          <div className={styles.content}>
            <div className="card-header clearfix">
              <h4 className="mt-1 mb-1 text-black d-inline-block">
                <strong>{selectedChatData.companionName}</strong>
              </h4>
              <div className="pull-right">
                <Dropdown overlay={actionsMenu}>
                  <Button style={{ marginLeft: 4 }}>
                    Actions <Icon type="setting" />
                  </Button>
                </Dropdown>
              </div>
            </div>
            <div className={styles.contentWrapper}>
              <div className={`${styles.chat} height-700`}>
                {messagesData.map(message => (
                  <Message message={message} key={Math.random()} chatOwner={chatOwner} />
                ))}
              </div>
              <form className="form-group mt-4 mb-3">
                <textarea
                  className="form-control adjustable-textarea"
                  placeholder="Type message..."
                />
                <div className="mt-3">
                  <button type="submit" className="btn btn-primary width-200">
                    <i className="fa fa-send mr-2" />
                    Send
                  </button>
                  <button className="btn btn-link" type="button">
                    Attach File
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MessagingChat
