import React, { Component } from 'react';
import './App.css';
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import creditScore from '../score/creditScore';
import LoadingIndicator from '../common/LoadingIndicator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    }
  }
 render() {
    if(this.state.isLoading) {
      return <LoadingIndicator />  
    }
    return (
              <Switch>      
                 <Route path="/creditScore" component={creditScore}></Route>
                  <Route exact path="/"
                  render={(props) => <Login {...props}/>}></Route>
                <Route path="/signup" component={Signup}></Route>
              </Switch>
    );
  }
}

export default withRouter(App);
