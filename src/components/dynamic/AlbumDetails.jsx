import React, { Component } from 'react'
import requester from '../../utils/requester'
import Comments from './Comments'
import NotFound from '../common/NotFound'

export default class AlbumDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {album: {}}
  }

  componentDidMount () {
    let id = this.props.match.params.id
    requester.fetchSingleAlbum(id).then((response) => {
      this.setState({
        album: response
      })
    })
  }

  render () {
    if (this.state.album.error) {
      return (<NotFound text={'Unknown album ID'} />)
    }

    if (!this.state.album.title) {
      return null
    }
    return (
      <section className='album'>
        <div className='container text-center'>

          <h2>{this.state.album.title}</h2>

          <div className='row justify-content-center'>

            <div className='col-md-4'>
              <img src={this.state.album.url} alt='album cover' />
              <p>released {this.state.album.year}</p>

              <button type='button' className='btn btn-custom hvr-grow' data-toggle='modal' data-target='#exampleModalCenter'>
              List Tracks
              </button>

              <div className='modal fade' id='exampleModalCenter' tabIndex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>
                <div className='modal-dialog modal-dialog-centered' role='document'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h5 className='modal-title' id='exampleModalLongTitle'>Tracks</h5>
                      <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                        <span aria-hidden='true'>&times;</span>
                      </button>
                    </div>
                    <div className='modal-body'>
                      <div className='col-md-12 track-container'>
                        <div className='tracks'>
                          {this.state.album.tracks.map((track, i) => {
                            return <p className='track' key={i}>{i + 1}. {track} </p>
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-8'>
              <Comments postId={this.props.match.params.id} />
            </div>
          </div>

        </div>
      </section>
    )
  }
}
