import React from 'react'
import {Switch, Route} from 'react-router-dom'
import NotFound from './NotFound'
import About from '../common/About'
import HeroSection from '../common/HeroSection'
import Albums from '../dynamic/Albums'
import AlbumDetails from '../dynamic/AlbumDetails'
import MyProfile from '../dynamic/Myprofile'
import AddAlbum from '../dynamic/admin/AddAlbum'
import Users from '../../components/dynamic/admin/Users'

const ProtectedRoute =
  ({ isAllowed, ...props }) =>
    isAllowed
      ? <Route {...props} />
      // : <Redirect to='/' />
      : <Route render={() => <NotFound text={'unauthorized'} />} />

const AppRoutes = (props) => {
  return (
/*eslint-disable */
    <Switch>
      <Route exact path='/' render={() => <HeroSection {...props} />} />
      <Route exact path='/about' component={About} />
      <Route exact path='/albums' component={Albums} />
      <Route exact path='/album:id' component={AlbumDetails} />
      <ProtectedRoute
        isAllowed={localStorage.authToken && localStorage.username !== 'defaultUser'}
        exact path='/myprofile' component={MyProfile} />
        <ProtectedRoute
        isAllowed={localStorage.role}
        exact path='/addalbum' component={AddAlbum} />
        <ProtectedRoute
        isAllowed={localStorage.role}
        exact path='/users' component={Users} />
      <Route render={() => <NotFound text={'page not found'} />} />
    </Switch>

  )
}

export default AppRoutes
