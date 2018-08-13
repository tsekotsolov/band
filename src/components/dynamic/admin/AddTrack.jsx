import React, { Component } from 'react'
import {Consumer} from './context'
import {Link} from 'react-router-dom'

export default class AddTrack extends Component {
  render () {
    return (
      <Consumer>
        {value => {
          let {tracks} = value.state

          return (

            <React.Fragment>
              <form className='profile-form' onSubmit={value.submitTrack}>
                <input type='text' className='form-control custom-input' placeholder='Add track' id='track'/>
                <Link to='#' className='btn btn-custom hvr-grow m-2 ' onClick={value.submitTrack}><i className='fa fa-plus' aria-hidden='true' /></Link>
              </form>
              <div className='tracks'>
                <ul className='list-group track-container'>
                  {tracks.map((track, i) => {
                    return (

                      <li className='list-group-item' key={i}>{i + 1}. {track}
                        <span className='icon'><i className='fa fa-trash-o' aria-hidden='true' data-id={i}onClick={value.removeTrackFromDom} /></span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </React.Fragment>

          )
        }}
      </Consumer>
    )
  }
}
