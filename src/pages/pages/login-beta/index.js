import React from 'react'
import { Button } from 'antd'
import { Helmet } from 'react-helmet'
import styles from './style.module.scss'
import LoginForm from './LoginForm'

class LoginBeta extends React.Component {
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
        <Helmet title="Login Beta" />
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
            <nav className={styles.loginNav}>
              <ul className={styles.navItems}>
                <li>
                  <a href="javascript: void(0);">&larr; Back</a>
                </li>
                <li>
                  <a className={styles.active} href="javascript: void(0);">
                    Login
                  </a>
                </li>
                <li>
                  <a href="javascript: void(0);">About</a>
                </li>
                <li>
                  <a href="javascript: void(0);">Support</a>
                </li>
              </ul>
            </nav>
          </header>
          <div className={styles.content}>
            <div className={styles.promo}>
              <h1 className="mb-3">Welcome to Clean UI admin template</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&#39;s standard dummy text ever since the 1500s.
              </p>
            </div>
            <div className={styles.formWrapper}>
              <div className={styles.form}>
                <p className={styles.formTitle}>Please log in</p>
                <LoginForm />
              </div>
              <div className={styles.sidebar}>
                <p className={styles.sidebarTitle}>Agile Dev Meetup</p>
                <p className={styles.sidebarSubTitle}>August 2018</p>
                <div className={styles.sidebarContent}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry&#39;s standard dummy text ever since the 1500s.
                  </p>
                  <p>Ipsum has been the industry&#39;s standard dummy text ever since the 1500s.</p>
                </div>
                <div className={styles.sidebarFooter}>
                  <span>
                    <i className="icmn-location mr-3" />
                    New York, USA
                  </span>
                </div>
              </div>
            </div>
          </div>
          <footer className={styles.footer}>
            <ul className={styles.footerNav}>
              <li>
                <a href="javascript: void(0);">Terms of Use</a>
              </li>
              <li>
                <a href="javascript: void(0);">Compliance</a>
              </li>
              <li>
                <a href="javascript: void(0);">Confidential Information</a>
              </li>
              <li>
                <a href="javascript: void(0);">Support</a>
              </li>
              <li>
                <a href="javascript: void(0);">Contacts</a>
              </li>
            </ul>
          </footer>
        </section>
      </div>
    )
  }
}

export default LoginBeta
