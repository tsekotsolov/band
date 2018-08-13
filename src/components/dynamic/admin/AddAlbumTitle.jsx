import React, { Component } from 'react'
import {Consumer} from './context'
import {Link} from 'react-router-dom'

export default class AddAlbumTitle extends Component {
  render () {
    return (
      <Consumer>
        {value => {
          let {title} = value.state

          return (

            <React.Fragment>
              <form className='profile-form' id='title-link' onSubmit={value.submit}>
                <input type='text' className='form-control custom-input' placeholder='Add title' id='title' />
                <Link to='#' className='btn btn-custom hvr-grow m-2 ' id='title-link' onClick={value.submit}><i className='fa fa-plus' aria-hidden='true' id='title-link' /></Link>
              </form>
              <div className='tracks'>
                <ul className='list-group track-container'>
                  {title
                    ? <li className='list-group-item' >{title}
                      <span className='icon'><i className='fa fa-trash-o' aria-hidden='true' onClick={value.removeFromDom} id='title-remove' /></span>
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
