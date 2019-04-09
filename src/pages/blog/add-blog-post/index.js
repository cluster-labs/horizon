import React from 'react'
import { Helmet } from 'react-helmet'
import AddForm from './AddForm'
import styles from './style.module.scss'

class BlogAddPost extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Add Blog Post" />
        <section className="card">
          <div className="card-header mb-2">
            <div className="utils__title">
              <strong>Post Add/Edit</strong>
            </div>
          </div>
          <div className="card-body">
            <div className={styles.addPost}>
              <AddForm />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default BlogAddPost
