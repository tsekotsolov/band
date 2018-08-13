import React, { Component } from 'react'
import requester from '../../utils/requester.js'
import observer from '../../utils/observer.js'
import showHidePass from '../../utils/showHidePass.js'
import {Link} from 'react-router-dom'


class SignInForm extends Component {

    state = {
      formData:{
        
      },
      error:''
    }

  captureInputData =  (event)=>{  

    let fieldName = event.target.dataset.name
    let fieldValue = event.target.value
    let username = document.getElementById('username')
    let password = document.getElementById('exampleInputPassword1')
    let repeatPassword = document.getElementById('exampleInputPassword2')

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
    else{
      if(fieldValue.length>=8&&password.value===repeatPassword.value){
        event.target.style.border='green solid'
        event.target.style.color='green'
        document.getElementById('submit').classList.remove('disabled-button')
      }
    }

    if(password.value!==repeatPassword.value){
      repeatPassword.style.border='red solid'
      repeatPassword.style.color='red'
      document.getElementById('submit').classList.add('disabled-button')
    }
    else if(password.value===repeatPassword.value &&password.value!==''&&repeatPassword!==''){
        repeatPassword.style.border='green solid'
        repeatPassword.style.color='green'
        document.getElementById('submit').classList.remove('disabled-button')
    }

    if(username.value.length<6){
      document.getElementById('submit').classList.add('disabled-button')
    }

    if(username.style.color==='green'&&password.style.color==='green'&&repeatPassword.style.color==='green'){
      this.setState({
        formData:{
          username:username.value,
          password:password.value,
          avatar:'https://res.cloudinary.com/tsekotsolov/image/upload/v1532975416/band/no_avatar.png'
        }
      })
    }
    else{
      this.setState({
        formData:{}
      })
    }
  }

  submit = (event)=>{
    event.preventDefault()
    
    if(Object.keys(this.state.formData).length!==0){
      observer.trigger('loading')
      requester.signIn(this.state.formData).then(response => {

        if(response.error){

          let username = document.getElementById('username')
          
          this.setState({
            error:response.error
          })

          username.style.color='red'
          username.style.border='2px red solid'
          observer.trigger('loading')
          return
        }
  
        localStorage.setItem('authToken',response._kmd.authtoken)
        localStorage.setItem('username',response.username)
        localStorage.setItem('userId',response._id)
        localStorage.setItem('avatar',response.avatar)
        localStorage.setItem('mail',response.mail)
        observer.trigger('loading')
        observer.trigger('loginUser')
      })
    }

  }

  render () {
    
    return (
      <form className='col-md-6 sign-in'>
        <h4>Create an account</h4>
        <p>Subscribe and rock on...</p>
        <div className='form-group'>
           
          {this.state.error?<small id="usernameHelp" className="form-text error-message">{this.state.error}</small>:null}

          <input type='text' className='form-control custom-input' id='username' aria-describedby='emailHelp' placeholder='Enter username' data-name='username' onChange={this.captureInputData }/>
          <small id="userHelp" className="form-text text-muted">*At least 6 characters long</small>
        </div>
        <div className='form-group password-wrapper'>
        
          <input type='password' className='form-control custom-input' id='exampleInputPassword1' placeholder='Password' data-name='password' onChange={this.captureInputData } />
          <small id="userHelp" className="form-text text-muted">*At least 8 characters long</small>
          <span className='btn-show-pass'>
          <i className='fa fa-eye'  onClick={showHidePass}/>
          </span>
        </div>
        <div className='form-group password-wrapper'>
        
          <input type='password' className='form-control custom-input' id='exampleInputPassword2' placeholder='Repeat Password' data-name='repeatPass' onChange={this.captureInputData}/>
          <small id="userHelp" className="form-text text-muted">*At least 8 characters long</small>
          <span className='btn-show-pass'>
            <i className='fa fa-eye'  onClick={showHidePass}/>
          </span>
        </div>
        <a onClick={this.submit} className='btn btn-custom hvr-grow m-2 disabled-button' id="submit">Submit</a>
        <div className='m-2'>
          <small>Already a member?
          <Link to='#' className='p-2' href='#' onClick={this.props.switchForms}>Login</Link>
          </small>
        </div>
      </form>

    )
  }
}

export default SignInForm
