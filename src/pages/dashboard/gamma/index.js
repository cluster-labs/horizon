import React from 'react'
import { Helmet } from 'react-helmet'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
import { Table } from 'antd'
import ProgressCard from 'components/CleanUIComponents/ProgressCard'
import ShortItemInfo from 'components/CleanUIComponents/ShortItemInfo'
import Donut from 'components/CleanUIComponents/Donut'

import {
  progressCardsData,
  newUsersData,
  inboundBandwidthData,
  outboundBandwidthData,
  topPhotosData,
  topPhotosGraphData,
  financeStatsData,
  supportCasesTableData,
  supportCasesPieData,
} from './data.json'

import styles from './style.module.scss'

const boundChartistOptions = {
  showPoint: true,
  showLine: true,
  showArea: true,
  fullWidth: true,
  showLabel: false,
  axisX: {
    showGrid: false,
    showLabel: false,
    offset: 0,
  },
  axisY: {
    showGrid: false,
    showLabel: false,
    offset: 0,
  },
  chartPadding: 0,
  low: 0,
  plugins: [
    ChartistTooltip({
      anchorToPoint: false,
      appendToBody: true,
      seriesName: false,
    }),
  ],
}

const supportCasesPieOptions = {
  donut: true,
  donutWidth: 35,
  showLabel: false,
  plugins: [
    ChartistTooltip({
      anchorToPoint: false,
      appendToBody: true,
      seriesName: false,
    }),
  ],
}

const supportCasesTableColumns = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Amount',
    key: 'amount',
    dataIndex: 'amount',
    render: amount => {
      if (amount === 'Negative') {
        return <span className="text-danger font-weight-bold">{amount}</span>
      }
      return <span className="text-primary font-weight-bold">{amount}</span>
    },
  },
]

class DashboardGamma extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Dashboard Gamma" />
        <div className="row">
          <div className="col-xl-12">
            <div className="utils__title utils__title--flat mb-3">
              <strong className="text-uppercase font-size-16">Progress Information</strong>
            </div>
            <div className="row">
              {progressCardsData.map(item => (
                <div className="col-lg-6" key={item.title}>
                  <ProgressCard
                    title={item.title}
                    note={item.note}
                    currentValue={item.currentValue}
                    percent={item.percent}
                    dataColor={item.dataColor}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4">
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header">
                    <div className="utils__title utils__title--flat">
                      <strong className="text-uppercase font-size-16">Inbound Bandwidth</strong>
                    </div>
                  </div>
                  <div className="card-body">
                    <span className="font-size-36 font-weight-bold text-primary">246</span>
                  </div>
                  <ChartistGraph
                    data={inboundBandwidthData}
                    options={boundChartistOptions}
                    type="Line"
                    className="height-200"
                  />
                </div>
              </div>
              <div className="col-xl-12">
                <div className="graphCard card">
                  <div className="card-header">
                    <div className="utils__title utils__title--flat">
                      <strong className="text-uppercase font-size-16">Outbound Bandwidth</strong>
                    </div>
                  </div>
                  <div className="card-body">
                    <span className="font-size-36 font-weight-bold text-success">52</span>
                  </div>
                  <div className="utils__chartist utils__chartist--success">
                    <ChartistGraph
                      data={outboundBandwidthData}
                      options={boundChartistOptions}
                      type="Line"
                      className="height-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card graphCard card--fullHeight">
              <div className="card-header">
                <div className="utils__title utils__title--flat">
                  <strong className="text-uppercase font-size-16">Top photos</strong>
                </div>
              </div>
              <div className="card-body">
                {topPhotosData.map(item => {
                  const actionData = (
                    <span style={{ color: item.actionDataColor }}>{item.actionData}</span>
                  )
                  return (
                    <ShortItemInfo
                      key={item.name}
                      img={item.img}
                      name={item.name}
                      note={item.note}
                      actionData={actionData}
                    />
                  )
                })}
              </div>
              <div className="utils__chartist utils__chartist--danger">
                <ChartistGraph
                  data={topPhotosGraphData}
                  options={boundChartistOptions}
                  type="Line"
                  className="height-300"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card card--fullHeight">
              <div className="card-header">
                <div className="utils__title utils__title--flat">
                  <strong className="text-uppercase font-size-16">New Users</strong>
                </div>
              </div>
              <div className="card-body">
                {newUsersData.map(item => {
                  const actionData = (
                    <a href="javascript: void(0);" className="btn btn-sm btn-outline-default">
                      Follow
                    </a>
                  )
                  return (
                    <ShortItemInfo
                      key={item.name}
                      img={item.img}
                      name={item.name}
                      note={item.note}
                      actionData={actionData}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card card--fullHeight">
              <div className="card-header">
                <div className="utils__title utils__title--flat">
                  <strong className="text-uppercase font-size-16">Support cases</strong>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="mb-3">
                      <Table
                        className="utils__scrollTable"
                        scroll={{ x: '100%' }}
                        dataSource={supportCasesTableData}
                        columns={supportCasesTableColumns}
                        pagination={false}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div
                      className={`h-100 d-flex flex-column justify-content-center align-items-center ${
                        styles.chartPieExample
                      }`}
                    >
                      <ChartistGraph
                        data={supportCasesPieData}
                        type="Pie"
                        options={supportCasesPieOptions}
                      />
                      <div className="text-center">
                        <span className="mr-2">
                          <Donut type="success" name="Ready" />
                        </span>
                        <span className="mr-2">
                          <Donut type="primary" name="In progress" />
                        </span>
                        <span className="mr-2">
                          <Donut type="danger" name="Defected" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card card--fullHeight">
              <div className="card-header">
                <div className="utils__title utils__title--flat">
                  <strong className="text-uppercase font-size-16">Finance Stats</strong>
                </div>
              </div>
              <div className="card-body">
                {financeStatsData.map(item => {
                  const actionData = (
                    <span style={{ color: item.actionDataColor }}>{item.actionData}</span>
                  )
                  return (
                    <ShortItemInfo
                      key={item.name}
                      img={item.img}
                      name={item.name}
                      note={item.note}
                      actionData={actionData}
                      size="large"
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardGamma
