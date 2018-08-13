import React, { Component } from 'react'
import requester from '../../..//utils/requester'
import observer from '../../../utils/observer'

const Context = React.createContext()

export class Provider extends Component{

  state = {
    url:'https://res.cloudinary.com/tsekotsolov/image/upload/v1533743283/wb7l5z43st94azl81r6f.png',
    tracks:[],
    title:'',
    year:''
  }

  actions = {
    cloudinaryWidget:() => {
      window.cloudinary.openUploadWidget({cloud_name: 'tsekotsolov', sources:['local'],upload_preset: 'omtbnllk',stylesheet:'https://res.cloudinary.com/tsekotsolov/raw/upload/v1533475201/band/cloudinary.css'},
  
          (error, result) => { 
          if(result){
              this.setState({
                  url:result[0].secure_url
                  })
              }
          })
      },
      captureInputData:(event)=>{
        this.setState({
        track:event.target.value
        })
      },
      submitTrack:(event)=>{
        event.preventDefault()
        let newTracks = this.state.tracks
        let track = document.getElementById('track').value
       
        if(track!==''){
          newTracks.push(track)
          this.setState({
            tracks: newTracks,
          })
        }
        document.getElementById('track').value=''
      },
      removeTrackFromDom: (event)=>{
        let index = event.target.dataset.id 
        let newTracksArr = this.state.tracks
        newTracksArr.splice(index,1)
        this.setState({
          tracks:newTracksArr
        })
      },
      submit:(event)=>{
    
        event.preventDefault()

       if(event.target.id==='title-link'){
        let title = document.getElementById('title').value
        if(title!==''){
          this.setState({
            title
          })
        }
        document.getElementById('title').value = ''
       }else{
         
        let year = document.getElementById('year').value
        if(year!==''){
          this.setState({
            year
          })
        }
        document.getElementById('year').value = ''
       }
        
      },
      removeFromDom:(event)=>{
        if(event.target.id==='title-remove')
        this.setState({
          title:''
        })
        else{
          this.setState(
            {
              year:''
            }
          )
        }
      },
      uploadAlbum:()=>{

        observer.trigger('loading')
        requester.postAlbum(this.state).then(()=>{
          observer.trigger('loading')
        })
      }
  }

  render(){
    return(
    <Context.Provider value={{
      state:this.state,
      cloudinaryWidget:this.actions.cloudinaryWidget,
      submitTrack:this.actions.submitTrack,
      removeTrackFromDom:this.actions.removeTrackFromDom,
      submit:this.actions.submit,
      removeFromDom:this.actions.removeFromDom,
      uploadAlbum:this.actions.uploadAlbum
      }}>
      {this.props.children}
    </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer
