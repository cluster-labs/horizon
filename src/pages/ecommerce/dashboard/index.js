import React from 'react'
import { Tabs, Select, Table } from 'antd'
import { Helmet } from 'react-helmet'
import ChartistGraph from 'react-chartist'
import InfoCard from 'components/CleanUIComponents/InfoCard'
import data from './data.json'

const { TabPane } = Tabs
const { Option } = Select

class Dashboard extends React.Component {
  state = {
    ordersGraph: data.ordersGraph,
    amountGraph: data.amountGraph,
    ordersInfo: data.ordersInfo,
    amountInfo: data.amountInfo,
    bestsellersData: data.bestsellersData,
    mostViewedData: data.mostViewedData,
    newCustomersData: data.newCustomersData,
    topCustomersData: data.topCustomersData,
    lastOrdersData: data.lastOrdersData,
    lastSearchData: data.lastSearchData,
    topSearchData: data.topSearchData,
  }

  render() {
    const {
      ordersGraph,
      amountGraph,
      ordersInfo,
      amountInfo,
      bestsellersData,
      mostViewedData,
      newCustomersData,
      topCustomersData,
      lastOrdersData,
      lastSearchData,
      topSearchData,
    } = this.state

    const chartistOptions = {
      fullWidth: true,
      showArea: true,
      chartPadding: {
        right: 30,
        left: 0,
      },
      plugins: [
        // Chartist.plugins.tooltip({
        //   seriesName: false,
        // }),
      ],
    }

    const bestsellersColumns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: 'Product',
        dataIndex: 'product',
        key: 'product',
        render: text => <a href="javascript: void(0);">{text}</a>,
        sorter: (a, b) => a.product - b.product,
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter: (a, b) => a.price - b.price,
        render: text => `$${text}`,
      },
      {
        title: 'Order Quantity',
        dataIndex: 'orderquantity',
        key: 'orderquantity',
        sorter: (a, b) => a.orderquantity - b.orderquantity,
      },
    ]

    const mostViewedColumns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: 'Product',
        dataIndex: 'product',
        key: 'product',
        render: text => <a href="javascript: void(0);">{text}</a>,
        sorter: (a, b) => a.product - b.product,
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter: (a, b) => a.price - b.price,
        render: text => `$${text}`,
      },
      {
        title: 'Views',
        dataIndex: 'views',
        key: 'views',
        sorter: (a, b) => a.views - b.views,
      },
    ]

    const customersColumns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript: void(0);">{text}</a>,
        sorter: (a, b) => a.name - b.name,
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        sorter: (a, b) => a.date - b.date,
      },
      {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
        sorter: (a, b) => a.total - b.total,
        render: text => `$${text}`,
      },
    ]

    const lastOrdersColumns = [
      {
        title: 'Customers',
        dataIndex: 'customer',
        key: 'customer',
      },
      {
        title: 'Items',
        dataIndex: 'items',
        key: 'items',
      },
      {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
        render: text => `$${text}`,
      },
    ]

    const searchColumns = [
      {
        title: 'Search Term',
        dataIndex: 'searchTerm',
        key: 'searchTerm',
      },
      {
        title: 'Results',
        dataIndex: 'result',
        key: 'result',
      },
      {
        title: 'Uses',
        dataIndex: 'uses',
        key: 'uses',
      },
    ]

    return (
      <div>
        <Helmet title="Ecommerce Dashboard" />
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-xl-8 col-lg-12">
                <div className="mb-5">
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="Orders" key="1">
                      <div>
                        <Select defaultValue="lastDay" style={{ width: 120 }}>
                          <Option value="lastDay">Last Day</Option>
                          <Option value="lastWeek">Last Week</Option>
                          <Option value="lastMonth">Last Month</Option>
                          <Option value="last3Month">Last 3 Month</Option>
                        </Select>
                      </div>
                      <ChartistGraph
                        data={ordersGraph}
                        options={chartistOptions}
                        className="chart-area height-200 mt-4 chartist"
                        type="Line"
                      />
                      <div className="row">
                        <div className="col-lg-3 col-6">
                          <div className="mb-3">
                            <div className="font-size-16 mb-2">Revenue</div>
                            <div className="font-size-20 text-black">
                              <strong>{ordersInfo.revenue}</strong>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-6">
                          <div className="mb-3">
                            <div className="font-size-16 mb-2">Tax</div>
                            <div className="font-size-20 text-black">
                              <strong>{ordersInfo.tax}</strong>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-6">
                          <div className="mb-3">
                            <div className="font-size-16 mb-2">Shipping</div>
                            <div className="font-size-20 text-black">
                              <strong>{ordersInfo.shipping}</strong>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-6">
                          <div className="mb-3">
                            <div className="font-size-16 mb-2">Quantity</div>
                            <div className="font-size-20">
                              <strong>{ordersInfo.quantity}</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tab="Amount" key="2">
                      <div>
                        <Select defaultValue="lastDay" style={{ width: 120 }}>
                          <Option value="lastDay">Last Day</Option>
                          <Option value="lastWeek">Last Week</Option>
                          <Option value="lastMonth">Last Month</Option>
                          <Option value="last3Month">Last 3 Month</Option>
                        </Select>
                      </div>
                      <ChartistGraph
                        data={amountGraph}
                        options={chartistOptions}
                        className="chart-area height-200 mt-4 chartist"
                        type="Line"
                      />
                      <div className="row">
                        <div className="col-lg-3 col-6">
                          <div className="mb-3">
                            <div className="font-size-16 mb-2">Revenue</div>
                            <div className="font-size-20 text-black">
                              <strong>{amountInfo.revenue}</strong>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-6">
                          <div className="mb-3">
                            <div className="font-size-16 mb-2">Tax</div>
                            <div className="font-size-20 text-black">
                              <strong>{amountInfo.tax}</strong>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-6">
                          <div className="mb-3">
                            <div className="font-size-16 mb-2">Shipping</div>
                            <div className="font-size-20 text-black">
                              <strong>{amountInfo.shipping}</strong>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-6">
                          <div className="mb-3">
                            <div className="font-size-16 mb-2">Quantity</div>
                            <div className="font-size-20">
                              <strong>{amountInfo.quantity}</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPane>
                  </Tabs>
                </div>
                <div>
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="Bestsellers" key="1">
                      <Table
                        className="utils__scrollTable"
                        scroll={{ x: '100%' }}
                        columns={bestsellersColumns}
                        dataSource={bestsellersData}
                      />
                    </TabPane>
                    <TabPane tab="Most Viewed Products" key="2">
                      <Table
                        className="utils__scrollTable"
                        scroll={{ x: '100%' }}
                        columns={mostViewedColumns}
                        dataSource={mostViewedData}
                      />
                    </TabPane>
                    <TabPane tab="New Customers" key="3">
                      <Table
                        className="utils__scrollTable"
                        scroll={{ x: '100%' }}
                        columns={customersColumns}
                        dataSource={newCustomersData}
                      />
                    </TabPane>
                    <TabPane tab="Top Customers" key="4">
                      <Table
                        className="utils__scrollTable"
                        scroll={{ x: '100%' }}
                        columns={customersColumns}
                        dataSource={topCustomersData}
                      />
                    </TabPane>
                  </Tabs>
                </div>
              </div>
              <div className="col-xl-4 col-lg-12">
                <div className="row mb-5">
                  <div className="col-xl-12 col-lg-6 col-sm-12">
                    <InfoCard form="stats-large" icon="download" type="primary" />
                  </div>
                  <div className="col-xl-12 col-lg-6 col-sm-12">
                    <InfoCard form="stats-large" icon="stack" type="default" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-lg-12">
                    <div className="font-size-16 text-black mb-3">
                      <strong>Last Orders</strong>
                    </div>
                    <Table
                      className="utils__scrollTable"
                      scroll={{ x: '100%' }}
                      columns={lastOrdersColumns}
                      dataSource={lastOrdersData}
                      pagination={false}
                    />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-lg-12">
                    <div className="font-size-16 text-black mb-3">
                      <strong>Last Search Terms</strong>
                    </div>
                    <Table
                      className="utils__scrollTable"
                      scroll={{ x: '100%' }}
                      columns={searchColumns}
                      dataSource={lastSearchData}
                      pagination={false}
                    />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-lg-12">
                    <div className="font-size-16 text-black mb-3">
                      <strong>Top Search Terms</strong>
                    </div>
                    <Table
                      className="utils__scrollTable"
                      scroll={{ x: '100%' }}
                      columns={searchColumns}
                      dataSource={topSearchData}
                      pagination={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
