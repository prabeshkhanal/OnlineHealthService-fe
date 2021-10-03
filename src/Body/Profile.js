import { Component, state } from 'react';
import { Row, Col , Button } from 'react-bootstrap';
import profileimg from '../Media/profile.png';
import axios from 'axios';
class Profile extends Component {
  state = {
    id: localStorage.getItem('userId'),
    fname: '',
    lname: '',
    address: '',
    phone: '',
    email: '',
    dob: '',
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    },
  };

  componentDidMount() {
axios
  .get('http://localhost:90/customer/single/' + this.state.id)
  .then((response) => {
    this.setState({
      fname: response.data.fname,
      lname: response.data.lname,
      dob: response.data.dob,
      phone: response.data.phone,
      address: response.data.address,
      email:response.data.email
    });
  })
  .catch((err) => {
    console.log(err.response);
  });
  }
  render() {
    return (
      <Row className='mb-4 mt-4'>
        <Row className='mb-4 mt-4'>
          <Col>
            <img className='adminimg' src={profileimg} alt='profile image' />
          </Col>
          <Col>
            <div className='a1 ml-4'>Welcome to your profile</div>
            <div class='a1 des'>
              <ul>
                <p>FirstName: {this.state.fname}</p>
                <p>LastName: {this.state.lname}</p>
                <p>Email: {this.state.email}</p>
              </ul>
            </div>
            <Button
              className='ml-4'
              href={'/updateprofile/' + this.state.id}
            >
              Update your profile
            </Button>
          </Col>
        </Row>
      </Row>
    );
  }
}
export default Profile;
