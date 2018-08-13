import authData from './authData'

/*eslint-disable */
let requester = {

  login: (data) => {
    return fetch(
      authData.BASE_URL + 'user/' + authData.APP_KEY + '/login',
      {
        method: 'POST',
        headers: authData.AUTH_HEADERS,
        body: JSON.stringify(data)
      }
    ).then(data => data.json())
  },

  updateUser: (data,id) =>{
    return fetch(
      authData.BASE_URL + 'user/' + authData.APP_KEY +'/'+ id,
      {
        method: 'PUT',
        headers: {
          'Authorization': 'Kinvey ' + localStorage.getItem('authToken'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    ).then(data => data.json())
  },

  fetchUser: (id)=>{
    return fetch(
      authData.BASE_URL + 'user/' + authData.APP_KEY +'/'+ id,
      {
        method: 'GET',
        headers: {
          'Authorization': 'Kinvey ' + localStorage.getItem('authToken'),
          'Content-Type': 'application/json'
        },
      }
    ).then(data => data.json())
  },
  fetchAllUsers: ()=>{
    return fetch(
      authData.BASE_URL + 'user/' + authData.APP_KEY ,
      {
        method: 'GET',
        headers: {
          'Authorization': 'Kinvey ' + localStorage.getItem('authToken'),
          'Content-Type': 'application/json'
        },
      }
    ).then(data => data.json())
  },

  signIn: (data) => {
    return fetch(
      authData.BASE_URL + 'user/' + authData.APP_KEY + '/',
      {
        method: 'POST',
        headers: authData.AUTH_HEADERS,
        body: JSON.stringify(data)
      }
    ).then(data => data.json())
  },

  logout: () => {
    return fetch(
      authData.BASE_URL + 'user/' + authData.APP_KEY + '/_logout',
      {
        method: 'POST',
        headers: {
          'Authorization': 'Kinvey ' + localStorage.getItem('authToken')
        }
      }
    ).then(localStorage.clear())
  },

  fetchAllAlbums: () => {
    return fetch(
      authData.BASE_URL + 'appdata/' + authData.APP_KEY + '/albums',
      {
        method: 'GET',
        headers: {
          'Authorization': 'Kinvey ' + localStorage.getItem('authToken')
        }

      }
    ).then(data => data.json())
  },

  fetchSingleAlbum: (id) => {
    return fetch(
      authData.BASE_URL + 'appdata/' + authData.APP_KEY + '/albums/' + id,
      {
        method: 'GET',
        headers: {
          'Authorization': 'Kinvey ' + localStorage.getItem('authToken')
        }

      }
    ).then(data => data.json())
  },

  deleteComment: (id) => {
    return fetch(
      authData.BASE_URL + 'appdata/' + authData.APP_KEY + '/comments/' + id,
      {
        method: 'DELETE',
        headers: {
          'Authorization': 'Kinvey ' + localStorage.getItem('authToken')
        }
      }
    )
  },

  postComment: (formData) => {
    
    return fetch(
      authData.BASE_URL + 'appdata/' + authData.APP_KEY + '/comments',
      {
        method: 'POST',
        headers: {
          'Authorization': 'Kinvey ' + localStorage.getItem('authToken'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)

      }
    ).then(data => data.json())
  },

  editComment:(id,formData)=>{
    return fetch(
      authData.BASE_URL + 'appdata/' + authData.APP_KEY + '/comments/' + id,
      {
        method: 'PUT',
        headers: {
          'Authorization': 'Kinvey ' + localStorage.getItem('authToken'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }
    )
  },
  
  fetchComments: (id) => {
    return fetch(
      authData.BASE_URL + 'appdata/' + authData.APP_KEY + `/comments/?query={"postId":"${id}"}`,
      {
        method: 'GET',
        headers: {
          'Authorization': 'Kinvey ' + localStorage.getItem('authToken')
        }

      }
    ).then(data => data.json())
  },

  postAlbum:(data) => {
    return fetch(
      authData.BASE_URL + 'appdata/' + authData.APP_KEY + '/albums',
      {
        method: 'POST',
        headers: {
          'Authorization': 'Kinvey ' + localStorage.getItem('authToken'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    ).then(data => data.json())
  }

}
/* eslint-enable */
export default requester
