import React from 'react'
import { Input, Icon, Menu, Dropdown } from 'antd'
import { Helmet } from 'react-helmet'
import Avatar from 'components/CleanUIComponents/Avatar'
import CommentForm from './CommentForm'
import styles from './style.module.scss'
import data from './data.json'

const { Search } = Input

const actions = (
  <Menu>
    <Menu.Item>
      <Icon type="edit" /> Edit Comment
    </Menu.Item>
    <Menu.Item>
      <Icon type="delete" /> Delete Comment
    </Menu.Item>
    <Menu.Item>
      <Icon type="frown-o" /> Mark as a Spam
    </Menu.Item>
  </Menu>
)

class BlogPost extends React.Component {
  state = {
    articleData: data.articleData,
    articlesCategories: data.articlesCategories,
    latesArticlesData: data.latesArticlesData,
    comments: data.comments,
  }

  render() {
    const { articleData, articlesCategories, latesArticlesData, comments } = this.state
    return (
      <div>
        <Helmet title="Blog Post" />
        <section className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>Blog Post</strong>
            </div>
          </div>
          <div className="card-body">
            <div className={styles.blogFeed}>
              <div className="row">
                <div className="col-lg-8">
                  <article className={styles.article}>
                    <div className={styles.information}>
                      <div className={styles.title}>
                        <h1>
                          <a href="javascript: void(0);">{articleData.name}</a>
                        </h1>
                      </div>
                      <ul className={styles.meta}>
                        <li className={styles.metaInf}>
                          <span className={styles.articleAuthor}>
                            Post By <a href="javascript: void(0);">{articleData.author}</a>
                          </span>
                        </li>
                        <li className={styles.metaInf}>
                          <span className={styles.articleDate}>{`On ${articleData.date}`}</span>
                        </li>
                      </ul>
                    </div>
                    <div
                      className={styles.content}
                      dangerouslySetInnerHTML={{ __html: articleData.content }}
                    />
                    <footer className={styles.footer}>
                      <div className="row">
                        <div className="col-8">
                          <div className={styles.hashtags}>
                            {articleData.tags.map(tag => (
                              <a href="javascript: void(0);" key={tag}>
                                {tag}
                              </a>
                            ))}
                          </div>
                        </div>
                        <div className="col-4">
                          <ul className={styles.share}>
                            <li className={styles.shareItem}>
                              <a href="javascript: void(0);">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li className={styles.shareItem}>
                              <a href="javascript: void(0);">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li className={styles.shareItem}>
                              <a href="javascript: void(0);">
                                <i className="fa fa-pinterest-p" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </footer>
                  </article>
                  <div className={`${styles.authorCard} clearfix`}>
                    <div className={styles.authorPhoto}>
                      <Avatar src={articleData.authorAvatar} size="110" />
                    </div>
                    <div className={styles.authorInf}>
                      <span className={styles.authorName}>{articleData.author}</span>
                      <p className={styles.authorWords}>&ldquo;{articleData.authorStatus}&rdquo;</p>
                      <div className="blog-feed__author-profile">
                        <a
                          href="javascript: void(0);"
                          className="blog-feed__author-profile-btn btn btn-sm btn-primary"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className={styles.commentsTitle}>Leave a comment</div>
                    <div className={styles.addCommentForm}>
                      <CommentForm />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className={styles.commentsTitle}>Comments</div>
                    <div className="mt-3">
                      {comments.length > 0 && (
                        <div>
                          {comments.map(postComment => (
                            <div
                              className={`clearfix ${styles.commentItem} ${
                                postComment.subComments !== undefined ? 'pb-0' : ''
                              }`}
                              key={Math.random()}
                            >
                              <div className={styles.commentAvatar}>
                                <Avatar size="50" src={postComment.avatar} border={false} />
                              </div>
                              <div className={styles.commentContent}>
                                <div className="clearfix">
                                  <div className="pull-left">
                                    <strong>{postComment.name}</strong> posted:
                                    <br />
                                    <small className="text-muted">{postComment.date}</small>
                                  </div>
                                  <div className="pull-right">
                                    <Dropdown overlay={actions}>
                                      <a className="ant-dropdown-link" href="javascript: void(0);">
                                        Actions <Icon type="down" />
                                      </a>
                                    </Dropdown>
                                  </div>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: postComment.content }} />
                                <div>
                                  <a href="javascript: void(0);" className="mr-3">
                                    <i className="icmn-heart mr-2" />
                                    {postComment.likesCount > 0 && (
                                      <span>{`${postComment.likesCount} Likes`}</span>
                                    )}
                                    {postComment.likesCount === 0 && (
                                      <span>{`${postComment.likesCount} Like`}</span>
                                    )}
                                  </a>
                                  <a href="javascript: void(0);" className="mr-3">
                                    <i className="icmn-bubble mr-2" />
                                    {postComment.commentsCount > 0 && (
                                      <span>{`${postComment.commentsCount} Comments`}</span>
                                    )}
                                    {postComment.commentsCount === 0 && (
                                      <span>{`${postComment.commentsCount} Comment`}</span>
                                    )}
                                  </a>
                                  <a href="javascript: void(0);">
                                    <i className="icmn-reply mr-2" />
                                    <span>Reply</span>
                                  </a>
                                </div>
                                {postComment.subComments && (
                                  <div className={styles.subcommentsContent}>
                                    {postComment.subComments.map(subComment => (
                                      <div
                                        className={`${styles.commentItem} clearfix`}
                                        key={subComment.name}
                                      >
                                        <div className={styles.commentAvatar}>
                                          <Avatar
                                            size="50"
                                            src={subComment.avatar}
                                            border={false}
                                          />
                                        </div>
                                        <div className={styles.commentContent}>
                                          <div className="clearfix">
                                            <div className="pull-left">
                                              <strong>{subComment.name}</strong> posted:
                                              <br />
                                              <small className="text-muted">
                                                {subComment.date}
                                              </small>
                                            </div>
                                            <div className="pull-right">
                                              <Dropdown overlay={actions}>
                                                <a
                                                  className="ant-dropdown-link"
                                                  href="javascript: void(0);"
                                                >
                                                  Actions <Icon type="down" />
                                                </a>
                                              </Dropdown>
                                            </div>
                                          </div>
                                          <div
                                            dangerouslySetInnerHTML={{ __html: subComment.content }}
                                          />
                                          <div>
                                            <a href="javascript: void(0);" className="mr-3">
                                              <i className="icmn-heart mr-2" />
                                              {subComment.likesCount > 0 && (
                                                <span>{`${subComment.likesCount} Likes`}</span>
                                              )}
                                              {subComment.likesCount === 0 && (
                                                <span>{`${subComment.likesCount} Like`}</span>
                                              )}
                                            </a>
                                            <a href="javascript: void(0);" className="mr-3">
                                              <i className="icmn-bubble mr-2" />
                                              {subComment.commentsCount > 0 && (
                                                <span>
                                                  {`${subComment.commentsCount} Comments`}
                                                </span>
                                              )}
                                              {subComment.commentsCount === 0 && (
                                                <span>{`${subComment.commentsCount} Comment`}</span>
                                              )}
                                            </a>
                                            <a href="javascript: void(0);">
                                              <i className="icmn-reply mr-2" />
                                              <span>Reply</span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="mb-5 pb-2">
                        <a href="javascript: void(0);" className="btn btn-default btn-block mb-5">
                          Load More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <aside className={styles.sidebar}>
                    <div className={styles.partition}>
                      <div className={styles.partitionHead}>
                        <span className={styles.partitionName}>Search</span>
                      </div>
                      <div className="input-group">
                        <Search
                          placeholder="Search ..."
                          enterButton={
                            <span>
                              <Icon type="search" /> Search
                            </span>
                          }
                        />
                      </div>
                    </div>
                    <div className={styles.partition}>
                      <div className={styles.partitionHead}>
                        <span className={styles.partitionName}>Categories</span>
                      </div>
                      <ul className={styles.categoriesList}>
                        {articlesCategories.map(category => (
                          <li className={styles.categoriesItem} key={category}>
                            <a className={styles.categoriesLink} href="javascript: void(0);">
                              {category}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.partition}>
                      <div className={styles.partitionHead}>
                        <span className={styles.partitionName}>Latest post</span>
                      </div>
                      {latesArticlesData.map(latestArticle => (
                        <article className={styles.latestPost} key={Math.random()}>
                          <div className={styles.latestImg}>
                            <a href="javascript: void(0);">
                              <img src={latestArticle.cover} alt={latestArticle.name} />
                            </a>
                          </div>
                          <div className={styles.latestData}>
                            <div className={styles.latestName}>
                              <h2>
                                <a href="javascript: void(0);">{latestArticle.name}</a>
                              </h2>
                            </div>
                            <ul className={`${styles.latestArticleMeta} ${styles.meta}`}>
                              <li className={styles.metaInf}>
                                <span className={styles.articleAuthor}>
                                  Post By <a href="javascript: void(0);">{latestArticle.author}</a>
                                </span>
                              </li>
                              <li className={styles.metaInf}>
                                <span className={styles.articleDate}>
                                  {`On ${latestArticle.date}`}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </article>
                      ))}
                    </div>
                    <div className={styles.partition}>
                      <div className={styles.partitionHead}>
                        <span className={styles.partitionName}>Subscribe</span>
                      </div>
                      <div className="input-group">
                        <Input
                          addonBefore={<Icon type="mail" />}
                          placeholder="Email adress"
                          size="default"
                        />
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default BlogPost
