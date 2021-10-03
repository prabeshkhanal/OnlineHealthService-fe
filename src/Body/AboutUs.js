import React, { Component } from 'react';

class AboutUs extends Component {
  render() {
      return (
        <div>
          <section class='map-clean'>
            <div class='container'>
              <div class='intro'>
                <h2 class='text-center mt-4 mb-4'>Location </h2>
                <p class='text-center'>
                    We are situated and operating business from Kalanki,
                    Kathmandu, Nepal.
                </p>
              </div>
            </div>
            <div class="mb-4">
            <iframe
              allowfullscreen=''
              frameborder='0'
              src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBxnLSdArT-tZHdNXT44Nk79n5O-4LOLsM&amp;q=Kathmandu%2C+Kalanki&amp;zoom=15'
              width='100%'
              height='450'
              ></iframe>
            </div>  
          </section>
        </div>
      );
  }
}
export default AboutUs;
