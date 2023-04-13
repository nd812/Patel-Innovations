import React from 'react';
import { Container, Row, Col,  Card } from 'react-bootstrap';

function Contact() {
  return (
    <div className="home-container text-light py-5">
    <Container className="py-5">
      <h1 className="text mb-5 service-text animate-slide-in animate-slide-in-left">Contact Us</h1>
      <Row>
        <Col md={6} className="mb-4 mb-md-0 ">
          <h6 className='service-text animate-slide-in animate-slide-in-left'>Feel free to reach out to us with any questions or inquiries.</h6>
          <Card className="my-4 conboxmake service-text animate-slide-in animate-slide-in-right" style={{backgroundColor:'rgba(255, 255, 255, 0.1)',  borderRadius: "20px 0px",  }}>
            <Card.Body>
              <Card.Title><i className="fas fa-phone mr-2"></i> Call Us</Card.Title>
              <Card.Text>
                <a href="tel:+919510579911">+91 9510579911</a><br />
                <a href="tel:+919979219244">+91 9979219244</a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-4 conboxmake service-text animate-slide-in animate-slide-in-left" style={{backgroundColor:'rgba(255, 255, 255, 0.1)', borderRadius: "20px 0px" }}>
            <Card.Body>
              <Card.Title><i className="fas fa-envelope mr-2"></i> Email Us</Card.Title>
              <Card.Text>
                <a href="mailto:swingtec.cradles@gmail.com">swingtec.cradles@gmail.com</a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-4 conboxmake service-text animate-slide-in animate-slide-in-right" style={{backgroundColor:'rgba(255, 255, 255, 0.1)',  borderRadius: "20px 0px" }}>
            <Card.Body>
              <Card.Title><i className="fas fa-map-marker-alt mr-2"></i> Find Us</Card.Title>
              <Card.Text>
                74, Shriyam-2 ind. Park,<br />
                Near Swaminarayan ind. Park,<br />
                Kathwada-Singarwa Rd,<br />
                Kathwada, Ahmedabad - 382430
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
      <hr className="my-5" />
      <Row className='service-text animate-slide-in animate-slide-in-left'>
        
        <Col md={6}>
          <h3>Some Inspirational Quotes</h3>
          <blockquote className="my-4">
            <p>"The best way to predict the future is to create it."</p>
            <footer className="blockquote-footer">Abraham Lincoln</footer>
          </blockquote>
          <blockquote className="my-4">
            <p>"Success is not final, failure is not fatal: it is the courage to continue that counts."</p>
            <footer className="blockquote-footer">Winston Churchill</footer>
          </blockquote>
        </Col>
      </Row>
    </Container>
    </div>
    );
  }
  
  export default Contact;