import React from 'react'

export default (props) => {
  return (
    <div className='container not-found'>
      <div className='row justify-content-center'>
        <div className='col-sm-12'>
          <h1 className='display-1'>{props.text}</h1>
        </div>
      </div>
    </div>
  )
}
