import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class HeroSection extends Component {
  render () {
    return (
      <section className='hero text-center flex-align'>
        <div className='container'>
          <h1 className='display-1'> We are rock</h1>
          <div className='row justify-content-center'>
            <div className='col-sm-8'>
              <p className='lead'>
          Pounding the world like a battering ram. Forging the furnace for the final grand slam. Chopping away at the source soon the
          course will be done Leaving a trail of destruction that's second to none. Second to none
              </p>
              <Link to='/albums' className='btn btn-custom hvr-grow '>List our albums</Link>
            </div>
          </div>
        </div>
      </section>

    )
  }
}
