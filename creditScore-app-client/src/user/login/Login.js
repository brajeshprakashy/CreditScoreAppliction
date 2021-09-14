import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
const baseUrl = 'http://localhost:5000/api/auth/signin';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error:false
    };
  }
  handleSubmit(e) {
    axios({
      method: 'post',
      url: baseUrl,
      headers: {}, 
      data: {
        "usernameOrEmail":this.state.username,
        "password":this.state.password
      }
    }).then(response => { 
      console.log("Response data is "+response.status)
      if(response.status === 200){
        this.props.history.push("/creditScore",{username:this.state.username});
      }else{
        this.setState({error:true})
      }
      
    }).catch(err =>  this.setState({error:true}));
  }

  onValueChange(field, event) {
    this.setState((prev) => {
      return {
        ...prev,
        [field]: event.target.value,
      };
    });
  }
  render() {
    const { articleId } = this.state;
    console.log("Result is "+articleId)
    
    return (
      <div className="container">
        <h2>Check your Credit Score!</h2>
        <div className="login-container">
          <div className="field">
            <span className="label">Username</span>
            <input
              type="text"
              className="inuput-field"
              onChange={this.onValueChange.bind(this, "username")}
            />
          </div>
          <div className="field">
            <span className="label">Password</span>
            <input
              type="password"
              className="inuput-field"
              onChange={this.onValueChange.bind(this, "password")}
            />
          </div>
          <button onClick={this.handleSubmit.bind(this)}>Login</button>
          {this.state.error && <div style={{color:'red'}}>Invalid Creditionals Plese try again</div>}
          <div style={{color:'blue',marginTop:'10px', cursor:'pointer'}}>
              New user? 
              <Link to="/signup">Sign up</Link> here
            </div>
        </div>
      </div>
    );
  }
}
export default Login;
