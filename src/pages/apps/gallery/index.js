import React from 'react'
import { Upload, message, Button, Icon } from 'antd'
import { Helmet } from 'react-helmet'
import styles from './style.module.scss'
import data from './data.json'

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
}

class GalleryList extends React.Component {
  state = {
    imgData: [],
  }

  componentWillMount() {
    this.setState({
      imgData: data.images,
    })
  }

  render() {
    const { imgData } = this.state
    return (
      <div>
        <Helmet title="Gallery" />
        <div className="card">
          <div className="card-header clearfix">
            <div className="pull-right">
              <Upload {...props}>
                <Button type="primary">
                  <Icon type="upload" /> Click to Upload
                </Button>
              </Upload>
            </div>
            <div className="utils__title">
              <strong>Photo Gallery</strong>
            </div>
          </div>
          <div className="card-body">
            <div className={styles.gallery}>
              {imgData.map(image => (
                <div
                  className={`${styles.item} ${image.editable === true ? styles.withControls : ''}`}
                  style={{ backgroundImage: `url(${image.path})` }}
                  key={Math.random()}
                >
                  {image.editable === true && (
                    <div className={styles.itemControls}>
                      <Button.Group size="default">
                        <Button>
                          <Icon type="edit" />
                        </Button>
                        <Button>
                          <Icon type="delete" />
                        </Button>
                      </Button.Group>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GalleryList
