import React from 'react'
import { Pagination } from 'antd'
import { Helmet } from 'react-helmet'
import styles from './style.module.scss'
import data from './data.json'

class YouTubeFeed extends React.Component {
  state = {
    partitions: data.partitions,
  }

  render() {
    const { partitions } = this.state
    return (
      <div>
        <Helmet title="YouTube Feed" />
        <section className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>YouTube Feed</strong>
            </div>
          </div>
          <div className="card-body">
            <div className={styles.feed}>
              {partitions.map(partition => (
                <div className={styles.partition} key={Math.random()}>
                  <h2 className={styles.title}>
                    {partition.cover !== undefined && (
                      <img className={`${styles.titleThumb} mr-3`} src={partition.cover} alt="" />
                    )}
                    {partition.name}
                  </h2>
                  <ul className={styles.partitionContent}>
                    {partition.videos.map(video => (
                      <li className={styles.item} key={Math.random()}>
                        <a href="javascript: void(0);" className={styles.itemLink}>
                          <img className={styles.itemThumb} src={video.cover} alt={video.name} />
                          <div className={styles.itemDescr}>
                            <span className={styles.itemName}>{video.name}</span>
                            <span className={styles.itemAuthor}>{video.author}</span>
                            <span className={`${styles.itemViews} text-muted`}>
                              <span>{video.views}</span> views
                            </span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="mb-5">
                <Pagination defaultCurrent={1} total={50} />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default YouTubeFeed
