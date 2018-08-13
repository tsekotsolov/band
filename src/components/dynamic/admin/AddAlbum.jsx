import React, { Component } from 'react'
import AlbumCover from './AlbumCover'
import AddTrack from './AddTrack'
import {Provider, Consumer} from './context'
import AddAlbumTitle from './AddAlbumTitle'
import AddAlbumYear from './AddAlbumYear'
import {Link} from 'react-router-dom'


class AddAlbum extends Component {
  render () {
    return (
      <Provider>
        <section className='profile'>
          <div className='container text-center'>
            <h2>Add Album</h2>
            <div className='row justify-content-center'>
              <AlbumCover />
              <div className='col-md-8'>
                <AddAlbumTitle />
                <AddAlbumYear />
                <AddTrack />
              </div>
            </div>
          </div>
          <Consumer>
            {(value) => {
              return (
                <Link to='#' className='btn btn-custom hvr-grow m-2 ' onClick={value.uploadAlbum}>Upload Album</Link>
              )
            }}
          </Consumer>
        </section>
      </Provider>
    )
  }
}

export default AddAlbum
