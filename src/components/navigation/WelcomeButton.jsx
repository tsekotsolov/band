import React, { Component } from 'react'
import observer from '../../utils/observer'
import {Link} from 'react-router-dom'

export default class WelcomeButton extends Component {

  logout = () => observer.trigger('logout')

  render () {
    return (
      <div className='btn-group'>
        <button type='button' className='btn dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
Welcome, {localStorage.getItem('username')}!
        </button>
        <div className='dropdown-menu dropdown-menu-right'>
        {localStorage.role
        ? <React.Fragment>
            <Link to='/addalbum' className='dropdown-item nav-link  a-custom-nav a-custom-nav-album'>Add Album</Link>
            <Link to='/users' className='dropdown-item nav-link  a-custom-nav a-custom-nav-users'>Manage Users</Link>
          </React.Fragment>
        
        : null}
          
          <Link to='/myprofile' className='dropdown-item nav-link  a-custom-nav a-custom-nav-profile' >My Profile</Link>
          <Link to='/' className='dropdown-item nav-link  a-custom-nav a-custom-nav-logout' onClick={this.logout}>Logout</Link>
          
        </div>
      </div>
    )
  }
}
