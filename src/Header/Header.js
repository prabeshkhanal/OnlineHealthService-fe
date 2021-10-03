import { Button } from 'react-bootstrap';
import React, { Component, logout, Link } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../Media/logo.png';

class Header extends Component {
  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    window.location.href = '/';
  };
  render() {
    if (
      localStorage.getItem('token') &&
      localStorage.getItem('accounttype') === 'Admin'
    ) {
      var menu = (
        <Container>
          <Row>
            <Col className="header-left">
              <img className="header-logo" src={logo} href="/" />
              <a href="/">OnlineHealthService</a>
            </Col>
            <div className="nav nav-tabs navmenus justify-content-end">
              <nav class="navbar navbar-expand-lg navbar-light header-nav-bar">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="/">
                        Home <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/contactus">
                        Contact Us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/aboutus">
                        About Us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/admin">
                        Admin Page
                      </a>
                    </li>
                    <li class="nav-item">
                      <Button
                        onClick={this.logout}
                        class="btn btn-primary btnlogin"
                        type="button"
                        href="/"
                      >
                        Logout
                      </Button>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </Row>
        </Container>
      );
    } else if (
      localStorage.getItem('token') &&
      localStorage.getItem('accounttype') === 'user'
    ) {
      var menu = (
        <Container>
          <Row>
            <Col className="header-left">
              <img className="header-logo" src={logo} href="/" />
              <a href="/">OnlineHealthService</a>
            </Col>
            <div className="nav nav-tabs navmenus justify-content-end">
              <nav class="navbar navbar-expand-lg navbar-light header-nav-bar">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="/">
                        Home <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/profile">
                        Profile
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/booking">
                        Booking
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/contactus">
                        Contact Us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/aboutus">
                        About Us
                      </a>
                    </li>
                    <li class="nav-item">
                      <Button
                        onClick={this.logout}
                        class="btn btn-primary btnlogin"
                        type="button"
                        href="/"
                      >
                        Logout
                      </Button>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </Row>
        </Container>
      );
    } else {
      var menu = (
        <Container>
          <Row>
            <Col className='header-left'>
              <img className='header-logo' src={logo} href='/' />
              <a href='/'>OnlineHealthService</a>
            </Col>
            <div className='nav nav-tabs navmenus justify-content-end'>
              <nav class='navbar navbar-expand-lg navbar-light header-nav-bar'>
                <button
                  class='navbar-toggler'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span class='navbar-toggler-icon'></span>
                </button>

                <div
                  class='collapse navbar-collapse'
                  id='navbarSupportedContent'
                >
                  <ul class='navbar-nav mr-auto'>
                    <li class='nav-item active'>
                      <a class='nav-link' href='/'>
                        Home <span class='sr-only'>(current)</span>
                      </a>
                    </li>
                    <li class='nav-item'>
                      <a class='nav-link' href='/contactus'>
                        Contact Us
                      </a>
                    </li>
                    <li class='nav-item'>
                      <a class='nav-link' href='/aboutus'>
                        About Us
                      </a>
                    </li>
                    <li class='nav-item'>
                      <Button
                        type='button'
                        class='btn btn-primary'
                        href='/login'
                      >
                        Login
                      </Button>
                      <Button
                        type='button'
                        class='btn btn-primary'
                        href='/signup'
                      >
                        Sign-Up
                      </Button>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </Row>
        </Container>
      );
    }
    return <div>{menu}</div>;
  }
}

export default Header;
