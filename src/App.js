import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import HomeContainer from './containers/HomeContainer'
import SchoolContainer from './containers/SchoolContainer'
import LoginContainer from './containers/LoginContainer'
import RegisterContainer from './containers/RegisterContainer.jsx'
import ProfileContainer from './containers/ProfileContainer.jsx'

//routing
import { BrowserRouter, withRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'

//redux
import { connect } from 'react-redux'
import { userLogOut, setUserInfo } from './actions/users';


function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomeContainer />
        </Route>
        <Route exact path="/schools">
          <SchoolContainer />
        </Route>
        <Route exact path="/login">
          <LoginContainer />
        </Route>
        <Route exact path="/register">
          <RegisterContainer />
        </Route>
        <Route exact path="/profile/:id">
          <ProfileContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

let RoutedApp = withRouter(App)


export default RoutedApp;
