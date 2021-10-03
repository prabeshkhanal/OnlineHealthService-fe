import React, { Component, state, product, cart, deleteCart } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class Cart extends Component {
  state = {
    cart: [],
    product: [],
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    },
  };

  componentDidMount() {
    axios
      .get('http://localhost:90/wcart', this.state.config)
      .then((response) => {
        console.log('response is', response);
        this.setState({
          cart: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  deleteCart = (id) => {
    axios
      .delete('http://localhost:90/cart/delete/' + id, this.state.config)
      .then((response) => {
        console.log(response);
        window.location.href = '/';
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div class='container mb-3'>
        <div className='row'>
          {this.state.cart.map((product) => {
            return (
              <div class='col-md-3 mb-4 mt-4'>
                <div className='product-card-1'>
                  <img
                    src={'http://localhost:90/images/' + product.product.pimage}
                    class='img img-responsive'
                  />
                  <div class='product-name'>{product.product.pname}</div>
                  <div class='product-price'>Nrs. {product.product.pprice}</div>
                  <div class='product-icons'>
                    <Button onClick={this.deleteCart.bind(this, product._id)}>
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Cart;
