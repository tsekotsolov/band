import React from 'react'
import UsernameInput from './UsernameInput'
import EmailInput from './EmailInput'

let ProfileForm = () => {
  return (
    <div className='col-md-8'>

      <UsernameInput />
      <EmailInput />

    </div>
  )
}

export default ProfileForm
