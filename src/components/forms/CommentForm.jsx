import React, { Component } from 'react'
import requester from '../../utils/requester'
import observer from '../../utils/observer'
import {Link} from 'react-router-dom'
import escapeHtml from '../../utils/escapeHtml'

export default class CommentForm extends Component {

  constructor(props){
    super(props)
    this.state={
      data:{}
    }
  }

  captureInputData = (event)=>{  

    if(localStorage.username&&localStorage.username!=='defaultUser'){
      event.target.style.color='red'
      event.target.style.border='red solid'
      document.getElementById('submit').classList.add('disabled-button')
  
      if(event.target.value.length>=10){
  
        event.target.style.color='green'
        event.target.style.border='green solid'
        document.getElementById('submit').classList.remove('disabled-button')
        this.setState({
          data:{
            author:localStorage.getItem('username'),
            content:escapeHtml(event.target.value),
            postId:this.props.postId
          }
        })
      }
      else{
        this.setState({
          data:{}
        })
      }
    }
    else{
      observer.trigger('showLoginForm')
    }
  }

  submit = (event)=>{
    event.preventDefault();
    if(Object.keys(this.state.data).length!==0){

      observer.trigger('loading')
      requester.postComment(this.state.data).then((response)=>{
        observer.trigger('loading')
        document.getElementById('form-comment').reset()
        this.props.addCommentToDom(response)
        this.setState({
          data:{}
        })
      })
    }
    }
    
  render() {
    return (
        <form id='form-comment'>
          <div className="form-group col-md-12 col-xs-12">
            <textarea className="form-control" id="exampleFormControlTextarea1"  data-name='content'rows={3} placeholder="Leave your comment" defaultValue={""} onChange={this.captureInputData} />
            <small id="userHelp" className="form-text text-muted">*At least 10 characters long</small>
            <Link to='#' className="btn btn-custom hvr-grow m-2 disabled-button" id="submit" onClick={this.submit}>Submit</Link>
          </div>
      </form>
    )
  }
}
