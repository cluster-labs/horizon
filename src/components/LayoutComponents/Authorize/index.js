import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { notification } from 'antd'

@connect(({ user }) => ({ user }))
class Authorize extends React.Component {
  render() {
    const {
      user: { role },
    } = this.props // current user role
    const { children, redirect = false, to = '/404', roles = [] } = this.props
    const authorized = roles.includes(role)
    const AuthorizedChildren = () => {
      // if user not equal needed role and if component is a page - make redirect to needed route
      if (!authorized && redirect) {
        notification.error({
          message: 'Unauthorized Access',
          description: 'You have no rights to access this page!',
        })
        return <Redirect to={to} />
      }
      // if user not authorized return null to component
      if (!authorized) {
        return null
      }
      // if access is successful render children
      return <div>{children}</div>
    }
    return AuthorizedChildren()
  }
}

export default Authorize
