import React from 'react'
import { chats } from './data.json'
import Avatar from '../Avatar'

import style from './style.module.scss'

const Message = ({ chat, user }) => (
  <div className={`${style.message} ${user === chat.username ? style.me : style.companion}`}>
    <div>
      <Avatar src={chat.img} size="50" border="false" />
    </div>
    <div className={style.messageContent}>
      <strong>{chat.username}</strong>
      <p>{chat.content}</p>
    </div>
  </div>
)

class Chat extends React.Component {
  state = {
    username: 'Chris Evans',
  }

  render() {
    const { username } = this.state
    return (
      <div className={style.chat}>
        <div className={style.messaging} style={{ height: 287 }}>
          <div>
            {chats.map(chat => (
              <Message chat={chat} user={username} key={Math.random()} />
            ))}
          </div>
        </div>
        <form className="form-group mt-4 mb-0">
          <textarea className="form-control adjustable-textarea" placeholder="Type message..." />
          <div className="mt-3">
            <button type="submit" className="btn btn-primary width-200">
              <i className="fa fa-send mr-2" />
              Send
            </button>
            <button type="button" className="btn btn-link">
              Attach File
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Chat
