import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
          />
          <title>Untitled</title>
          <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="fonts/ionicons.min.css" />
          <link rel="stylesheet" href="css/Footer-Dark.css" />
          <link rel="stylesheet" href="css/styles.css" />
        </head>

        <body>
          <footer class="footer-dark">
            <div class="container">
              <div class="row">
                <div class="col-sm-6 col-md-3 item">
                  <h3>Services</h3>
                  <ul>
                    <p>OnlineHealthService</p>
                    <p>Medicines, Tablets, Health Appointments</p>
                    <p>Supplies and Services</p>
                  </ul>
                </div>
                <div class="col-sm-6 col-md-3 item">
                  <h3>About</h3>
                  <ul>
                    <li>
                      <a href="/contactus">ContactUs</a>
                    </li>
                    <li>
                      <a href="/aboutus">AboutUs</a>
                    </li>
                    <li>
                      <a href="/lodin">Login Page</a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6 item text">
                  <h3>OnlineHealthService</h3>
                  <p>
                    We provide Health services in Nepal. Cureently we only
                    provide our service to Kathmandu Valley.
                  </p>
                </div>
                <div class="col item social">
                  <a href="">
                    <i class="icon ion-social-facebook"></i>
                  </a>
                  <a href="">
                    <i class="icon ion-social-twitter"></i>
                  </a>
                  <a href="">
                    <i class="icon ion-social-instagram-outline"></i>
                  </a>
                  <a href="">
                    <i class="icon ion-social-youtube"></i>
                  </a>
                </div>
              </div>
              <p class="copyright">OnlineHealthService © 2021</p>
            </div>
          </footer>
        </body>
      </div>
    );
  }
}

export default Footer;
