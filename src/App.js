import React, {Component} from 'react'
import {HashRouter} from 'react-router-dom'
import AppRoutes from './components/common/AppRoutes'
import Footer from './components/common/Footer'
import observer from './utils/observer'
import Navigation from './components/navigation/Navigation'
import FormContainer from './components/forms/FormContainer'
import Loading from './utils/Loading'
import requester from './utils/requester'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      showForm: false,
      loggedIn:false,
      loading:false
    }

      observer.subscribe('loginUser',this.checkForLoggedInUser)
      observer.subscribe('loading',this.loading)
      observer.subscribe('logout',this.logout)
      observer.subscribe('showLoginForm',this.showHideForms.showLoginForm)
  }

  loading = () =>{

    let formContainer = document.getElementById('form-container')

    if(this.state.loading){
      this.setState({
        loading:false
      })
      document.getElementsByClassName('shade-wrapper')[0].style.opacity = '1';
      if(formContainer){
        formContainer.style.opacity = '1';
      }
    }
    else{
      this.setState({
        loading:true
      })
      document.getElementsByClassName('shade-wrapper')[0].style.opacity = '0.0';
      if(formContainer){
        formContainer.style.opacity = '0.2';
      }
    }

  }

  checkForLoggedInUser = ()=>{
    if(localStorage.username){
      this.setState({
        loggedIn:true,
        showForm:false
      })
      document.getElementById('shade-wrapper').style.opacity='1'
    }
  }

  logout = ()=>{

    this.loading()
    requester.logout().then(()=>{
      this.setState({
        loggedIn:false,
      })
            
      this.loading()
      
    })
  }

  showHideForms = {

    showLoginForm:()=>{
    
      document.getElementById('shade-wrapper').style.opacity='0.3'
        this.setState({
          showForm:true
        })
    },

     hideLoginForm:()=>{
      
        document.getElementById('shade-wrapper').style.opacity='1'
          this.setState({
            showForm:false
          })
     }
  }

  render () {
    if(!localStorage.getItem('username')){
      requester.login({
        username:'defaultUser',
        password:'123456789'
      }).then((response)=>{localStorage.setItem('authToken',response._kmd.authtoken)
     
      localStorage.setItem('username',response.username)
      localStorage.setItem('userId',response._id)
      localStorage.setItem('avatar',response.avatar)})
      
    }
      
    return (
      <HashRouter>
        <div className='App' id='app'>
          {this.state.loading?<Loading first={'loader-wrapper'} second={'loader'}/>:null}
          {this.state.showForm ? <FormContainer showHideForms={this.showHideForms}/> : null}
          <div className='shade-wrapper' id='shade-wrapper'>
            <Navigation showHideForms={this.showHideForms} logout={this.logout}/>
              <AppRoutes showHideForms={this.showHideForms}/>
              <Footer />
          </div>
       </div>
      </HashRouter>
    )
  }
}

export default App
