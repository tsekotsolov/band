import React, { Component } from 'react'
import requester from '../../utils/requester.js'
import observer from '../../utils/observer.js'
import showHidePass from '../../utils/showHidePass.js'
import {Link} from 'react-router-dom'

class LogInForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      formData:{},
      error:''
    }
  }

  captureInputData = (event)=>{ 
    
    this.setState({
      error:''
    })
    document.getElementById('submit').classList.add('disabled-button')

    let fieldName = event.target.dataset.name
    let fieldValue = event.target.value
    let username = document.getElementById('username')
    let password = document.getElementById('password')
  

    event.target.style.color='red'
    event.target.style.border='red solid'

    
    if(fieldName==='username'){
      if(fieldValue.length>=6){
        event.target.style.border='green solid'
        event.target.style.color='green'
      }
    }
    else if(fieldName==='password'){
      if(fieldValue.length>=8){
        event.target.style.border='green solid'
        event.target.style.color='green'
      }
    }
    
    if(username.style.color==='green'&&password.style.color==='green'){
      document.getElementById('submit').classList.remove('disabled-button')
      this.setState({
        formData:{
          username:username.value,
          password:password.value
        }
      })
    }
  }

  submit = (event)=>{
    event.preventDefault()

    if(Object.keys(this.state.formData).length!==0){

      observer.trigger('loading')
        requester.login(this.state.formData).then(response => {
    
          if(response.error){
             let username = document.getElementById('username')
             let password = document.getElementById('password')
            this.setState({
              error:response.error
            })
            username.style.color='red'
            username.style.border='red solid'
            password.style.color='red'
            password.style.border='red solid'
            observer.trigger('loading')
            document.getElementById('login-form').reset()
            document.getElementById('submit').classList.add('disabled-button')
            
            return
          }
    
          localStorage.setItem('authToken',response._kmd.authtoken)
          if(response._kmd.roles){
            localStorage.setItem('role','admin')
          }
  
          localStorage.setItem('username',response.username)
          localStorage.setItem('userId',response._id)
          localStorage.setItem('avatar',response.avatar)
          localStorage.setItem('mail',response.mail)
          observer.trigger('loginUser')
          observer.trigger('loading')
        })
        
     
    
    }

  }
  render () {
   
    return (
      <form className='col-md-6 log-in' id='login-form'>
        <h4>Log In</h4>
        <p>Enter site and rock on...</p>
        <div className='form-group'>
        {this.state.error?<small id="usernameHelp" className="form-text error-message">{this.state.error}</small>:null}
          <input type='text' onChange={this.captureInputData} className='form-control custom-input' id='username' aria-describedby='emailHelp' placeholder='Enter username' data-name='username' />
          <small id="userHelp" className="form-text text-muted">*At least 6 characters long</small>
        </div>
        <div className='form-group password-wrapper'>
          <input type='password' onChange={this.captureInputData} className='form-control custom-input' id='password' placeholder='Password' data-name='password' />
          <small id="userHelp" className="form-text text-muted">*At least 8 characters long</small>
          <span className='btn-show-pass'>
            <i className='fa fa-eye' onClick={showHidePass} />
          </span>
        </div>
        <Link to='#' onClick={this.submit} className='btn btn-custom hvr-grow m-2 disabled-button' id="submit">Submit</Link>
        <div className='m-2'>
          <small>Don't have an account?
          <Link to='#' className='p-2'  onClick={this.props.switchForms}>Sign Up</Link>
          </small>
        </div>
      </form>

    )
  }
}

export default LogInForm
