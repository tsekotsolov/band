import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import modifyDate from '../../utils/modifyDate'
import requester from '../../utils/requester'
import observer from '../../utils/observer'
import ModalDelete from '../common/ModalDelete'
import Loading from '../../utils/Loading'
import escapeHtml from '../../utils/escapeHtml'

export default class Comment extends Component {

  constructor(props) {
    super(props)
    this.state={
      data:{},
      avatar:''
    }
  }

  componentDidMount(){
   
    requester.fetchUser(this.props._acl.creator).then((response)=>{
      this.setState({
        avatar:response.avatar
      })
    })
  }

  captureInputData = (event)=>{  

    if(localStorage.username&&localStorage.username!=='defaultUser'){
     
      event.target.style.color='red'
      event.target.style.border='red solid'
      let button = document.querySelectorAll(`[data-id="${event.target.id}"]`)
      button[0].classList.add('disabled-button')
  
      if(event.target.value.length>=10){
  
        event.target.style.color='green'
        event.target.style.border='green solid'
        button[0].classList.remove('disabled-button')

        
        this.setState({
          data:{
            author:localStorage.getItem('username'),
            content:escapeHtml(event.target.value),
            commentId:this.props._id          
          }
        })
      }
      else{
        this.setState({
          data:{}
        })
      }
    }
  
  }
  revealEdit = (event)=>{
    event.preventDefault()
    let textarea = document.getElementById(event.target.dataset.id)
    textarea.style.color='green'
    textarea.style.border='green solid'
    let button = document.querySelectorAll(`[data-id="${event.target.dataset.id}"]`)
    button[0].style.display='inline-block'
    button[0].classList.add('disabled-button')
    textarea.classList.add('psuedo-textarea-edit')
    textarea.disabled=false
    
  }
  delete=()=>{
    observer.trigger('loading')
    requester.deleteComment(this.props._id).then(()=>{
      observer.trigger('loading')
      this.props.removeCommentFromDom(this.props.index)
    })
  }
  edit = (event) =>{
    
    let textarea = document.getElementById(event.target.dataset.id)
    let button = document.querySelectorAll(`[data-id="${event.target.dataset.id}"]`)
    let data = {
      author:localStorage.getItem('username'),
      content:escapeHtml(textarea.value),
      postId:this.props.postId
    }
    
    requester.editComment(this.props._id,data).then((response)=>{

    textarea.classList.remove('psuedo-textarea-edit')
    textarea.disabled=true
    textarea.style.color='white'
    textarea.style.border='none'
    button[0].style.display='none'
    let value = escapeHtml(textarea.value);
    textarea.value=value

    })
    
   
  }

  render () {
    
    return (
      
      <article key={this.props._id} className='comment'>

        <div className='image-content'>
          <div className='avatar'>
            {this.state.avatar
            ?<img src={this.state.avatar} alt='avatar' />
            :<Loading first={'loader-wrapper-small'} second={'loader-small'}/>
            }
          </div>

          <form className='post-content'>
            <textarea disabled className='post-message psuedo-textarea' id={this.props._id} defaultValue={this.props.content} onChange={this.captureInputData} />

            <Link to='#' className='btn btn-custom hvr-grow m-2' data-id={this.props._id} onClick={this.edit}>Edit Comment</Link>
          </form>
        </div>

        <div className='details'>
          <div className='info'>
            submitted {modifyDate(this.props._kmd.ect)} ago by {this.props.author}
          </div>
          {this.props.author === localStorage.username || localStorage.role
            ? <div className='controls'>
              <Link to='#' className='editLink ' onClick={this.revealEdit} data-id={this.props._id}>edit</Link>
              <Link to='#' className='deleteLink' data-toggle="modal" data-target="#exampleModal">
                delete
            </Link>
              <ModalDelete delete={this.delete}/>
            </div>
            : null
          }
        </div>
      </article>
    )
  }
}
