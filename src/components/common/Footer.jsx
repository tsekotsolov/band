import React from 'react'

const Footer = () => {
  return (
    <footer className='fixed-bottom'>
      <div className='container'>
        <div className='row'>
          <div>
            <p>2018 the Band by Tsoloff</p>
          </div>
          <div>
            <ul className='list-inline'>
              <li className='list-inline-item'>
                <a href='http://twitter.com ' className='twitter'>twitter</a>
              </li>
              <li className='list-inline-item'>
                <a href='http://instagram.com' className='google' >google</a>
              </li>
              <li className='list-inline-item'>
                <a href='http://youtube.com' className='youtube' >youtube</a>
              </li>
              <li className='list-inline-item'>
                <a href='http://facebook.com' className='facebook' >facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer
