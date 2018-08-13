import React, { Component } from 'react'
import createFormObj from '../../utils/createFormObj'
import requester from '../../utils/requester'
import observer from '../../utils/observer'
import validateEmail from '../../utils/validateEmail'

export default class EmailInput extends Component {
  constructor(props) {
    super(props)
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
      
        if (!validateEmail(event.target.value)) {
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

    checkMail = ()=>{
        let mail = localStorage.mail
        if(mail==='undefined'){
            mail='Provide your email adress'
        }
        return mail
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
            <label htmlFor='text'>Email</label>
            <input type='email' className={this.style.join(' ')} id='mail' placeholder={this.checkMail()} data-name='mail' onChange={this.captureInputData} />
          </div>
      <a className='btn btn-custom hvr-grow m-2 ' id='submit' onClick={this.submit}>Update</a>
      </form>
    )
  }
}
