import React from 'react'
import { Table, Button, Icon } from 'antd'
import invoiceData from './data.json'

class Invoice extends React.Component {
  state = {
    data: invoiceData.invoiceData,
    tableData: invoiceData.invoiceData.invoiceContent,
  }

  render() {
    const columns = [
      {
        title: '#',
        dataIndex: 'number',
      },
      {
        title: 'Description',
        dataIndex: 'description',
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
      },
      {
        title: 'Unit Cost',
        dataIndex: 'unitcost',
      },
      {
        title: 'Total',
        dataIndex: 'total',
      },
    ]

    const { data, tableData } = this.state

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h4 className="text-black mb-3">
              <strong>{data.senderName}</strong>
              <br />
              <br />
              <img className="mr-2" src={data.senderLogo} height="50" alt="Amazon" />
            </h4>
            <address>
              {data.senderAdress}
              <br />
              <abbr className="mr-2" title="Mail">
                E-mail:
              </abbr>
              {data.senderEmail}
              <br />
              <abbr className="mr-2" title="Phone">
                Phone:
              </abbr>
              {data.senderPhone}
              <br />
              <abbr className="mr-2" title="Fax">
                Fax:
              </abbr>
              {data.senderFax}
              <br />
              <br />
            </address>
          </div>
          <div className="col-md-6 text-right">
            <h4 className="text-black mb-3">
              <strong>Invoice Info</strong>
            </h4>
            <p>
              <a className="font-size-20" href="javascript: void(0);">
                {data.invoiceNumber}
              </a>
              <br />
              <span className="font-size-20">{data.recipientName}</span>
            </p>
            <address>
              {data.recipientAdress}
              <br />
              <abbr className="mr-2" title="Phone">
                P:
              </abbr>
              {data.recipientPhone}
              <br />
            </address>
            <span>{`Invoice Date: ${data.invoiceDate}`} </span>
            <br />
            <span>{`Due Date: ${data.invoiceDueDate}`}</span>
            <br />
            <br />
          </div>
        </div>
        <Table
          className="utils__scrollTable"
          scroll={{ x: '100%' }}
          columns={columns}
          dataSource={tableData}
          pagination={false}
        />
        <div className="text-right clearfix mt-5">
          <div className="pull-right">
            <p>
              Sub - Total amount:{' '}
              <strong>
                <span>{data.invoiceAmount}</span>
              </strong>
            </p>
            <p>
              VAT:{' '}
              <strong>
                <span>{data.invoiceVAT}</span>
              </strong>
            </p>
            <p>
              <strong>
                Grand Total: <span>{data.invoiceTotal}</span>
              </strong>
            </p>
            <br />
          </div>
        </div>
        <div className="text-right">
          <Button className="mr-2" type="primary">
            <Icon type="check-circle-o" /> Proceed to payment
          </Button>
          <Button type="default">
            <Icon type="printer" /> Print
          </Button>
        </div>
      </div>
    )
  }
}

export default Invoice
