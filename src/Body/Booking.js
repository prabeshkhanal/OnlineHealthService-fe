import axios from "axios";
import { Button } from "react-bootstrap";
import React, { Component, state } from "react";
import doctor from "../Media/doctor.jpg";

class Booking extends Component {
    state = {
        message: '',
    }
  render() {
    return (
      <div className="row">
        <div class="card-booking">
          <img src={doctor} class="card-img-top" alt="..." />
          <div class="card-body-booking">
            <h5 class="card-title-booking">Norvic Hospital</h5>
            <p class="card-text">
              Book an apponitment in Norvic Hospital according your picked date.
            </p>
            <a href="#" class="btn btn-primary">
              Book for checkup
            </a>
          </div>
        </div>
        <div class="card-booking">
          <img src={doctor} class="card-img-top" alt="..." />
          <div class="card-body-booking">
            <h5 class="card-title-booking">Norvic Hospital</h5>
            <p class="card-text">
              Book an apponitment in Norvic Hospital according your picked date.
            </p>
            <a href="#" class="btn btn-primary">
              Book for checkup
            </a>
          </div>
        </div>
        <div class="card-booking">
          <img src={doctor} class="card-img-top" alt="..." />
          <div class="card-body-booking">
            <h5 class="card-title-booking">Norvic Hospital</h5>
            <p class="card-text">
              Book an apponitment in Norvic Hospital according your picked date.
            </p>
            <a href="#" class="btn btn-primary">
              Book for checkup
            </a>
          </div>
            </div>
            
      </div>
    );
  }
}

export default Booking;
