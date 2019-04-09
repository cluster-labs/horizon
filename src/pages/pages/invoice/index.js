import React from 'react'
import { Helmet } from 'react-helmet'
import Invoice from 'components/CleanUIComponents/Invoice'

class InvoicePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Invoice" />
        <div className="card">
          <div className="card-body">
            <Invoice />
          </div>
        </div>
      </div>
    )
  }
}

export default InvoicePage
