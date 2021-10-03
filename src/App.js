import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/'
import './css/style.css'
// import './js/jquery.min.js'
import './fonts/font-awesome.min.css'
import './fonts/ionicons.min.css'
import {BrowserRouter} from 'react-router-dom';
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
