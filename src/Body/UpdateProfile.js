import {
  Component,
  state,
  changeHandler,
  updateUserData,
  fileHandler,
} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

class UpdateProfile extends Component {
  state = {
    fname: '',
    lname: '',
    dob: '',
    phone: '',
    address: '',
    checkupdate: false,
    id: this.props.match.params.id,
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    },
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    axios
      .get('http://localhost:90/customer/single/' + this.state.id)
      .then((response) => {
        this.setState({
          fname: response.data.fname,
          lname: response.data.lname,
          dob: response.data.dob,
          phone: response.data.phone,
          address: response.data.address,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  updateUserData = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:90/customer/update', this.state, this.state.config)
      .then((response) => {
        console.log(response);
        this.setState({
          checkupdate: true,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    if (this.state.checkupdate === true) {
      return (window.location.href = '/profile');
    }
    return (
      <Row className='update-user-details mt-4 mb-4'>
        <Col className='u-userdetails'>
          <Form className='UUDetailsForm mt-2'>
            <h4 className="u1 des">View and update your details</h4>
            <Form.Group controlId='formBasicTitle' className='UUform'>
              <Form.Control
                type='text'
                placeholder='Enter fname'
                value={this.state.fname}
                name='fname'
                onChange={this.changeHandler}
              />
            </Form.Group>

            <Form.Group controlId='formBasicReleaseDate'>
              <Form.Control
                type='text'
                placeholder='Enter lname'
                value={this.state.lname}
                name='lname'
                onChange={this.changeHandler}
              />
            </Form.Group>

            <Form.Group controlId='formBasicDescription'>
              <Form.Control
                type='date'
                placeholder='Enter dob'
                value={this.state.dob}
                name='dob'
                onChange={this.changeHandler}
              />
            </Form.Group>
            <Form.Group controlId='formBasicDescription'>
              <Form.Control
                type='text'
                placeholder='Enter phone'
                value={this.state.phone}
                name='phone'
                onChange={this.changeHandler}
              />
            </Form.Group>
            <Form.Group controlId='formBasicDescription'>
              <Form.Control
                type='text'
                placeholder='Enter address'
                value={this.state.address}
                name='address'
                onChange={this.changeHandler}
              />
            </Form.Group>
            <Form.Group controlId='formBasicDescription'></Form.Group>
            <Button
              variant='primary'
              type='submit'
              className='btnuserupdateform mb-4 mt-3'
              onClick={this.updateUserData}
            >
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}
export default UpdateProfile;
