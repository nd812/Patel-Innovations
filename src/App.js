import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';
import Services from './Services'
import About from './About';
import companylogo from "./companylogo.png";
import blackdots from "./images/Untitled design.mp4";

function App() {
  return (
    <div className="site-container">
      <div className="video-background">
        <video autoPlay muted loop>
          <source src={blackdots} type="video/mp4" />
          
        </video>
      </div>

      <div className="content-container">
        <Nav />
       
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/" exact={true}><Home /></Route>
          <div className='bottomfootof'>
          <Route path="/services"><Services /></Route>
          
          
          </div>
        </Switch>
       
        <footer className="text-light ">
          <div className='footer'>
            <div className=" text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '20px 20px 0px 0px ', padding: '20px' }}>
              <div className="row">
                <div className="col-md-6">
                  <img alt="company logo" src={companylogo} className="logo-image" />
                  <h2 className="company-name ml-2">PATEL INNOVATIONS</h2>
                  <p className="mb-3">From imagination to innovation, Patel Innovations brings your ideas to life.</p>
                </div>
                <div className="col-md-6">
                  <p><i className="fas fa-map-marker-alt"></i> 74, Shriyam-2 ind. Park, Near Swaminarayan ind. Park,<br></br> Kathwada-Singarwa Rd, Kathwada, Ahmedabad - 382430</p>
                  <p><i className="fas fa-envelope"></i> swingtec.cradles@gmail.com </p>
                  <p><i className="fas fa-phone"></i> +91 9510579911</p>

                  <div className="social-icons-container">

                    <a href="https://www.facebook.com/3dextec" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f mx-3" ></i></a>
                    <a href="https://www.instagram.com/3dextec/" target="_blank" rel="noreferrer"><i className="fab fa-instagram mx-3" ></i></a>
                    <a href="https://wa.me/9510579911" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp  mx-3"></i></a>
                    <a href="https://goo.gl/maps/pJu2jAnGKT2yqh2i9" target="_blank" rel="noreferrer"><i className="fas fa-map-marker-alt mx-3" ></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </footer>
      </div>
    </div>
  );
}

export default App;
