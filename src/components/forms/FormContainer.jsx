import React, { Component } from 'react'
import Login from './LogIn'
import SignIn from './SignIn'


export default class FormContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeForm: 'login'
    }
  }

  switchForms = ()=>{
    if(this.state.activeForm==='login'){
      this.setState({
        activeForm:'signin'
      })
    }
    else{
      this.setState({
        activeForm:'login'
      })
    }
  }
  render () {
    return (
      <section className='forms container-fluid col-12' id='form-container'>
        <div className='container text-center justify-content-center col-md-6'>
          <button type='button' className='close' aria-label='Close'>
            <span aria-hidden='true' onClick={this.props.showHideForms.hideLoginForm}>×</span>
          </button>
          <div className='row justify-content-center no-gutters  form-row'>
            <div className='band-picture col-md-6 no-gutters'>
              <h2>THE BAND</h2>
              <p>official website &amp; ticket distribution</p>
            </div>

            {this.state.activeForm === 'login' ? 
              <Login {...this.props} switchForms={this.switchForms}/> : 
              <SignIn {...this.props} switchForms={this.switchForms}/>}

          </div>
        </div>
      </section>
    )
  }
}
