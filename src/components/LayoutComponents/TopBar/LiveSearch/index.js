import React from 'react'
import { Input, Icon, Checkbox } from 'antd'
import { injectIntl } from 'react-intl'
import styles from './style.module.scss'

@injectIntl
class LiveSearch extends React.Component {
  state = {
    showSearch: false,
    searchText: '',
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown, false)
  }

  showLiveSearch = () => {
    setTimeout(() => {
      this.searchInput.focus()
    }, 100)
    this.setState({
      showSearch: true,
    })
  }

  changeSearchText = e => {
    this.setState({
      searchText: e.target.value,
    })
  }

  hideLiveSearch = () => {
    this.searchInput.blur()
    this.setState({
      showSearch: false,
      searchText: '',
    })
  }

  handleKeyDown = event => {
    const { showSearch } = this.state
    if (showSearch) {
      const key = event.keyCode.toString()
      if (key === '27') {
        this.hideLiveSearch()
      }
    }
  }

  handleNode = node => {
    this.searchInput = node
  }

  render() {
    const { showSearch, searchText } = this.state
    const {
      intl: { formatMessage },
    } = this.props
    return (
      <div className="d-inline-block mr-4">
        <Input
          className={styles.extInput}
          placeholder={formatMessage({ id: 'topBar.typeToSearch' })}
          prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
          style={{ width: 200 }}
          onFocus={this.showLiveSearch}
        />
        <div
          className={`${
            showSearch ? `${styles.livesearch} ${styles.livesearchVisible}` : styles.livesearch
          }`}
          id="livesearch"
        >
          <button className={styles.close} type="button" onClick={this.hideLiveSearch}>
            <span className="utils__visibilityHidden">Закрыть</span>
            <i className="icmn-cross" />
          </button>
          <div className="container-fluid">
            <div className={styles.wrapper}>
              <div className={styles.logoContainer}>
                <img className={styles.logo} src="resources/images/logo.png" alt="" />
              </div>
              <input
                type="search"
                className={styles.searchInput}
                value={searchText}
                onChange={this.changeSearchText}
                id="livesearchInput"
                placeholder="Type to search..."
                ref={this.handleNode}
              />
              <ul className={styles.options}>
                <li className={`${styles.option} ${styles.optionCheckbox}`}>
                  <Checkbox>Search within page</Checkbox>
                </li>
                <li className={styles.option}>Press enter to search</li>
              </ul>
              <div className={styles.results}>
                <div className={styles.resultsTitle}>
                  <span>Pages Search Results</span>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className={styles.resultContent}>
                      <div
                        className={styles.resultThumb}
                        style={{ backgroundImage: 'url(resources/images/photos/1.jpeg)' }}
                      >
                        #1
                      </div>
                      <div className={styles.result}>
                        <div className={styles.resultText}>Text from input field must be here</div>
                        <div className={styles.resultSource}>In some partition</div>
                      </div>
                    </div>
                    <div className={styles.resultContent}>
                      <div
                        className={styles.resultThumb}
                        style={{ backgroundImage: 'url(resources/images/photos/2.jpeg)' }}
                      >
                        KF
                      </div>
                      <div className={styles.result}>
                        <div className={styles.resultText}>Text from input field must be here</div>
                        <div className={styles.resultSource}>In some partition</div>
                      </div>
                    </div>
                    <div className={styles.resultContent}>
                      <div
                        className={styles.resultThumb}
                        style={{ backgroundImage: 'url(resources/images/photos/3.jpeg)' }}
                      >
                        GF
                      </div>
                      <div className={styles.result}>
                        <div className={styles.resultText}>Text from input field must be here</div>
                        <div className={styles.resultSource}>In some partition</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className={styles.resultContent}>
                      <div className={styles.resultThumb}>01</div>
                      <div className={styles.result}>
                        <div className={styles.resultText}>Text from input field must be here</div>
                        <div className={styles.resultSource}>In some partition</div>
                      </div>
                    </div>
                    <div className={styles.resultContent}>
                      <div className={styles.resultThumb}>02</div>
                      <div className={styles.result}>
                        <div className={styles.resultText}>Text from input field must be here</div>
                        <div className={styles.resultSource}>In some partition</div>
                      </div>
                    </div>
                    <div className={styles.resultContent}>
                      <div className={styles.resultThumb}>03</div>
                      <div className={styles.result}>
                        <div className={styles.resultText}>Text from input field must be here</div>
                        <div className={styles.resultSource}>In some partition</div>
                      </div>
                    </div>
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

export default LiveSearch
