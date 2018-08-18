import React, { Component } from 'react'
import requester from '../../../utils/requester'
import observer from '../../../utils/observer'
import AuthButton from '../../common/AuthButton'

 class User extends Component {
  constructor(props){
    super(props)

    this.state={
      banned:this.props._kmd.status
    }
  }

  banRestoreUser = () => {
    
    if(this.state.banned ){
     
      observer.trigger('loading')
      requester.restoreUser(this.props._id).then((response)=>{
        observer.trigger('loading')
        this.setState({
          banned:false
        })
       
      })
    }else{
      
      observer.trigger('loading')
      requester.banUser(this.props._id).then((response)=>{
        observer.trigger('loading')
        this.setState({
          banned:true
        })
      })
      
    }
    
  }

  date = this.props._kmd.ect

  render() {

    return (
      <div className='col-md-3 col-sm-6 col-xs-6'>
      <div className='card'>
        <div className='cont'>
          <img className='card-img-top' src={this.props.avatar} alt='Card cap' />
          {this.state.banned 
          ?<div className='banned'>
            <div className='text'>
              <p>BANNED</p>
            </div>
          </div>
          :null
          }
          
        </div>

        <div className='card-body'>
          <h6 className='card-title'>{this.props.username}</h6>
          {this.props.mail
            ? <p className='card-text'>{this.props.mail}</p>
            : <p className='card-text'>no email provided</p>
          }
          <p className='card-text'>member since: </p>
          <p>{this.date.slice(0, 10)}</p>
          
          {this.state.banned 
          ? <AuthButton  text={'Restore User'}  function={this.banRestoreUser} />
          : <AuthButton  text={'Ban User'}  function={this.banRestoreUser} />
          }
         
        </div>
      </div>
    </div>
    )
  }
}


export default User
