import React from 'react'
import style from './style.module.scss'

class Avatar extends React.Component {
  static defaultProps = {
    size: false,
    border: false,
    borderColor: '#d2d9e5',
    src: '',
  }

  render() {
    const { size, borderColor, src, border } = this.props
    return (
      <a
        className={`${style.avatar} ${size ? style[`size${size}`] : ''} ${
          border ? style.border : ''
        }`}
        href="javascript: void(0);"
        style={{
          borderColor,
        }}
      >
        <img src={src} alt="User" />
      </a>
    )
  }
}

export default Avatar
