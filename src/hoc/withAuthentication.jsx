import React, { Component } from 'react'
const withAuthentication = (WrappedComponent) => {
  return class extends Component {
    render () {
      return (
        localStorage.role
          ? <WrappedComponent {...this.props} />
          : null
      )
    }
  }
}
export default withAuthentication
