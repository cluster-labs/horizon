import React from 'react'
import { Button } from 'antd'
import { Helmet } from 'react-helmet'
import Avatar from 'components/CleanUIComponents/Avatar'
import UnlockForm from './UnlockForm'
import styles from './style.module.scss'

class Lockscreen extends React.Component {
  state = {
    fullScreen: false,
    backgroundNumber: 1,
  }

  setFullscreen = () => {
    const { fullScreen } = this.state
    this.setState({
      fullScreen: !fullScreen,
    })
  }

  changeBackground = () => {
    let { backgroundNumber } = this.state
    if (backgroundNumber === 5) {
      backgroundNumber = 1
    } else {
      backgroundNumber += 1
    }
    this.setState({
      backgroundNumber,
    })
  }

  render() {
    const { fullScreen, backgroundNumber } = this.state

    return (
      <div>
        <Helmet title="Lockscreen" />
        <section
          className={`${styles.login} ${fullScreen ? styles.fullscreen : styles.windowed}`}
          style={{ backgroundImage: `url('resources/images/photos/${backgroundNumber}.jpeg')` }}
        >
          <header className={styles.header}>
            <a className={styles.logo} href="javascript: void(0);">
              <img src="resources/images/logo-inverse.png" alt="Clean UI Admin Template" />
            </a>
            <div className={styles.styleControls}>
              <Button className="mt-3 mt-xl-0" onClick={this.setFullscreen}>
                {`Set ${fullScreen ? 'Windowed' : 'Fullscreen'}`}
              </Button>
              <Button className="ml-3 mt-3 mt-xl-0" onClick={this.changeBackground}>
                Change Background
              </Button>
            </div>
          </header>
          <div className={styles.content}>
            <div className={styles.form}>
              <div className={styles.user}>
                <Avatar src="resources/images/avatars/1.jpg" border="true" size="90" />
                <p>
                  <i className="icmn-lock" />
                  <strong>Artour Arteezy</strong>
                </p>
              </div>
              <UnlockForm />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Lockscreen
