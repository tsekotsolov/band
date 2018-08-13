import React from 'react'
import {Link} from 'react-router-dom'

const LoginButton = (props) => {
  return (
    <Link to='#' onClick={props.showHideForms.showLoginForm} className='nav-link  a-custom-nav-login a-custom-nav'>LOGIN</Link>
  )
}

export default LoginButton
