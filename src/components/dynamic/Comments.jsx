import React, { Component } from 'react'
import requester from '../../utils/requester'
import Comment from './Comment'
import CommentForm from '../forms/CommentForm'
import observer from '../../utils/observer'


export default class Comments extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: [],
      isEmpty:true

    }
  }
  componentDidMount () {
    observer.trigger('loading')
    requester.fetchComments(this.props.postId).then((response) => {
    
     if(response.length!==0){
      this.setState({
        comments: response.reverse(),
        isEmpty:false
      })
     }
     else{
      this.setState({
        isEmpty: true
      })
     }
     observer.trigger('loading')
    }).catch(err=>console.log(err))
    
  }

  addCommentToDom = (post)=>{
    let coms = this.state.comments
    coms.unshift(post)
      this.setState({
        comments:coms,
        isEmpty:false
      })
  }
  removeCommentFromDom = (index)=>{
    let coms = this.state.comments
    coms.splice(index,1)
    this.setState({
      comments:coms
    })
    if(coms.length===0){
      this.setState({
        isEmpty:true
      })
    }
  } 

  render () {
    return (
    <React.Fragment>
      {this.state.comments===0
    ? null
    :<React.Fragment>
      <CommentForm postId={this.props.postId} addCommentToDom={this.addCommentToDom}/>
      <div className='row justify-content-center'>
        <div className='col-md-12'>
          
          {this.state.isEmpty
          ?<h5>No comments yet</h5>
          :<React.Fragment>
              <p>Overall comments: <span>{this.state.comments.length}</span></p>
              <div className='overflow'>
              {this.state.comments.map((comment,i) => {
                return <Comment key={comment._id} {...comment} index={i} removeCommentFromDom={this.removeCommentFromDom}/>
              })}
              </div>
          </React.Fragment>
          }
        </div>
      </div>
    </React.Fragment>
      }
    </React.Fragment>
    )
  }
}
