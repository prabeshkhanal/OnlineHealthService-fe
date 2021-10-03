import {
  Component,
  state,
  changeHandler,
  updateData,
  renderRedirect,
} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

class UpdateProduct extends Component {
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
      .get('http://localhost:90/product/single/' + this.state.id)
      .then((response) => {
        this.setState({
          pname: response.data.pname,
          pprice: response.data.pprice,
          pdesc: response.data.pdesc,
          pcompanyname: response.data.pcompanyname,
          pmadein: response.data.pmadein,
          pimage: response.data.pimage,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  updateData = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:90/product/update', this.state, this.state.config)
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
      return (window.location.href = '/');
    }
    return (
      <Row className='insert-product mt-4 mb-4'>
        <Col className='i-product mt-2'>
          <Form>
            <Form.Group controlId='formBasicName'>
              <Form.Control
                type='text'
                placeholder='Enter Product Name'
                value={this.state.pname}
                name='pname'
                onChange={this.changeHandler}
              />
            </Form.Group>

            <Form.Group controlId='formBasicPrice'>
              <Form.Control
                type='text'
                placeholder='Enter Price'
                value={this.state.pprice}
                name='pprice'
                onChange={this.changeHandler}
              />
            </Form.Group>

            <Form.Group controlId='formBasicDescription'>
              <Form.Control
                type='text'
                placeholder='Enter Description'
                value={this.state.pdesc}
                name='pdesc'
                onChange={this.changeHandler}
              />
            </Form.Group>
            <Button variant='primary' type='submit' onClick={this.updateData}>
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}
export default UpdateProduct;
