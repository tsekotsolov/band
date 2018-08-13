import React from 'react'

let ModalDelete = (props) => {
  return (
    <div className='modal fade' id='exampleModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-body'>
          Are you sure you want to delete this comment?
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-dismiss='modal'>
            Dismiss
            </button>
            <button type='button' className='btn btn-custom' data-dismiss='modal' onClick={props.delete}>
            Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ModalDelete
