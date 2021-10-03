import React, { Component, state, deleteProduct } from 'react';
import axios from 'axios';

class ProductShowAll extends Component {
  state = {
    product: [],
    message: "",
    checkDelete: false,
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    },
  };
  componentDidMount() {
    axios
      .get('http://localhost:90/product/fetch')
      .then((response) => {
        console.log(response);
        this.setState({
          product: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  deleteProduct = (pid) => {
    axios
      .delete('http://localhost:90/product/delete/' + pid, this.state.config)
      .then((response) => {
        console.log(response);
        this.setState({
          checkDelete: true,
          message: response.data.message,
        });
      })
      .catch((err) => {
        console.log(err.response);
        this.setState({
          message: err.response.data.message,
        });
      });
  };
  render() {
        if (this.state.checkDelete === true) {
          return (window.location.href = '/productshowall');
        }
    return (
      <section class='home'>
        <div class='container pcontain'>
          <div class='row'>
            {this.state.product.map((product) => {
              return (
                <div class='col-md-3 pcard'>
                  <div class='card picard'>
                    <img
                      src={'http://localhost:90/images/' + product.pimage}
                      class='img img-responsive'
                    />
                    <div class='card-bodyshowall'>
                      <h3 class='card-titleshowall'>{product.pname}</h3>
                      <p class='card-textshowall'>{product.pprice}</p>
                      <button class='btn btn-outline-primary'>
                        <a href={'/productupdate/' + product._id}>Update</a>
                      </button>
                      &nbsp;&nbsp;
                      <button
                        className='btn btn-danger'
                        variant='primary'
                        type='submit'
                        onClick={this.deleteProduct.bind(this, product._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            ;
          </div>
        </div>
      </section>
    );
  }
}
export default ProductShowAll;
