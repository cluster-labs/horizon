import React from 'react'
import { Carousel, Breadcrumb, Rate, Select, Tooltip, Button, Icon, Tabs } from 'antd'
import { Helmet } from 'react-helmet'
import styles from './style.module.scss'
import data from './data.json'

const { TabPane } = Tabs
const { Option } = Select

class ProductDetails extends React.Component {
  state = {
    imgActiveStatus: [],
    images: data.images,
    sku: data.sku,
    name: data.name,
    rate: data.rate,
    price: data.price,
    oldPrice: data.oldPrice,
    shortDescr: data.shortDescr,
    description: data.description,
    properties: data.properties,
  }

  componentWillMount() {
    this.generateImgStatus()
  }

  generateImgStatus = () => {
    const { imgActiveStatus, images } = this.state
    images.forEach((img, index) => {
      imgActiveStatus[index] = 'not-active'
      if (index === 0) {
        imgActiveStatus[0] = 'active'
      }
    })
  }

  setActiveImg = imgNumber => {
    const { imgActiveStatus } = this.state
    imgActiveStatus.forEach((imgStatus, index) => {
      imgActiveStatus[index] = 'not-active'
      if (imgNumber === index) {
        imgActiveStatus[index] = 'active'
      }
    })
    this.setState({
      imgActiveStatus,
    })
  }

  refSlider = node => {
    this.slider = node
  }

  changeSlide = (e, index) => {
    e.preventDefault()
    this.slider.slick.innerSlider.slickGoTo(index)
    this.setActiveImg(index)
  }

  render() {
    const {
      imgActiveStatus,
      images,
      sku,
      name,
      rate,
      price,
      oldPrice,
      shortDescr,
      description,
      properties,
    } = this.state

    return (
      <div>
        <Helmet title="Products Details" />
        <section className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>Product Details</strong>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-4">
                <div className={styles.item}>
                  <div className={styles.img}>
                    <div className={styles.status}>
                      <span className={styles.statusTitle}>New</span>
                    </div>
                    <div className={`${styles.like} ${styles.selectedLike}`}>
                      <i className="icmn-heart" />
                    </div>
                    <Carousel ref={this.refSlider} autoplay={false} dots={false} effect="fade">
                      {images.map(image => (
                        <div key={image}>
                          <img className={styles.img} src={image} alt="" />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>
                <div className={`${styles.photos} clearfix`}>
                  {images.map((image, index) => (
                    <a
                      href="javascript: void(0)"
                      key={image}
                      onClick={e => {
                        this.changeSlide(e, index)
                      }}
                      className={`${styles.photosItem} ${
                        imgActiveStatus[index] === 'active' ? styles.photosItemActive : ''
                      }`}
                    >
                      <img src={image} alt="" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="col-lg-8">
                <div className={styles.breadcrumbs}>
                  <Breadcrumb separator="">
                    <Breadcrumb.Item>
                      <span className={styles.breadcrumbItem}>
                        <a href="javascript: void(0);">Catalog</a>
                      </span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <span className={styles.breadcrumbItem}>
                        <a href="javascript: void(0);">Chairs</a>
                      </span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <span className={styles.breadcrumbItem}>
                        <a href="javascript: void(0);">White</a>
                      </span>
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className={styles.sku}>
                  {`SKU: #${sku}`}
                  <br />
                  <div className={styles.raiting}>
                    <Rate value={rate} disabled allowHalf />
                  </div>
                </div>
                <h4 className={styles.mainTitle}>
                  <strong>{name}</strong>
                </h4>
                <div className={styles.price}>
                  {`$${price}`}
                  {oldPrice && <div className={styles.priceBefore}>{`$${oldPrice}`}</div>}
                </div>
                <hr />
                <div className={`mb-1 ${styles.descr}`}>
                  <p>{shortDescr}</p>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className={styles.optionTitle}>Color</div>
                    <div className={styles.option}>
                      <Select defaultValue="Red" size="small" style={{ width: 120 }}>
                        <Option value="red">Red</Option>
                        <Option value="black">Black</Option>
                        <Option value="cyan">Cyan</Option>
                        <Option value="blue">Blue</Option>
                      </Select>
                    </div>
                    <div className={styles.optionTitle}>Available Size</div>
                    <div className={styles.option}>
                      <div className={styles.sizes}>
                        <Tooltip placement="top" title="Size S">
                          <span>S</span>
                        </Tooltip>
                        <Tooltip placement="top" title="Size M">
                          <span title="Size M">M</span>
                        </Tooltip>
                        <Tooltip placement="top" title="Size XL">
                          <span>XL</span>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className={styles.controls}>
                  <Button type="primary" size="large">
                    <Icon type="shopping-cart" />
                    Buy now
                  </Button>
                  <a href="javascript: void(0);" className="btn btn-link">
                    <i className="icmn-heart mr-1" />
                    Add to Wishlist
                  </a>
                  <a href="javascript: void(0);" className="btn btn-link">
                    <i className="icmn-stats-bars mr-1" />
                    Add to Compare
                  </a>
                </div>
                <div className={styles.info}>
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="Information" key="1">
                      {properties.map(property => (
                        <div className="mb-1" key={property.name}>
                          <strong className="mr-1">{`${property.name}: `}</strong>
                          {property.value}
                        </div>
                      ))}
                    </TabPane>
                    <TabPane tab="Description" key="2">
                      <p>{description}</p>
                    </TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ProductDetails
