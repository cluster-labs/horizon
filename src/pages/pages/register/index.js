import React from 'react'
import { Button } from 'antd'
import { Helmet } from 'react-helmet'
import styles from './style.module.scss'
import RegisterForm from './RegisterForm'

class Register extends React.Component {
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
        <Helmet title="Register" />
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquid at autem
                commodi corporis, distinctio dolore eveniet explicabo facere iste laborum nobis
                officiis, placeat praesentium quia, sit soluta vel!
              </p>
            </div>
            <div className={styles.form}>
              <p className={styles.formTitle}>Please log in</p>
              <RegisterForm />
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

export default Register
