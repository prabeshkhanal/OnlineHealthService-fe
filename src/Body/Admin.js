import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import adminimg from '../Media/admin_settings.png';

class Admin extends Component {
  render() {
    return (
      <Row className='mb-4 mt-4'>
        <Row className='mb-4 mt-4'>
          <Col>
            <img className='adminimg' src={adminimg} alt='admin image' />
          </Col>
          <Col>
            <div className='a1'>Welcome to the Admin page</div>
            <div class='a1 des'>
              (Here you can insert, update or delete any product)
            </div>
            <Button className='mr-4 mb-4' href='/productadd'>
              Insert any product
            </Button>
            <Button className='mr-4 mb-4' href='/productshowall'>
              Update or delete any product
            </Button>
          </Col>
        </Row>
      </Row>
    );
  }
}

export default Admin;
