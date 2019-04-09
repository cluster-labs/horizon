import React from 'react'
import { Checkbox, Dropdown, Icon, Menu, Input, Button } from 'antd'
import { Helmet } from 'react-helmet'
import Avatar from 'components/CleanUIComponents/Avatar'
import styles from './style.module.scss'
import data from './data.json'

const { TextArea } = Input

const actions = (
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

class YouTubeView extends React.Component {
  state = {
    viewData: data.viewData,
    upNext: data.upNext,
  }

  render() {
    const { viewData, upNext } = this.state
    return (
      <div>
        <Helmet title="YouTube View" />
        <section className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>YouTube View</strong>
            </div>
          </div>
          <div className="card-body">
            <div className={`${styles.videoPage} clearfix`}>
              <div className={styles.mainContent}>
                <div className={styles.player}>
                  <img src="resources/images/photos/4.jpeg" alt="" />
                </div>
                <div className={styles.descr}>
                  <div className={styles.card}>
                    <div className="mb-2">
                      <strong>
                        Published on <span>{viewData.date}</span>
                      </strong>
                      <div className="pull-right">
                        <Dropdown overlay={actions}>
                          <a className="ant-dropdown-link" href="javascript: void(0);">
                            Actions <Icon type="down" />
                          </a>
                        </Dropdown>
                      </div>
                    </div>
                    <p className="mb-0">{viewData.description}</p>
                  </div>
                </div>
                <div>
                  <div className={styles.card}>
                    <div className={styles.addComment}>
                      <div className={styles.commentUser}>
                        <Avatar size="50" src={viewData.accountImg} />
                      </div>
                      <div className={styles.commentForm}>
                        <TextArea rows={3} placeholder="Write a comment..." />
                        <div className="mt-3">
                          <Button className="mr-2" type="primary" style={{ width: 200 }}>
                            <i className="fa fa-send mr-2" />
                            Send
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div>
                      {viewData.comments.map(comment => (
                        <div className={`${styles.commentItem} clearfix`} key={Math.random()}>
                          <div className={styles.commentAvatar}>
                            <Avatar src={comment.avatar} size="50" border="false" />
                          </div>
                          <div className={styles.commentContent}>
                            <strong>
                              {comment.name}
                              <span className={`${styles.commentTime}text-muted ml-2`}>
                                {comment.date}
                              </span>
                            </strong>
                            <p className="mb-0">{comment.content}</p>
                            <div className={styles.commentLike}>
                              <a className="mr-2" href="javascript: void(0);">
                                <i className="icmn-heart mr-2" />
                                {comment.likesCount > 0 && (
                                  <span>{`${comment.likesCount} Likes`}</span>
                                )}
                                {comment.likesCount === 0 && (
                                  <span>{`${comment.likesCount} Like`}</span>
                                )}
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.sidebar} ${styles.card}`}>
                <div className={styles.sidebarHead}>
                  <strong className={styles.sidebarTitle}>Up next</strong>
                  <div className="pull-right">
                    <Checkbox>Autoplay</Checkbox>
                  </div>
                </div>
                <ul className={styles.watchNext}>
                  {upNext.map(video => (
                    <li className={`${styles.nextItem} clearfix`} key={Math.random()}>
                      <a href="javascript: void(0);" className={styles.nextItemLink}>
                        <div className={styles.itemThumb}>
                          <img className={styles.itemThumbImg} src={video.cover} alt={video.name} />
                        </div>
                        <div className={styles.itemDescr}>
                          <span className={styles.itemName}>{video.name}</span>
                          <span className={styles.itemAuthor}>{video.author}</span>
                          <span className={`${styles.itemViews} text-muted`}>
                            <span className={styles.itemCount}>{video.views}</span>
                            views
                          </span>
                        </div>
                      </a>
                    </li>
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

export default YouTubeView
