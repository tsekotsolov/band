import React from 'react'
import {Link} from 'react-router-dom'

const Album = (props) => {
  return (
    <React.Fragment>
      <Link to={`/album${props._id}`} className='col-lg-3 col-md-3 col-sm-4 col-xs-6 con' {...props}>
        <img src={props.url} alt=''className='image' />
        <div className='overlay'>
          <div className='text'>
            <p>{props.title}</p>
            <p>Released {props.year}</p>
          </div>
        </div>
      </Link>
    </React.Fragment>
  )
}

export default Album
