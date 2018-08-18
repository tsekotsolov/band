import React, { Component } from 'react'
import requester from '../../../utils/requester'
import observer from '../../../utils/observer'
import User from './User'

class Users extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    observer.trigger('loading')
    requester.fetchAllUsers().then((response) => {
      this.setState({
        users: response.filter((user) => user.username !== 'defaultUser')
      })
      observer.trigger('loading')
    })
  }
  render () {
    return (

      <section className='profile'>
        <div className='container text-center'>
          <h2>Users</h2>
          <div className='row text-center'>

            {this.state.users.map((user) => {
              return (
                <User {...user} key={user._id} />
              )
            })}

          </div>
        </div>
      </section>

    )
  }
}

export default Users
