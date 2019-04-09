import React from 'react'
import { Tabs, Menu, Dropdown, Icon, Button } from 'antd'
import { Helmet } from 'react-helmet'
import { Editor } from 'react-draft-wysiwyg'
import Avatar from 'components/CleanUIComponents/Avatar'
import styles from './style.module.scss'
import data from './data.json'

const { TabPane } = Tabs

const postActions = (
  <Menu>
    <Menu.Item>
      <Icon type="edit" /> Edit Post
    </Menu.Item>
    <Menu.Item>
      <Icon type="delete" /> Delete Post
    </Menu.Item>
    <Menu.Item>
      <Icon type="frown-o" /> Mark as a Spam
    </Menu.Item>
  </Menu>
)

class GitHubDiscuss extends React.Component {
  state = {
    discuss: data.discuss,
  }

  render() {
    const { discuss } = this.state

    return (
      <div>
        <Helmet title="GitHub Discuss" />
        <section className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>GitHub Discussion</strong>
            </div>
          </div>
          <div className="card-body">
            <div className={styles.discuss}>
              <div className="mb-3">
                <Tabs type="card" defaultActiveKey="2">
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
              <div className={`${styles.header} clearfix`}>
                <div className={styles.title}>
                  <h1 className={styles.titleText}>{discuss.title}</h1>
                  <div className={styles.open}>
                    <Button type="primary" size="small">
                      New discussion
                    </Button>
                  </div>
                </div>
                <div>
                  {discuss.status === 'open' && (
                    <span className={`${styles.status} btn btn-success btn-sm`}>
                      <i className="fa fa-check-circle-o mr-2" />
                      Open
                    </span>
                  )}
                  {discuss.status === 'closed' && (
                    <span className={`${styles.status} btn btn-success btn-sm`}>
                      <i className="fa fa-times-circle mr-2" />
                      Closed
                    </span>
                  )}
                  <div className={styles.metaText}>
                    <a href="javascript: void(0);" className="mr-1">
                      {discuss.authorName}
                    </a>
                    opened this discussion on
                    <span className="ml-1">{discuss.date}</span> ·
                    <span className="ml-1">{`${discuss.commentsCount} comments`}</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-10">
                  <div>
                    {discuss.comments.map(comment => (
                      <div className={styles.commentItem} key={comment.authorName}>
                        <div className="mb-0 pb-0 clearfix">
                          <div className={styles.commentAvatar}>
                            <Avatar src={comment.avatar} size="50" />
                          </div>
                          <div className={styles.contentWrapper}>
                            <div className={styles.commentHead}>
                              <div className="pull-right">
                                <Dropdown overlay={postActions}>
                                  <a className="ant-dropdown-link" href="javascript: void(0);">
                                    Actions <Icon type="down" />
                                  </a>
                                </Dropdown>
                              </div>
                              <strong>{comment.authorName}</strong> posted:
                              <small className="text-muted ml-2">{comment.date}</small>
                            </div>
                            <div
                              className={styles.commentContent}
                              dangerouslySetInnerHTML={{ __html: comment.content }}
                            />
                            <div className={styles.commentBottom}>
                              <a href="javascript: void(0);" className="mr-2">
                                <i className="icmn-heart mr-1" />
                                {comment.likesCount > 0 && (
                                  <span>{`${comment.likesCount} Likes`}</span>
                                )}
                                {comment.likesCount === 0 && (
                                  <span>{`${comment.likesCount} Like`}</span>
                                )}
                              </a>
                              <a href="javascript: void(0);" className="mr-2">
                                <i className="icmn-reply mr-1" />
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {discuss.status === 'open' && (
                    <div className={`${styles.addComment} clearfix`}>
                      <div className={styles.commentAvatar}>
                        <Avatar size="50" src={discuss.authorImg} />
                      </div>
                      <div className={styles.contentWrapper}>
                        <div className={`${styles.commentHead} ${styles.emptyCommentHead} p-3`}>
                          <Editor />
                        </div>
                        <div className={styles.commentBottom}>
                          <Button type="primary">Comment</Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-lg-2">
                  <div>
                    <div className={styles.sidebarItem}>
                      <div className={styles.sidebarHead}>Assignees</div>
                      <div>No one assigned</div>
                    </div>
                    <div className={styles.sidebarItem}>
                      <div className={styles.sidebarHead}>Labels</div>
                      <div>None yet</div>
                    </div>
                    <div className={styles.sidebarItem}>
                      <div className={styles.sidebarHead}>Projects</div>
                      <div>None yet</div>
                    </div>
                    <div className={styles.sidebarItem}>
                      <div className={styles.sidebarHead}>Milenstone</div>
                      <div>No milestone</div>
                    </div>
                    <div className={styles.sidebarItem}>
                      <div className={styles.sidebarHead}>Notifications</div>
                      <div>You’re ignoring this thread.</div>
                    </div>
                    <div className={styles.sidebarItem}>
                      <div className={styles.sidebarHead}>Participants</div>
                      <div>
                        <ul className={styles.participantsList}>
                          {discuss.participants.map(participant => (
                            <li className={styles.participantsItem} key={participant}>
                              <Avatar size="25" src={participant} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default GitHubDiscuss
