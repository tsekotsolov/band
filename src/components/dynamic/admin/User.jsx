import React from 'react'
import {Link} from 'react-router-dom'

let User = (props) => {

  let date = props._kmd.ect
  return (
    <div className='card col-md-2' key={props._id}>
      <img className='card-img-top' src={props.avatar} alt='Card cap' />
      <div className='card-body'>
        <h6 className='card-title'>{props.username}</h6>
        {props.mail
          ? <p className='card-text'>{props.mail}</p>
          : <p className='card-text'>no email provided</p>
        }
        <p className='card-text'>member since: </p>
        <p>{date.slice(0, 10)}</p>
        <Link to='#' className='btn btn-custom hvr-grow' >Ban User</Link>
      </div>
    </div>
  )
}

export default User
