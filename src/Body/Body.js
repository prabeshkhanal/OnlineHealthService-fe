import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Cart from './Cart';
import ProductAdd from './ProductAdd';
import UpdateProfile from './UpdateProfile';
import Profile from './Profile';
import ContactUs from './ContactUs';
import ProductSingleData from './ProductSingleData';
import ProductShowAll from './ProductShowAll';
import UpdateProduct from './UpdateProduct';
import AboutUs from './AboutUs';
import Admin from './Admin';
import Booking from './Booking';

class Body extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Home} />
            <Route path="/productadd" exact component={ProductAdd} />
            {/* <Route path='/update/:id' exact component={Product} /> */}
            <Route path="/contactus" exact component={ContactUs} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/updateprofile/:id" exact component={UpdateProfile} />
            <Route path="/aboutus" exact component={AboutUs} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/c" exact component={Cart} />
            <Route path="/booking" exact component={Booking} />
            <Route
              path="/productsingledata/:id"
              exact
              component={ProductSingleData}
            />
            <Route path="/productshowall" exact component={ProductShowAll} />
            <Route path="/productupdate/:id" exact component={UpdateProduct} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Body;
