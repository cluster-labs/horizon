import React from 'react'
import { Spin, Alert, Table, Select, Tag, Radio, Form, Input, Affix } from 'antd'
import { Helmet } from 'react-helmet'
import TradeChart from './TradeChart'
import getData from './TradeChart/utils'
import styles from './style.module.scss'
import { myOpenOrdersData, marketHistoryData, orderBookBuy, orderBookSell } from './data.json'

class DashboardCrypto extends React.Component {
  state = {
    orderType: 'buy',
    graphData: null,
    myOpenOrders: {
      loading: false,
      loaded: false,
      data: myOpenOrdersData,
    },
    myOrderHistory: {
      loading: false,
      loaded: false,
      data: myOpenOrdersData,
    },
    marketHistory: {
      data: marketHistoryData,
    },
    orderBook: {
      buy: orderBookBuy,
      sell: orderBookSell,
    },
  }

  componentDidMount() {
    getData().then(data => {
      this.setState({ graphData: data })
    })
  }

  handleMyOpenOrders = () => {
    const { myOpenOrders } = this.state
    this.setState({
      myOpenOrders: {
        ...myOpenOrders,
        loading: true,
      },
    })
    setTimeout(() => {
      this.setState({
        myOpenOrders: {
          ...myOpenOrders,
          loading: false,
          loaded: true,
        },
      })
    }, 1500)
  }

  handleMyOrderHistory = () => {
    const { myOrderHistory } = this.state

    this.setState({
      myOrderHistory: {
        ...myOrderHistory,
        loading: true,
      },
    })
    setTimeout(() => {
      this.setState({
        myOrderHistory: {
          ...myOrderHistory,
          loading: false,
          loaded: true,
        },
      })
    }, 1500)
  }

  toggleOrderType = e => {
    this.setState({
      orderType: e.target.value,
    })
  }

  render() {
    const {
      graphData,
      myOpenOrders,
      myOrderHistory,
      marketHistory,
      orderBook,
      orderType,
    } = this.state

    const myOrderColumns = [
      {
        title: 'Order Date',
        dataIndex: 'orderDate',
        key: 'orderDate',
      },
      {
        title: 'Open Date',
        dataIndex: 'openDate',
        key: 'openDate',
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        render: value => (
          <span style={{ color: value === 'SELL' ? '#f75535' : '#00a45b' }}>{value}</span>
        ),
      },
      {
        title: 'Bid/Ask',
        dataIndex: 'bidAsk',
        key: 'bidAsk',
      },
      {
        title: 'Filled',
        dataIndex: 'filled',
        key: 'filled',
      },
      {
        title: 'Units Total',
        dataIndex: 'unitsTotal',
        key: 'unitsTotal',
      },
      {
        title: 'Actual Rate',
        dataIndex: 'actualRate',
        key: 'actualRate',
      },
      {
        title: 'Est. Total',
        dataIndex: 'estTotal',
        key: 'estTotal',
      },
    ]

    const marketHistoryColumns = [
      {
        title: 'Date',
        dataIndex: 'orderDate',
        key: 'orderDate',
      },
      {
        title: 'BUY/SELL',
        dataIndex: 'type',
        key: 'type',
        render: value => (
          <span style={{ color: value === 'SELL' ? '#f75535' : '#00a45b' }}>{value}</span>
        ),
      },
      {
        title: 'Bid/Ask',
        dataIndex: 'bidAsk',
        key: 'bidAsk',
      },
      {
        title: 'Units Total',
        dataIndex: 'unitsTotal',
        key: 'unitsTotal',
      },
      {
        title: 'Total Cost',
        dataIndex: 'totalCost',
        key: 'totalCost',
      },
    ]

    const ordersSellColumns = [
      {
        title: 'SUM',
        dataIndex: 'sum',
        key: 'sum',
        align: 'right',
      },
      {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
        align: 'right',
      },
      {
        title: 'Size',
        dataIndex: 'size',
        key: 'size',
        align: 'right',
      },
      {
        title: 'BID',
        dataIndex: 'bid',
        key: 'bid',
        width: 120,
        align: 'right',
        render: value => <span style={{ color: '#00a45b' }}>{value}</span>,
      },
      {
        title: '',
        dataIndex: 'sell',
        key: 'sell',
        width: 60,
        align: 'right',
        render: () => (
          <a href="javascript: void(0);" className="utils__link--blue mr-2">
            <strong>SELL</strong>
          </a>
        ),
      },
    ]

    const ordersBuyColumns = [
      {
        title: '',
        dataIndex: 'sell',
        key: 'sell',
        width: 60,
        render: () => (
          <a href="javascript: void(0);" className="utils__link--blue ml-2">
            <strong>BUY</strong>
          </a>
        ),
      },
      {
        title: 'ASK',
        dataIndex: 'ask',
        key: 'ask',
        width: 120,
        render: value => <span style={{ color: '#f75535' }}>{value}</span>,
      },
      {
        title: 'Size',
        dataIndex: 'size',
        key: 'size',
      },
      {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
      },
      {
        title: 'SUM',
        dataIndex: 'sum',
        key: 'sum',
      },
    ]

    return (
      <div>
        <Helmet title="Dashboard Crypto" />
        <div className={styles.crypto}>
          <div className={styles.listMobile}>
            <div className="utils__title utils__title--flat mb-3">
              <strong>Markets</strong>
            </div>
            <Select showSearch size="large" defaultValue="btc" style={{ width: '100%' }}>
              <Select.Option value="btc">
                BTC (Bitcoin)
                <Tag color="blue" className="ml-3">
                  11.7%
                </Tag>
              </Select.Option>
              <Select.Option value="xmr">
                XMR (Monero)
                <Tag color="blue" className="ml-3">
                  67.5%
                </Tag>
              </Select.Option>
              <Select.Option value="gld">
                GLD (GoldCoin)
                <Tag color="red" className="ml-3">
                  -22.9%
                </Tag>
              </Select.Option>
              <Select.Option value="neo">
                NEO (Neo)
                <Tag color="red" className="ml-3">
                  -12.3%
                </Tag>
              </Select.Option>
              <Select.Option value="btg">
                BTG (Bitcoin Gold)
                <Tag color="blue" className="ml-3">
                  +4.3%
                </Tag>
              </Select.Option>
              <Select.Option value="xrp">
                XRP (Ripple)
                <Tag color="red" className="ml-3">
                  -4.2%
                </Tag>
              </Select.Option>
              <Select.Option value="zec">
                ZEC (ZCash)
                <Tag color="red" className="ml-3">
                  -1.7%
                </Tag>
              </Select.Option>
              <Select.Option value="neo">
                ZCL (ZClassic)
                <Tag color="red" className="ml-3">
                  -2.8%
                </Tag>
              </Select.Option>
            </Select>
          </div>
          <div className={styles.list}>
            <Affix offsetTop={20}>
              <div className="utils__title utils__title--flat mb-3">
                <strong>Markets</strong>
              </div>
              <a href="javascript: void(0);" className={styles.listItem}>
                <span className={styles.listPercents}>
                  <span>11.7%</span>
                  0.00016985
                </span>
                <span className={styles.listCurrency}>
                  <span>BTC</span>
                  97.20
                </span>
              </a>
              <a
                href="javascript: void(0);"
                className={`${styles.listItem} ${styles.listItemNegative}`}
              >
                <span className={styles.listPercents}>
                  <span>67.5%</span>
                  0.00016985
                </span>
                <span className={styles.listCurrency}>
                  <span>XMR</span>
                  8.26
                </span>
              </a>
              <a
                href="javascript: void(0);"
                className={`${styles.listItem} ${styles.listItemNegative}`}
              >
                <span className={styles.listPercents}>
                  <span>-22.9%</span>
                  0.00016985
                </span>
                <span className={styles.listCurrency}>
                  <span>GLD</span>
                  5.20
                </span>
              </a>
              <a href="javascript: void(0);" className={styles.listItem}>
                <span className={styles.listPercents}>
                  <span>-12.3%</span>
                  0.00016985
                </span>
                <span className={styles.listCurrency}>
                  <span>NEO</span>
                  3.20
                </span>
              </a>
              <a href="javascript: void(0);" className={styles.listItem}>
                <span className={styles.listPercents}>
                  <span>+4.3%</span>
                  0.00036234
                </span>
                <span className={styles.listCurrency}>
                  <span>BTG</span>
                  5.64
                </span>
              </a>
              <a
                href="javascript: void(0);"
                className={`${styles.listItem} ${styles.listItemNegative}`}
              >
                <span className={styles.listPercents}>
                  <span>-4.2%</span>
                  0.00035685
                </span>
                <span className={styles.listCurrency}>
                  <span>XRP</span>
                  6.36
                </span>
              </a>
              <a href="javascript: void(0);" className={styles.listItem}>
                <span className={styles.listPercents}>
                  <span>-1.7%</span>
                  0.00000985
                </span>
                <span className={styles.listCurrency}>
                  <span>ZEC</span>
                  6.35
                </span>
              </a>
              <a href="javascript: void(0);" className={styles.listItem}>
                <span className={styles.listPercents}>
                  <span>-2.8%</span>
                  0.00000152
                </span>
                <span className={styles.listCurrency}>
                  <span>ZCL</span>
                  1.03
                </span>
              </a>
            </Affix>
          </div>
          <div className={styles.content}>
            <div className="utils__title utils__title--flat mb-3">
              <strong>Bittrex Live Market</strong>
            </div>
            <div className="card">
              <div className="card-body">
                <div style={{ height: 400 }}>
                  {graphData !== null && <TradeChart type="hybrid" data={graphData} />}
                </div>
              </div>
            </div>
            <div className="utils__title utils__title--flat mb-3">
              <strong>Order Book</strong>
            </div>
            <div className="card">
              <div className="card-body">
                <div className={styles.order}>
                  <div className={styles.orderLeft}>
                    <div className={`${styles.table} text-nowrap`}>
                      <Table
                        className="utils__scrollTable"
                        scroll={{ x: '100%' }}
                        columns={ordersSellColumns}
                        dataSource={orderBook.sell}
                        pagination={{ position: 'bottom' }}
                        size="small"
                      />
                    </div>
                  </div>
                  <div className={styles.orderMiddle}>
                    <div className={styles.form}>
                      <Form layout="vertical">
                        <Form.Item>
                          <Radio.Group
                            onChange={this.toggleOrderType}
                            value={orderType}
                            style={{ width: '100%' }}
                          >
                            <Radio.Button value="buy" style={{ width: '50%', textAlign: 'center' }}>
                              BUY
                            </Radio.Button>
                            <Radio.Button
                              value="sell"
                              style={{ width: '50%', textAlign: 'center' }}
                            >
                              SELL
                            </Radio.Button>
                          </Radio.Group>
                        </Form.Item>
                        {orderType === 'buy' && (
                          <div>
                            <span className={styles.formLabel}>ORDER TYPE</span>
                            <Form.Item>
                              <Select defaultValue="limit">
                                <Select.Option value="limit">Limit (Default)</Select.Option>
                                <Select.Option value="conditional">Conditional</Select.Option>
                              </Select>
                            </Form.Item>
                            <span className={styles.formLabel}>QUANTITY (BTC)</span>
                            <Form.Item>
                              <Input defaultValue="0.00000000" />
                            </Form.Item>
                            <span className={styles.formLabel}>BID PRICE</span>
                            <Form.Item>
                              <Input defaultValue="0.00645198" />
                            </Form.Item>
                            <span className={styles.formLabel}>TOTAL</span>
                            <Form.Item>
                              <Input defaultValue="0.00000000" />
                            </Form.Item>
                            <span className={styles.formLabel}>TIME IN FORCE</span>
                            <Form.Item>
                              <Select defaultValue="good">
                                <Select.Option value="good">
                                  Good &#39;Til Cancelled (Default)
                                </Select.Option>
                                <Select.Option value="immediate">Immediate or Cancel</Select.Option>
                              </Select>
                            </Form.Item>
                            <div className="btn btn-success" style={{ width: '100%' }}>
                              <strong>BUY BTC</strong>
                            </div>
                            <div className="my-3 text-center">
                              <div>
                                <strong>Available Balance</strong>
                              </div>
                              <div>12.92520000 BTC</div>
                              <div>1450.00 USD</div>
                              <div>
                                <a
                                  href="javascript: void(0);"
                                  className="utils__link--blue utils__link--underlined"
                                >
                                  <strong>Max Buy</strong>
                                </a>
                              </div>
                            </div>
                          </div>
                        )}
                        {orderType === 'sell' && (
                          <div>
                            <span className={styles.formLabel}>ORDER TYPE</span>
                            <Form.Item>
                              <Select defaultValue="limit">
                                <Select.Option value="limit">Limit (Default)</Select.Option>
                                <Select.Option value="conditional">Conditional</Select.Option>
                              </Select>
                            </Form.Item>
                            <span className={styles.formLabel}>QUANTITY (BTC)</span>
                            <Form.Item>
                              <Input defaultValue="0.00000000" />
                            </Form.Item>
                            <span className={styles.formLabel}>ASK PRICE</span>
                            <Form.Item>
                              <Input defaultValue="0.00645198" />
                            </Form.Item>
                            <span className={styles.formLabel}>TOTAL</span>
                            <Form.Item>
                              <Input defaultValue="0.00000000" />
                            </Form.Item>
                            <span className={styles.formLabel}>TIME IN FORCE</span>
                            <Form.Item>
                              <Select defaultValue="good">
                                <Select.Option value="good">
                                  Good &#39;Til Cancelled (Default)
                                </Select.Option>
                                <Select.Option value="immediate">Immediate or Cancel</Select.Option>
                              </Select>
                            </Form.Item>
                            <div className="btn btn-danger" style={{ width: '100%' }}>
                              <strong>SELL BTC</strong>
                            </div>
                            <div className="my-3 text-center">
                              <div>
                                <strong>Available Balance</strong>
                              </div>
                              <div>12.92520000 BTC</div>
                              <div>1450.00 USD</div>
                              <div>
                                <a
                                  href="javascript: void(0);"
                                  className="utils__link--blue utils__link--underlined"
                                >
                                  <strong>Max SELL</strong>
                                </a>
                              </div>
                            </div>
                          </div>
                        )}
                      </Form>
                    </div>
                  </div>
                  <div className={styles.orderRight}>
                    <div className={`${styles.table} text-nowrap`}>
                      <Table
                        columns={ordersBuyColumns}
                        dataSource={orderBook.buy}
                        pagination={{ position: 'bottom' }}
                        size="small"
                        scroll={{ x: true }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="utils__title utils__title--flat mb-3">
              <strong>Market History</strong>
            </div>
            <div className="card">
              <div className="card-body">
                <div className={`${styles.table} text-nowrap`}>
                  <Table
                    className="utils__scrollTable"
                    scroll={{ x: '100%' }}
                    columns={marketHistoryColumns}
                    dataSource={marketHistory.data}
                    pagination={{ position: 'bottom' }}
                    size="small"
                  />
                </div>
              </div>
            </div>
            <div className="utils__title utils__title--flat mb-3">
              <strong>My Open Orders</strong>
            </div>
            <div className="card">
              <div className="card-body">
                <div>
                  {!myOpenOrders.loaded && (
                    <a href="javascript: void(0);" onClick={this.handleMyOpenOrders}>
                      <Spin spinning={myOpenOrders.loading}>
                        <Alert
                          className={styles.warning}
                          message="Click to view open order details"
                          type="info"
                        />
                      </Spin>
                    </a>
                  )}
                  {myOpenOrders.loaded && (
                    <div className={`${styles.table} text-nowrap`}>
                      <Table
                        className="utils__scrollTable"
                        scroll={{ x: '100%' }}
                        columns={myOrderColumns}
                        dataSource={myOpenOrders.data}
                        pagination={{ position: 'bottom' }}
                        size="small"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="utils__title utils__title--flat mb-3">
              <strong>My Order History</strong>
            </div>
            <div className="card">
              <div className="card-body">
                <div>
                  {!myOrderHistory.loaded && (
                    <a href="javascript: void(0);" onClick={this.handleMyOrderHistory}>
                      <Spin spinning={myOrderHistory.loading}>
                        <Alert
                          className={styles.warning}
                          message="Click to view order history details"
                          type="info"
                        />
                      </Spin>
                    </a>
                  )}
                  {myOrderHistory.loaded && (
                    <div className={`${styles.table} text-nowrap`}>
                      <Table
                        className="utils__scrollTable"
                        scroll={{ x: '100%' }}
                        columns={myOrderColumns}
                        dataSource={myOpenOrders.data}
                        pagination={{ position: 'bottom' }}
                        size="small"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardCrypto
