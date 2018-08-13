import React, { Component } from 'react'
import requester from '../../utils/requester'

export default class ProfilePicture extends Component {

    constructor (props) {
        super(props)
        this.state = {
          avatar:null
        }
    }

    cloudinaryWidget = () => {
    window.cloudinary.openUploadWidget({cloud_name: 'tsekotsolov', sources:['local'],upload_preset: 'omtbnllk',stylesheet:'https://res.cloudinary.com/tsekotsolov/raw/upload/v1533475201/band/cloudinary.css'},

        (error, result) => { 
        if(result){
        localStorage.avatar=result[0].secure_url
        requester.updateUser({avatar:result[0].secure_url},localStorage.userId).then((response)=>{
            
            this.setState({
            avatar:result[0].secure_url
            })
        })
        }
        })
    }
    
    render() {
        return (
            <div className='col-md-4'>
                <div id='avatar'>
                    <img src={localStorage.avatar} alt='avatar' />
                </div>
                <button type='button' className='btn btn-custom hvr-grow' data-toggle='modal' data-target='#exampleModalCenter' id='upload_widget_opener' onClick={this.cloudinaryWidget} >
                Upload picture
                </button>
            </div>
        )
    }
}
