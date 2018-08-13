import React, { Component } from 'react'
import createFormObj from '../../utils/createFormObj'
import requester from '../../utils/requester'
import observer from '../../utils/observer'


export default class usernameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData:{
          username:localStorage.username,
          avatar:localStorage.avatar,
          mail:localStorage.mail
      }
    }
    this.style = ['form-control', 'custom-input']
  }
  
    captureInputData = (event) => {
      this.setState({
        formData:Object.assign(this.state.formData,createFormObj(event))
      })

        let redIndex = this.style.indexOf('red')
        let greenIndex = this.style.indexOf('green')
      
        if (event.target.value.length < 6) {
          if (greenIndex > -1) {
            this.style.splice(greenIndex, 1)
          }
          if (redIndex <= -1) {
            this.style.push('red')
          }
        } else {
          if (greenIndex <= -1) {
            this.style.push('green')
          }
          if (redIndex > -1) {
            this.style.splice(redIndex, 1)
          }
        }
    }

    submit = (event) => {
      event.preventDefault()
  
          observer.trigger('loading')
          requester.updateUser(this.state.formData,localStorage.userId).then((response) => {
              observer.trigger('loading')
              localStorage.setItem('username',response.username)
              localStorage.setItem('avatar',response.avatar)
              localStorage.setItem('mail',response.mail)
              observer.trigger('loginUser')
          })
    }

  render () {
   
    return (
      <form className='profile-form'>
      <div className='form-group'>
        <label htmlFor='username'>Username</label>
        <input type='text' className={this.style.join(' ')} id='username' aria-describedby='emailHelp' placeholder={localStorage.username} data-name='username' onChange={this.captureInputData} />
        <small id='userHelp' className='form-text text-muted' >*At least 6 characters long</small>
      </div>
      <a className='btn btn-custom hvr-grow m-2 ' id='submit' onClick={this.submit}>Update</a>
      </form>
    )
  }
}
