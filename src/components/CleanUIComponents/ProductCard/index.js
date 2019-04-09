import React from 'react'
import { Tooltip } from 'antd'
import data from './data.json'
import styles from './style.module.scss'

class ProductCard extends React.Component {
  state = {
    productImg: data.productImg,
    productName: data.productName,
    productPrice: data.productPrice,
    productOldPrice: data.productOldPrice,
    productNote: data.productNote,
    productStatus: data.productStatus,
  }

  render() {
    const {
      productImg,
      productName,
      productPrice,
      productOldPrice,
      productNote,
      productStatus,
    } = this.state
    return (
      <div className={styles.productCard}>
        <div className={styles.img}>
          {productStatus === 'new' && (
            <div className={styles.status}>
              <span className={styles.statusTitle}>New</span>
            </div>
          )}
          <div className={styles.like}>
            <i className="icmn-heart" />
          </div>
          <a href="javascript: void(0);">
            <img src={productImg} alt="" />
          </a>
        </div>
        <div className={styles.title}>
          <a href="javascript: void(0);">{productName}</a>
          <div className={styles.price}>
            {productPrice}
            <div className={styles.oldPrice}>{productOldPrice}</div>
          </div>
        </div>
        <div className={styles.descr}>
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
          {productNote}
        </div>
      </div>
    )
  }
}

export default ProductCard
