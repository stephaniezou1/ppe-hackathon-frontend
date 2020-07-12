import React from 'react';
import './App.css';

//routing
import {withRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'

//redux
import {connect} from 'react-redux'
import { userLogOut, setUserInfo } from './actions/users';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
          <Route exact path="/">
            <HomeContainer/>
          </Route>
          <Route exact path="/schools">
            <SchoolContainer/>
          </Route>
          <Route exact path="/login">
            <LoginContainer/>
          </Route>
          <Route exact path="/register">
            <RegisterContainer/>
          </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

let RoutedApp = withRouter(App)

let mapDispatchToProps = {
  setUserInfo: setUserInfo,
  userLogOut: userLogOut
}

let mapStateToProps = (globalState) => {
  return {
    token: globalState.userInformation.token
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutedApp)
