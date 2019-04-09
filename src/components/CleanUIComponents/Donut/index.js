import React from 'react'
import style from './style.module.scss'

class Donut extends React.Component {
  static defaultProps = {
    name: 'Donut',
    type: 'default',
    color: undefined,
  }

  render() {
    const { name, color, type } = this.props

    return (
      <span className="mr-2 text-nowrap">
        <span
          className={`${style.donut} ${color === undefined ? style[type] : ''}`}
          style={color !== undefined ? { borderColor: color } : {}}
        />
        {name}
      </span>
    )
  }
}

export default Donut
