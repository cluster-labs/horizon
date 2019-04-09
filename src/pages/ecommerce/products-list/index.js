import React from 'react'
import { Table, Icon, Input, Button } from 'antd'
import { Helmet } from 'react-helmet'
import table from './data.json'
import styles from './style.module.scss'

class ProductsList extends React.Component {
  state = {
    tableData: table.data,
    data: table.data,
    filterDropdownVisible: false,
    searchText: '',
    filtered: false,
  }

  onInputChange = e => {
    this.setState({ searchText: e.target.value })
  }

  onSearch = () => {
    const { searchText, tableData } = this.state
    const reg = new RegExp(searchText, 'gi')
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: tableData
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
                    i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text,
                  )}
              </span>
            ),
          }
        })
        .filter(record => !!record),
    })
  }

  linkSearchInput = node => {
    this.searchInput = node
  }

  render() {
    const { data, searchText, filtered, filterDropdownVisible } = this.state

    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: text => (
          <a className="utils__link--underlined" href="javascript: void(0);">
            {`#${text}`}
          </a>
        ),
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: 'Thumbnail',
        dataIndex: 'thumbnail',
        key: 'thumbnail',
        render: text => (
          <a href="javascript: void(0);" className={styles.thumbnail}>
            <img src={text} alt="" />
          </a>
        ),
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
        render: text => (
          <a className="utils__link--underlined" href="javascript: void(0);">
            {text}
          </a>
        ),
        filterDropdown: (
          <div className="custom-filter-dropdown">
            <Input
              ref={this.linkSearchInput}
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
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        sorter: (a, b) => a.type.length - b.type.length,
      },
      {
        title: 'Attribute Set',
        dataIndex: 'attribute',
        key: 'attribute',
        sorter: (a, b) => a.attribute.length - b.attribute.length,
      },
      {
        title: 'SKU',
        dataIndex: 'sku',
        key: 'sku',
        sorter: (a, b) => a.sku.length - b.sku.length,
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: text => <span>{`$${text}`}</span>,
        sorter: (a, b) => a.price - b.price,
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        sorter: (a, b) => a.quantity - b.quantity,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        sorter: (a, b) => a.status.length - b.status.length,
        render: record => <span className="font-size-12 badge badge-success">{record}</span>,
      },
      {
        title: 'Action',
        key: 'action',
        render: () => (
          <span>
            <Button icon="edit" className="mr-1" size="small">
              View
            </Button>
            <Button icon="cross" size="small">
              Remove
            </Button>
          </span>
        ),
      },
    ]

    return (
      <div>
        <Helmet title="Products List" />
        <div className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>Products List</strong>
            </div>
          </div>
          <div className="card-body">
            <Table
              className="utils__scrollTable"
              scroll={{ x: '100%' }}
              columns={columns}
              dataSource={data}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ProductsList
