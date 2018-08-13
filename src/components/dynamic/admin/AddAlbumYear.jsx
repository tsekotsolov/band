import React, { Component } from 'react'
import {Consumer} from './context'
import {Link} from 'react-router-dom'

export default class AddAlbumYear extends Component {
  render () {
    return (
      <Consumer>
        {value => {
          let {year} = value.state

          return (

            <React.Fragment>
              <form className='profile-form' onSubmit={value.submit}>
                <input type='text' className='form-control custom-input' placeholder='Add release year' id='year' />
                <Link to='#' className='btn btn-custom hvr-grow m-2 ' id='year-link' onClick={value.submit}><i className='fa fa-plus'
                  aria-hidden='true' id='year-link' /></Link>
              </form>
              <div className='tracks'>
                <ul className='list-group track-container'>
                  {year
                    ? <li className='list-group-item' >{year}
                      <span className='icon'><i className='fa fa-trash-o' aria-hidden='true' onClick={value.removeFromDom} id='year-remove' /></span>
                    </li>
                    : null
                  }
                </ul>
              </div>
            </React.Fragment>

          )
        }}
      </Consumer>
    )
  }
}
