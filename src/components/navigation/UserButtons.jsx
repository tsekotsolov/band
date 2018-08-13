import React, { Component } from 'react'
import WelcomeButton from './WelcomeButton'
import LoginButton from './LoginButton'

export default class UserButtons extends Component {
  render () {
    return (
      <div className='login-user' >
        {localStorage.getItem('authToken') && localStorage.username !== 'defaultUser' ? <WelcomeButton /> : <LoginButton {...this.props} />}
      </div>
    )
  }
}
