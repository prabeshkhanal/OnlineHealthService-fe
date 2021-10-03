import React, {
  Component,
  state,
  addProductHandler,
  inputHandler,
  fileHandler,
} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class ProductAdd extends Component {
  state = {
    pname: '',
    pprice: '',
    pdesc: '',
    pimage: '',
    pcompanyname: '',
    pmadein: '',
    checkadd: false,
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    },
  };
  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  fileHandler = (e) => {
    this.setState({
      pimage: e.target.files[0],
    });
  };

  addProductHandler = (e) => {
    e.preventDefault(); //By default from refreshes page

    const data = new FormData(); //new line

    data.append('pname', this.state.pname);
    data.append('pprice', this.state.pprice);
    data.append('pdesc', this.state.pdesc);
    data.append('pimage', this.state.pimage);
    data.append('pcompanyname', this.state.pcompanyname);
    data.append('pmadein', this.state.pmadein);

    axios
      .post('http://localhost:90/product/add', data)
      .then((response) => {
        console.log(response);
        this.setState({
          checkadd: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
  
    if (this.state.checkadd === true) {
      return (window.location.href = '/productadd');
    }
    return (
      <Row className='mt-4 mb-4'>
        <Col>
          <Form className='mt-2'>
            <Form.Group controlId='formBasicProduct'>
              <Form.Control
                type='text'
                placeholder='Enter Product Name'
                value={this.state.pname}
                name='pname'
                onChange={this.inputHandler}
              />
            </Form.Group>

            <Form.Group controlId='formBasicDescription'>
              <Form.Control
                type='text'
                placeholder='Enter Product Description'
                value={this.state.pdesc}
                name='pdesc'
                onChange={this.inputHandler}
              />
            </Form.Group>

            <Form.Group controlId='formBasicManufactured'>
              <Form.Control
                type='text'
                placeholder='Enter The Country Where Product Was Manufactured'
                value={this.state.pmadein}
                name='pmadein'
                onChange={this.inputHandler}
              />
            </Form.Group>

            <Form.Group controlId='formBasicCompany'>
              <Form.Control
                type='text'
                placeholder='Enter The Company Name of Product'
                value={this.state.pcompanyname}
                name='pcompanyname'
                onChange={this.inputHandler}
              />
            </Form.Group>

            <Form.Group controlId='formBasicPrice'>
              <Form.Control
                type='text'
                placeholder='Enter Product Price'
                value={this.state.pprice}
                name='pprice'
                onChange={this.inputHandler}
              />
            </Form.Group>

            <Form.Group>
              <Form.File
                id='exampleFormControlFile1'
                label='For image upload click here'
                name='pimage'
                onChange={this.fileHandler}
              />
            </Form.Group>
            <div class='mb-4'>
              <Button
                variant='primary'
                type='submit'
                onClick={this.addProductHandler}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    );
  }
}
{
  /* <div>
<form>
    <p>Productname</p>
    <input type="text" name="pname"
    value={this.state.pname}
    onChange={this.changeHandler}
    />

<p>Productprice</p>
    <input type="text" name="pprice"
    value={this.state.pprice}
    onChange={this.changeHandler}
    />
</form>
</div> */
}

export default ProductAdd;

// deleteProduct = (pid) => {
// axios.delete('http://localhost:/product/delete' + pid)
// .then((response)=>{
//     console.log(response)
// })
// .catch((err)=>{
//     console.log(err.response)
// })
// }
