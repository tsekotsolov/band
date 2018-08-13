import React from 'react'
import withAuthentication from '../../hoc/withAuthentication'

const AuthButton = (props) => {
  return (
    <button type='button' className='btn btn-custom hvr-grow m-2 '>
      {props.text}
    </button>
  )
}

export default withAuthentication(AuthButton)
