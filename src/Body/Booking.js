import axios from "axios";
import { Button } from "react-bootstrap";
import React, { Component, state } from "react";

class Booking extends Component {
  state = {
    product: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:90/product/fetch")
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
  render() {
    return (
      <div>
        <div class="container mb-3">
          <div className="row">
            {this.state.product.map((product) => {
              return (
                <div class="col-md-3 mb-4 mt-4">
                  <div className="product-card-1">
                    <img
                      src={"http://localhost:90/images/" + product.pimage}
                      class="img img-responsive"
                    />
                    <div class="product-name">{product.pname}</div>
                    <div class="product-price">Nrs. {product.pprice}</div>
                    <div class="product-icons">
                      <Button href={"/productsingledata/" + product._id}>
                        More info...
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
