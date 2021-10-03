import React, { Component, state, inputHandler, sendCustomerData } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class Contact extends Component {
  state = {
    fname: '',
    lname: '',
    email: '',
    message: '',
  };

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    };


  sendCustomerData = (e) => {
    e.preventDefault();
    const data = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      message: this.state.message,
    };
    axios
      .post('http://localhost:90/contactinfo/insert', data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  render() {
    return (
      <div>
        <div class='contact-clean'>
          <form>
            <div class='c1'>Get In Touch</div>
            <h2 class='text-center'>Contact Us</h2>
            <div class='c1 des'>
              (Please contact us if you face any problem. We appreciate any
              feedback you have.)
            </div>
            <div class='c1 des'>
              <p>
                Kalanki, Kathmandu, Nepal.
                <br /> Tel: +977 (0)1 478 0747
                <br /> Email: pd@pharmacydelivery.org.np
              </p>
            </div>
            <div class='form-group'>
              <label class='c2'>First Name:</label>
              <input
                class='form-control c'
                type='text'
                name='fname'
                placeholder='Your First Name'
                value={this.state.fname}
                //   onChange={(event) => {
                //     this.setState({ fname: event.target.value });
                //   }}
                onChange={this.inputHandler}
              />
            </div>
            <div class='form-group'>
              <label class='c2'>Last Name:</label>
              <input
                class='form-control c'
                type='text'
                name='lname'
                placeholder='Your Last Name'
                value={this.state.lname}
                onChange={this.inputHandler}
              />
            </div>
            <div class='form-group'>
              <label class='c2'>Email:</label>
              <input
                class='form-control c'
                type='email'
                name='email'
                placeholder='Email Address'
                value={this.state.email}
                onChange={this.inputHandler}
              />
              <small class='form-text text-danger'>
                Remember to enter a valid email address.
              </small>
            </div>
            <div class='form-group'>
              <label class='c1'>Message:</label>
              <input
                class='form-control c message'
                name='message'
                placeholder='We Listen To You'
                value={this.state.message}
                onChange={this.inputHandler}
              />
            </div>
            <div class='form-group'>
              <Button
                className='btn-contact'
                variant='primary'
                type='submit'
                href='/'
                onClick={this.sendCustomerData}
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;