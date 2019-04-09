import React from 'react'
import { Helmet } from 'react-helmet'
import InfoCard from 'components/CleanUIComponents/InfoCard'
import ProductCard from 'components/CleanUIComponents/ProductCard'

class ProductsCatalog extends React.Component {
  static defaultProps = {
    pathName: 'Products Catalog',
  }

  render() {
    return (
      <div>
        <Helmet title="Products Catalog" />
        <div className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>Products Catalog</strong>
            </div>
            <div className="row mb-5 mt-3">
              <div className="col-lg-2">
                <InfoCard form="bordered" type="primary" icon={false} />
              </div>
              <div className="col-lg-2">
                <InfoCard form="bordered" type="default" icon={false} />
              </div>
              <div className="col-lg-2">
                <InfoCard form="bordered" type="danger" icon={false} />
              </div>
              <div className="col-lg-2">
                <InfoCard form="bordered" type="default" icon={false} />
              </div>
              <div className="col-lg-2">
                <InfoCard form="bordered" type="warning" icon={false} />
              </div>
              <div className="col-lg-2">
                <InfoCard form="bordered" type="success" icon={false} />
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="productsCatalog">
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-12">
                  <ProductCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                  <ProductCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                  <ProductCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                  <ProductCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                  <ProductCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                  <ProductCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                  <ProductCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                  <ProductCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                  <ProductCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                  <ProductCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                  <ProductCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                  <ProductCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductsCatalog
