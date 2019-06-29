import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Layout } from 'antd'
import store from 'store'
import { Scrollbars } from 'react-custom-scrollbars'
import _ from 'lodash'
import styles from './style.module.scss'

const { Sider } = Layout
const { SubMenu, Divider } = Menu

const mapStateToProps = ({ menu, settings }) => ({
  menuData: menu.menuLeftData,
  isMenuCollapsed: settings.isMenuCollapsed,
  isMobileView: settings.isMobileView,
  isSettingsOpen: settings.isSettingsOpen,
  isLightTheme: settings.isLightTheme,
  isMobileMenuOpen: settings.isMobileMenuOpen,
})

@withRouter
@connect(mapStateToProps)
class MenuLeft extends React.Component {
  state = {
    selectedKeys: store.get('app.menu.selectedKeys') || [],
    openedKeys: store.get('app.menu.openedKeys') || [],
  }

  componentWillMount() {
    this.setSelectedKeys(this.props)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isMenuCollapsed && !newProps.isMobileView) {
      this.setState({
        openedKeys: [],
      })
    }
    this.setSelectedKeys(newProps)
  }

  setSelectedKeys = props => {
    const { menuData } = this.props
    const flattenItems = (items, key) =>
      items.reduce((flattenedItems, item) => {
        flattenedItems.push(item)
        if (Array.isArray(item[key])) {
          return flattenedItems.concat(flattenItems(item[key], key))
        }
        return flattenedItems
      }, [])
    const selectedItem = _.find(flattenItems(menuData, 'children'), [
      'url',
      props.location.pathname,
    ])
    this.setState({
      selectedKeys: selectedItem ? [selectedItem.key] : [],
    })
  }

  onCollapse = (value, type) => {
    const { dispatch, isMenuCollapsed } = this.props
    if (type === 'responsive' && isMenuCollapsed) {
      return
    }

    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'isMenuCollapsed',
        value: !isMenuCollapsed,
      },
    })

    this.setState({
      openedKeys: [],
    })
  }

  onOpenChange = openedKeys => {
    store.set('app.menu.openedKeys', openedKeys)
    this.setState({
      openedKeys,
    })
  }

  handleClick = e => {
    const { dispatch, isSettingsOpen } = this.props
    store.set('app.menu.selectedKeys', [e.key])
    // custom action on settings menu item
    if (e.key === 'settings') {
      dispatch({
        type: 'settings/CHANGE_SETTING',
        payload: {
          setting: 'isSettingsOpen',
          value: !isSettingsOpen,
        },
      })
      return
    }
    this.setState({
      selectedKeys: [e.key],
      // openKeys: e.keyPath,
    })
  }

  generateMenuItems = () => {
    const { menuData = [] } = this.props
    const generateItem = item => {
      const { key, title, url, icon, disabled, pro } = item
      if (item.divider) {
        return <Divider key={Math.random()} />
      }
      if (item.url) {
        return (
          <Menu.Item key={key} disabled={disabled}>
            {item.target ? (
              <a href={url} target={item.target} rel="noopener noreferrer">
                {icon && <span className={`${icon} ${styles.icon} icon-collapsed-hidden`} />}
                <span className={styles.title}>{title}</span>
                {pro && (
                  <span className="badge badge-primary badge-collapsed-hidden ml-2">PRO</span>
                )}
              </a>
            ) : (
              <Link to={url}>
                {icon && <span className={`${icon} ${styles.icon} icon-collapsed-hidden`} />}
                <span className={styles.title}>{title}</span>
                {pro && (
                  <span className="badge badge-primary badge-collapsed-hidden ml-2">PRO</span>
                )}
              </Link>
            )}
          </Menu.Item>
        )
      }
      return (
        <Menu.Item key={key} disabled={disabled}>
          {icon && <span className={`${icon} ${styles.icon} icon-collapsed-hidden`} />}
          <span className={styles.title}>{title}</span>
          {pro && <span className="badge badge-primary badge-collapsed-hidden ml-2">PRO</span>}
        </Menu.Item>
      )
    }

    const generateSubmenu = items =>
      items.map(menuItem => {
        if (menuItem.children) {
          const subMenuTitle = (
            <span key={menuItem.key}>
              <span className={styles.title}>{menuItem.title}</span>
              {menuItem.icon && <span className={`${menuItem.icon} ${styles.icon}`} />}
            </span>
          )
          return (
            <SubMenu title={subMenuTitle} key={menuItem.key}>
              {generateSubmenu(menuItem.children)}
            </SubMenu>
          )
        }
        return generateItem(menuItem)
      })

    return menuData.map(menuItem => {
      if (menuItem.children) {
        const subMenuTitle = (
          <span key={menuItem.key}>
            <span className={styles.title}>{menuItem.title}</span>
            {menuItem.icon && <span className={`${menuItem.icon} ${styles.icon}`} />}
          </span>
        )
        return (
          <SubMenu title={subMenuTitle} key={menuItem.key}>
            {generateSubmenu(menuItem.children)}
          </SubMenu>
        )
      }
      return generateItem(menuItem)
    })
  }

  render() {
    const { selectedKeys, openedKeys } = this.state
    const { isMobileView, isMenuCollapsed, isLightTheme } = this.props
    const menuSettings = isMobileView
      ? {
          width: 256,
          collapsible: false,
          collapsed: false,
          onCollapse: this.onCollapse,
        }
      : {
          width: 256,
          collapsible: true,
          collapsed: isMenuCollapsed,
          onCollapse: this.onCollapse,
          breakpoint: 'lg',
        }

    const menu = this.generateMenuItems()

    return (
      <Sider
        {...menuSettings}
        className={isLightTheme ? `${styles.menu} ${styles.light}` : styles.menu}
      >
        <div className={styles.logo}>
          <div className={styles.logoContainer}>
            <img
              src={`resources/images/logo-inverse${menuSettings.collapsed ? '-mobile' : ''}.png`}
              alt=""
            />
          </div>
        </div>
        <Scrollbars
          className={isMobileView ? styles.scrollbarMobile : styles.scrollbarDesktop}
          renderThumbVertical={({ style, ...props }) => (
            <div
              {...props}
              style={{
                ...style,
                width: '4px',
                borderRadius: 'inherit',
                backgroundColor: '#c5cdd2',
                left: '1px',
              }}
            />
          )}
          autoHide
        >
          <Menu
            theme={isLightTheme ? 'light' : 'dark'}
            onClick={this.handleClick}
            selectedKeys={selectedKeys}
            openKeys={openedKeys}
            onOpenChange={this.onOpenChange}
            mode="inline"
            className={styles.navigation}
          >
            {menu}
          </Menu>
        </Scrollbars>
      </Sider>
    )
  }
}

export default MenuLeft
