import React, { Component } from 'react'
import {Consumer} from './context'

export default class AlbumCover extends Component {

  render () {
    return (
      <Consumer>
        {value => {
          return (
            <div className='col-md-4'>
              <div id='avatar'>
                <img src={value.state.url} alt='cover' />
              </div>
              <button type='button' className='btn btn-custom hvr-grow' data-toggle='modal' data-target='#exampleModalCenter' id='upload_widget_opener' onClick={value.cloudinaryWidget}>
                        Add Cover
              </button>
            </div>
          )
        }
        }
      </Consumer>
    )
  }
}
