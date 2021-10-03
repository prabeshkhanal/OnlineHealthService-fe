import {
  Component,
  state,
  inputHandler,
  Cart,
  IncrementItem,
  DecrementItem,
} from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import asthama from "../Media/asthama.jpg";
import diabetes from "../Media/diabetes.jpg";
import hypertension from "../Media/hypertension1.jpg";

class Subscription extends Component {
  state = {
    qty: 1,
  };
  IncrementItem = () => {
    this.setState({ qty: this.state.qty + 1 });
  };
  DecrementItem = () => {
    this.setState({ qty: this.state.qty - 1 });
  };
  render() {
    return (
      <div className="row">
        <div class="card-sub">
          <img src={hypertension} class="card-img-top" alt="..." />
          <div class="card-body-sub">
            <h5 class="card-title-sub">Diuretics</h5>
            <p class="card-text">Medication for hypertension</p>
          </div>

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
            <Button className="mr-2 ml-2" type="button">
              Subscribe
            </Button>
          </div>
        </div>
        <div class="card-sub">
          <img src={diabetes} class="card-img-top" alt="..." />
          <div class="card-body-sub">
            <h5 class="card-title-sub">Glimepiride (Amaryl)</h5>
            <p class="card-text">Medication for diabetes</p>
          </div>
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
            <Button className="mr-2 ml-2" type="button">
              Subscribe
            </Button>
          </div>
        </div>
        <div class="card-sub">
          <img src={asthama} class="card-img-top" alt="..." />
          <div class="card-body-sub">
            <h5 class="card-title-sub">Inhaled Corticosteroids</h5>
            <p class="card-text">Medication for asthma</p>
          </div>
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
            <Button className="mr-2 ml-2" type="button">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscription;
