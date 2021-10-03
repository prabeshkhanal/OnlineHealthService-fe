import axios from "axios";
import { Button } from "react-bootstrap";
import React, { Component, state } from "react";
import doctor from "../Media/doctor.jpg";

class Booking extends Component {   
  render() {
    return (
      <div className="row">
        <div class="card-booking">
          <img src={doctor} class="card-img-top" alt="..." />
          <div class="card-body-booking">
            <h5 class="card-title-booking">Norvic Hospital</h5>
            <p class="card-text">
              Book an apponitment in Civil Hospital according your picked date.
            </p>
            <div class="box">
              <a href="#popup1" class="btn btn-primary">
                Book for checkup
              </a>
            </div>
            <div id="popup1" class="overlay">
              <div class="popup">
                <h2>Please note:</h2>
                <a class="close" href="#">
                  &times;
                </a>
                <div class="content">
                  Thank you for booking. Please visit on October 4 at 2 pm on
                  hospital premises
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-booking">
          <img src={doctor} class="card-img-top" alt="..." />
          <div class="card-body-booking">
            <h5 class="card-title-booking">Norvic Hospital</h5>
            <p class="card-text">
              Book an apponitment in TU Teaching Hospital according your picked date.
            </p>
            <div class="box">
              <a href="#popup1" class="btn btn-primary">
                Book for checkup
              </a>
            </div>
            <div id="popup1" class="overlay">
              <div class="popup">
                <h2>Please note:</h2>
                <a class="close" href="#">
                  &times;
                </a>
                <div class="content">
                  Thank you for booking. Please visit on October 4 at 2 pm on
                  hospital premises
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-booking">
          <img src={doctor} class="card-img-top" alt="..." />
          <div class="card-body-booking">
            <h5 class="card-title-booking">Norvic Hospital</h5>
            <p class="card-text">
              Book an apponitment in Norvic Hospital according your picked date.
            </p>
            <div class="box">
              <a href="#popup1" class="btn btn-primary">
                Book for checkup
              </a>
            </div>
            <div id="popup1" class="overlay">
              <div class="popup">
                <h2>Please note:</h2>
                <a class="close" href="#">
                  &times;
                </a>
                <div class="content">
                  Thank you for booking. Please visit on October 4 at 2 pm on
                  hospital premises
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
