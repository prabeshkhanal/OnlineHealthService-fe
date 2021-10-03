import React, { Component, state, getUserData, loginhandler } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    loginChk: false,
    message: "",
  };
  getUserData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  loginhandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:90/customer/login", this.state)
      .then((response) => {
        console.log(response);
        this.setState({
          loginChk: true,
        });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("accounttype", response.data.accounttype);
        localStorage.setItem("userId", response.data.customerid);
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          message: err.response.data.message,
        });
      });
  };
  render() {
    //redirect
    if (this.state.message) {
      var message = this.state.message;
    }
    if (this.state.loginChk === true) {
      return (window.location.href = "/");
    }
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
        <div class="login-clean">
          <form action="#" method="post">
            <h2 class="sr-only">Login Form</h2>
            <div className="conatiner">{message}</div>
            <div class="illustration">
              <i class="fa fa-medkit border rounded-circle shadow"></i>
            </div>
            <div class="form-group1">
              <input
                class="form-control"
                type="email"
                value={this.state.email}
                onChange={(event) => {
                  this.setState({
                    email: event.target.value,
                  });
                }}
                name="email"
                placeholder="Email"
              />
            </div>
            <div class="form-group2">
              <input
                class="form-control"
                type="password"
                value={this.state.password}
                onChange={(event) => {
                  this.setState({
                    password: event.target.value,
                  });
                }}
                name="password"
                placeholder="Password"
              />
            </div>
            <div class="form-group3">
              <button
                class="btn btn-primary btn-block bounce animated"
                type="submit"
                value="log-in"
                onClick={this.loginhandler}
              >
                Log In
              </button>
            </div>
            <a class="forgot" href="/">
              Forgot your email or password?
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

// //in update
// componentDidMount(){
//     axios.get('http://localhost:90/product/single' +this.state.id)
//     .then((response)=>{
//         this.serState({
//             pname: response.data.pname,
//             pdesc: response.data.pdesc
//         })
//     })
//     .catch((err)=>{
//         console.log(err.response)
//     })
// }
