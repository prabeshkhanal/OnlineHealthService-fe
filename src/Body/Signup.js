import React, { Component, state, sendCustomerData } from 'react';
import axios from 'axios';

class Signup extends Component {
  state = {
    fname: '',
    lname: '',
    email: '',
    password: '',
  };

  sendCustomerData = (e) => {
    e.preventDefault();
    const data = {
      fname: this.state.fname,
      lname: this.state.lname,
      password: this.state.password,
      email: this.state.email,
    };
    axios
      .post('http://localhost:90/customer/signup', data)
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
        ></link>
        <div>
          <div class='register-photo'>
            <div class='form-container'>
              <div class='image-holder'></div>
              <form method='post'>
                <h2 class='text-center'>
                  <strong>Create</strong> an account.
                </h2>
                <div class='form-group'>
                  <input
                    class='form-control'
                    type='text'
                    name='fname'
                    placeholder='Full Name'
                    value={this.state.fname}
                    onChange={(event) => {
                      this.setState({ fname: event.target.value });
                    }}
                  />
                </div>
                <div class='form-group'>
                  <input
                    class='form-control'
                    type='text'
                    name='lname'
                    placeholder='Last Name'
                    value={this.state.lname}
                    onChange={(event) => {
                      this.setState({ lname: event.target.value });
                    }}
                  />
                </div>
                <div class='form-group'>
                  <input
                    class='form-control'
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={this.state.email}
                    onChange={(event) => {
                      this.setState({ email: event.target.value });
                    }}
                  />
                </div>
                <div class='form-group'>
                  <input
                    class='form-control'
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={(event) => {
                      this.setState({ password: event.target.value });
                    }}
                  />
                </div>
                <div class='form-group'>
                  <div class='form-check'>
                    <label class='form-check-label'>
                      <input
                        class='form-check-input'
                        type='checkbox'
                        id='myCheck'
                        onclick='myFunction()'
                      />
                      I agree to the license terms.
                    </label>
                  </div>
                </div>
                <div class='form-group'>
                  <button
                    id='button'
                    class='btn btn-primary btn-block'
                    data-bs-hover-animate='jello'
                    type='submit'
                    onClick={this.sendCustomerData}
                  >
                    Sign Up
                  </button>
                </div>
                <a class='already' href='/login'>
                  You already have an account? Login here.
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
