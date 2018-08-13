import React from 'react'
import ProfileForm from '../forms/ProfileForm'
import ProfilePicture from './ProfilePicture'

let MyProfile = () => {
  return (
    <section className='profile'>
      <div className='container text-center'>
        <h2>My Profile</h2>
        <div className='row justify-content-center'>
          <ProfilePicture />
          <ProfileForm />
        </div>
      </div>
    </section>
  )
}

export default MyProfile
