import {
  Component,
  state,
  inputHandler,
  Cart,
  IncrementItem,
  DecrementItem,
} from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";

class ProductSingleData extends Component {
  state = {
    pname: "",
    pimage: "",
    pccompanyname: "",
    pdesc: "",
    pprice: "",
    pmadein: "",
    pid: "",
    qty: 1,
    id: this.props.match.params.id,
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
  };
  componentDidMount() {
    axios
      .get("http://localhost:90/product/single/" + this.state.id)
      .then((response) => {
        console.log(response.data);
        this.setState({
          pname: response.data.pname,
          pimage: response.data.pimage,
          pcompanyname: response.data.pcompanyname,
          pdesc: response.data.pdesc,
          pprice: response.data.pprice,
          pmadein: response.data.pmadein,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  Cart = (id) => {
    axios
      .post("http://localhost:90/cart/" + id, this.state, this.state.config)
      .then((response) => {
        console.log(response);
        window.alert("Your product has been added to the cart");
        window.location.href = "/c";
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  IncrementItem = () => {
    this.setState({ qty: this.state.qty + 1 });
  };
  DecrementItem = () => {
    this.setState({ qty: this.state.qty - 1 });
  };
  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Container>
        <div className="singleproductdata mb-4 mt-4">
          <Row>
            <Col md={3} sm={4} xs={12}>
              <Card className="product-card">
                <Card.Img
                  variant="top"
                  src={"http://localhost:90/images/" + this.state.pimage}
                />
                <Card.Body className="singleMCardbody mt-4">
                  <Card.Title>{this.state.pname}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={9} sm={4} xs={12} className="product-data mt-4">
              <p>
                <h1 className="mb-4">{this.state.pname}</h1>
              </p>
              <p>
                <h4 className="product-price mt-4">
                  {"Nrs " + this.state.pprice}
                </h4>
              </p>
              <p>
                <p>{this.state.pdesc}</p>
              </p>

              <div></div>
              <Button
                className="mr-2"
                type="button"
                onClick={this.Cart.bind(this, this.state.id)}
              >
                Add to Cart
              </Button>
              <input
                className="mt-4 mb-4"
                type="text"
                value={this.state.qty}
                onChange={(event) => {
                  this.setState({ qty: event.target.value });
                }}
              />
              <div>
                <Button className="pb" onClick={this.DecrementItem}>
                  -
                </Button>
                <Button className="pb" onClick={this.IncrementItem}>
                  +
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
export default ProductSingleData;
