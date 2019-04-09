import React from 'react'
import { Slider, Calendar, Badge, Table, Input, Dropdown, Button, Icon, Menu } from 'antd'
import { Helmet } from 'react-helmet'
import ChartistGraph from 'react-chartist'
import Donut from 'components/CleanUIComponents/Donut'
import UserCard from 'components/CleanUIComponents/UserCard'
import ProfileHeadCard from 'components/CleanUIComponents/ProfileHeadCard'
import ProgressGroup from 'components/CleanUIComponents/ProgressGroup'
import SliderCard from 'components/CleanUIComponents/SliderCard'
import InfoCard from 'components/CleanUIComponents/InfoCard'
import Chat from 'components/CleanUIComponents/Chat'
import {
  rangeSlider,
  calendarData,
  weekChartistData,
  monthCartistData,
  taskTableData,
  tableData,
} from './data.json'

// Slider Range Settings //
const rangeMarks = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  60: '60',
  70: '70',
  80: '80',
  90: '90',
  100: '100',
}

// Calendar Settings //
function getListData(value) {
  const date = value.date()
  const itemName = `date_${date}`
  let listData
  if (calendarData[itemName] !== undefined) {
    listData = calendarData[itemName]
  }
  return listData || []
}

function dateCellRender(value) {
  const listData = getListData(value)
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  )
}

// Week Chartist Settings //
const weekChartistOptions = {
  fullWidth: true,
  showArea: false,
  chartPadding: {
    right: 30,
    left: 0,
  },
  plugins: [
    // tooltip({
    //   seriesName: false,
    // }),
  ],
}

// Month Chartist Settings //
const monthChartistOptions = {
  seriesBarDistance: 10,
}

class DashboardBeta extends React.Component {
  state = {
    taskTableSelectedRowKeys: [],
    filterDropdownVisible: false,
    searchText: '',
    filtered: false,
    data: tableData,
  }

  // Task Table Settings //
  onSelectChange = taskTableSelectedRowKeys => {
    this.setState({ taskTableSelectedRowKeys })
  }

  onInputChange = e => {
    this.setState({ searchText: e.target.value })
  }

  onSearch = () => {
    const { searchText, data } = this.state
    const reg = new RegExp(searchText, 'gi')
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: data
        .map(record => {
          const match = record.name.match(reg)
          if (!match) {
            return null
          }
          return {
            ...record,
            name: (
              <span>
                {record.name
                  .split(reg)
                  .map((text, i) =>
                    i > 0
                      ? [<span style={{ backgroundColor: 'yellow' }}>{match[0]}</span>, text]
                      : text,
                  )}
              </span>
            ),
          }
        })
        .filter(record => !!record),
    })
  }

  refSearchInput = node => {
    this.searchInput = node
  }

  render() {
    const {
      taskTableSelectedRowKeys,
      searchText,
      filtered,
      filterDropdownVisible,
      data,
    } = this.state

    // Task Table Settings //
    const taskTableRowSelection = {
      taskTableSelectedRowKeys,
      onChange: this.onSelectChange,
    }

    const dropdownMenu = (
      <Menu>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    )

    const taskTableColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a href="javascript: void(0);">{text}</a>,
      },
      {
        title: 'Username',
        dataIndex: 'username',
        render: text => <a href="javascript: void(0);">{text}</a>,
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        render: () => (
          <div className="pull-right">
            <Dropdown overlay={dropdownMenu}>
              <Button style={{ marginLeft: 8 }} size="small">
                Action <Icon type="down" />
              </Button>
            </Dropdown>
          </div>
        ),
      },
    ]

    const tableColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filterDropdown: (
          <div className="custom-filter-dropdown">
            <Input
              ref={this.refSearchInput}
              placeholder="Search name"
              value={searchText}
              onChange={this.onInputChange}
              onPressEnter={this.onSearch}
            />
            <Button type="primary" onClick={this.onSearch}>
              Search
            </Button>
          </div>
        ),
        filterIcon: <Icon type="search" style={{ color: filtered ? '#108ee9' : '#aaa' }} />,
        filterDropdownVisible,
        onFilterDropdownVisibleChange: visible => {
          this.setState(
            {
              filterDropdownVisible: visible,
            },
            () => this.searchInput && this.searchInput.focus(),
          )
        },
      },
      {
        title: 'Position',
        dataIndex: 'position',
        key: 'position',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Office',
        dataIndex: 'office',
        key: 'office',
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Salary',
        dataIndex: 'salary',
        key: 'salary',
        sorter: (a, b) => a.salary - b.salary,
      },
    ]

    return (
      <div>
        <Helmet title="Dashboard Beta" />
        <div className="row">
          <div className="col-lg-12 col-xl-6">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Account Information</strong>
                </div>
                <div className="utils__titleDescription">
                  Block with important Account information
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-12">
                    <ProfileHeadCard />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Work Progress</strong>
                </div>
                <div className="utils__titleDescription">
                  Block with important Work Progress information
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-12">
                    <ProgressGroup />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Employees</strong>
                </div>
                <div className="utils__titleDescription">
                  Block with Employees important information
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <UserCard type="primary" />
                  </div>
                  <div className="col-md-6">
                    <UserCard />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Task Table</strong>
                </div>
                <div className="utils__titleDescription">
                  Block with important Task Table information
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <Table
                      className="utils__scrollTable"
                      scroll={{ x: '100%' }}
                      columns={taskTableColumns}
                      dataSource={taskTableData}
                      rowSelection={taskTableRowSelection}
                      pagination={false}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Information Cards</strong>
                </div>
                <div className="utils__titleDescription">
                  Block with important Information Cards information
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <InfoCard form="interactive" icon="database" type="danger" />
                  </div>
                  <div className="col-md-6">
                    <InfoCard form="interactive" icon="database" btnType="success" type="success" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-xl-6">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Server Info</strong>
                </div>
                <div className="utils__titleDescription">
                  Block with important Server Info information
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <SliderCard />
                  </div>
                  <div className="col-lg-6">
                    <SliderCard inverse />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Server Statistics</strong>
                </div>
                <div className="utils__titleDescription">
                  Block with important Server Statistics information
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <InfoCard form="stats" icon="database" type="primary" />
                    <InfoCard form="stats" icon="users" type="empty" />
                  </div>
                  <div className="col-lg-6">
                    <InfoCard form="stats" icon="bullhorn" type="success" />
                    <InfoCard form="stats" icon="price-tags" type="empty" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Server Configuration</strong>
                </div>
                <div className="utils__titleDescription">
                  Block with important Server Configuration information
                </div>
              </div>
              <div className="card-body">
                <div className="mb-5">
                  <Slider marks={rangeMarks} defaultValue={rangeSlider.first} />
                </div>
                <div className="mb-4">
                  <Slider range marks={rangeMarks} defaultValue={rangeSlider.second} />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Week Revenue Statistics, Billions</strong>
                </div>
                <Donut type="primary" name="Nuts" />
                <Donut type="success" name="Apples" />
                <Donut color="yellow" name="Peaches" />
              </div>
              <div className="card-body">
                <ChartistGraph
                  data={weekChartistData}
                  options={weekChartistOptions}
                  type="Line"
                  className="chart-area height-300 mt-4 chartist"
                />
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Month Site Visits Growth, %</strong>
                </div>
                <Donut type="primary" name="Income" />
                <Donut type="success" name="Outcome" />
              </div>
              <div className="card-body">
                <ChartistGraph
                  data={monthCartistData}
                  options={monthChartistOptions}
                  type="Bar"
                  className="chart-area height-300 mt-4 chartist"
                />
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Chat</strong>
                </div>
                <div className="utils__titleDescription">Block with important Chat information</div>
              </div>
              <div className="card-body">
                <Chat />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-lg-3">
                    <InfoCard form="bordered" icon="home" type="danger" />
                  </div>
                  <div className="col-lg-3">
                    <InfoCard form="bordered" icon="key" type="primary" />
                  </div>
                  <div className="col-lg-3">
                    <InfoCard form="bordered" icon="play2" type="warning" />
                  </div>
                  <div className="col-lg-3">
                    <InfoCard form="bordered" icon="database" type="sucess" />
                  </div>
                </div>
              </div>
              <div className="card-body">
                <Table
                  className="utils__scrollTable"
                  scroll={{ x: '100%' }}
                  columns={tableColumns}
                  dataSource={data}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Calendar</strong>
                </div>
                <div className="utils__titleDescription">
                  Block with important Calendar information
                </div>
              </div>
              <div className="card-body">
                <Calendar dateCellRender={dateCellRender} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardBeta
