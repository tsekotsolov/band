import React from 'react'
import UserButtons from './UserButtons'
import {Link} from 'react-router-dom'

let Navigation = (props) => {
  return (
    <nav className='navbar navbar-expand-sm fixed-top navbar-dark bg-dark'>
      <Link to='/' className='navbar-brand'>The Band</Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse justify-content-center' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to='/' className='nav-link  a-custom-nav ' href='#'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-link  a-custom-nav'>About</Link>
          </li>
          <li className='nav-item'>
            <Link to='/albums' className='nav-link  a-custom-nav'>Albums</Link>
          </li>
        </ul>
      </div>
      <UserButtons {...props} />
    </nav>

  )
}

export default Navigation
