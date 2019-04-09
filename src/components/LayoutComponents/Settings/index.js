import React from 'react'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import { Switch } from 'antd'
import styles from './style.module.scss'

const mapStateToProps = ({ settings }) => ({ settings })

@connect(mapStateToProps)
class Settings extends React.Component {
  changeSetting = (setting, value) => {
    const { dispatch } = this.props
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting,
        value,
      },
    })
  }

  closeSettings = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'isSettingsOpen',
        value: false,
      },
    })
  }

  render() {
    const {
      settings: {
        isLightTheme,
        isSettingsOpen,
        isMenuTop,
        isMenuCollapsed,
        isBorderless,
        isMenuShadow,
        isSquaredBorders,
        isFixedWidth,
      },
    } = this.props

    return (
      <div
        className={isSettingsOpen ? `${styles.settings} ${styles.settingsOpened}` : styles.settings}
      >
        <Scrollbars style={{ height: '100vh' }}>
          <div className={styles.container}>
            <div className={styles.title}>
              Theme Settings
              <button
                className={`${styles.close} fa fa-times`}
                onClick={this.closeSettings}
                type="button"
              />
            </div>
            <div className={styles.description}>
              This component &quot;Settings&quot; gives possibility to construct custom blocks with
              any widgets, components and elements inside, like this theme settings
            </div>
            <div className={styles.item}>
              <Switch
                checked={isMenuTop}
                onChange={value => {
                  this.changeSetting('isMenuTop', value)
                }}
              />
              <span className={styles.itemLabel}>Menu Top (Horizontal)</span>
            </div>
            <div className={styles.item}>
              <Switch
                disabled={isMenuTop}
                checked={isMenuCollapsed && !isMenuTop}
                onChange={value => {
                  this.changeSetting('isMenuCollapsed', value)
                }}
              />
              <span className={styles.itemLabel}>Collapsed Menu</span>
            </div>
            <div className={styles.item}>
              <Switch
                disabled={isMenuTop}
                checked={isMenuShadow && !isMenuTop}
                onChange={value => {
                  this.changeSetting('isMenuShadow', value)
                }}
              />
              <span className={styles.itemLabel}>Menu Shadow</span>
            </div>
            <div className={styles.item}>
              <Switch
                checked={isLightTheme}
                onChange={value => {
                  this.changeSetting('isLightTheme', value)
                }}
              />
              <span className={styles.itemLabel}>Light Theme</span>
            </div>
            <div className={styles.item}>
              <Switch
                checked={isBorderless}
                onChange={value => {
                  this.changeSetting('isBorderless', value)
                }}
              />
              <span className={styles.itemLabel}>Borderless Cards</span>
            </div>
            <div className={styles.item}>
              <Switch
                checked={isSquaredBorders}
                onChange={value => {
                  this.changeSetting('isSquaredBorders', value)
                }}
              />
              <span className={styles.itemLabel}>Squared Borders</span>
            </div>
            <div className={styles.item}>
              <Switch
                checked={isFixedWidth}
                onChange={value => {
                  this.changeSetting('isFixedWidth', value)
                }}
              />
              <span className={styles.itemLabel}>Fixed Width</span>
            </div>
          </div>
        </Scrollbars>
      </div>
    )
  }
}

export default Settings
