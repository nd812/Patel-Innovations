import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { useState } from 'react';
import finalbackground from './images/finalbackground.jpeg';
import back2 from './images/back2.jpeg';
import back3 from './images/back3.jpg';
import cradlelogo from './images/crpink1.jpeg';
import croscradle from './images/croscradle.jpeg';
import cradleall from './images/cradleall.jpeg';
import hanglamp from './images/hanglamp.jpg';
import printer1 from './images/printer1.jpeg';
import d3printer from './images/d3printer.jpg';
import dprint from './images/dprint.jpg';
import des11 from './images/des11.jpeg';
import des2 from './images/des2.jpg';
import des22 from './images/des22.jpg';
import des1 from './images/des1.jpg';
import carcradle from './images/carcradle.jpeg';




const images1 = [cradlelogo, croscradle, cradleall, carcradle];
const images2 = [d3printer, printer1, hanglamp, dprint];
const images3 = [des1, des11, des2, des22];

function Home() {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);

  const handleSelect1 = (selectedIndex, e) => {
    setIndex1(selectedIndex);
  };

  const handleSelect2 = (selectedIndex, e) => {
    setIndex2(selectedIndex);
  };

  const handleSelect3 = (selectedIndex, e) => {
    setIndex3(selectedIndex);
  };
  return (
    <div className="home-container text-light py-5">
      <section className="hero-section" style={{ padding: '50px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 service-text animate-slide-in animate-slide-in-left">
              <h1 className="headline">Revolutionizing the Future with Patel Innovations</h1>
              <p className="subheadline">Our cutting-edge solutions and products bring your ideas to life.</p>
              <Link to="/services" className="btn btn-primary btn-lg">Explore Our Services</Link>
            </div>

          </div>
        </div>
      </section>

      <Carousel fade>
        <Carousel.Item className='service-text animate-slide-in animate-slide-in-right'>
          <img
            className="d-block w-100 curved-image"
            src={finalbackground} alt="3D printer"
          />
          <Carousel.Caption>
            <h1>Automatic cradles</h1>
            <p>Automatic cradles for children are an innovative and convenient solution for busy parents who want to provide their little ones with a safe and comfortable sleeping environment.</p>
            <p> These cradles use advanced technology to create a soothing and relaxing environment for babies, helping them fall asleep quickly and stay asleep longer.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 curved-image"
            src={back2} alt="3D printer"
          />

          <Carousel.Caption>
            <h1>3D Printing</h1>
            <p>One of the biggest advantages of 3D printing is its ability to create complex shapes and geometries that would be difficult or impossible to manufacture using traditional methods.</p>
            <p> This technology has revolutionized industries such as aerospace, automotive, and medical, enabling faster and more efficient production of parts and components.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 curved-image "
            src={back3} alt="3D printer"
          />

          <Carousel.Caption>
            <h1>Product development </h1>
            <p>
              Product development can be accelerated and made more efficient with 3D printing technology, as it allows for rapid prototyping and customization of designs.
            </p>
            <p>We specialize in designing innovative products using the latest technology and creative thinking.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className='home-container headpad'>
        <h1 className="text-center mb-5">Our Services</h1>
        <Row>
          <Col md={4} className='service-text animate-slide-in animate-slide-in-right'>
            <Card className="cardplay" style={{ borderRadius: "10px" }}>
              <Carousel activeIndex={index1} onSelect={handleSelect1}>
                {images1.map((image, idx) => (
                  <Carousel.Item key={idx}>
                    <img className="d-block w-100" src={image} alt={`Slide ${idx}`} style={{ borderRadius: "10px 10px 0 0" }} />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title>Automatic Baby Cradle</Card.Title>
                <Card.Text>
                  An automatic baby cradle is a wonderful invention that can make parenting easier and more convenient. This innovative product uses advanced technology to soothe and lull babies to sleep, allowing parents to have some much-needed rest and relaxation.
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='service-text animate-slide-in animate-slide-in-right'>
            <Card className="cardplay" style={{ borderRadius: "10px" }}>
              <Carousel activeIndex={index2} onSelect={handleSelect2}>
                {images2.map((image, idx) => (
                  <Carousel.Item key={idx}>
                    <img className="d-block w-100 " src={image} alt={`Slide ${idx}`} style={{ borderRadius: "10px 10px 0 0" }} />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title>3D Printing</Card.Title>
                <Card.Text>
                  3D printing has many potential applications, including rapid prototyping, product development, and even creating custom prosthetics or medical implants. It has also been used in aerospace, automotive, and architecture industries to create complex parts and structures that would be difficult to manufacture using traditional methods.
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='service-text animate-slide-in animate-slide-in-left'>
            <Card className="cardplay" style={{ borderRadius: "10px" }}>
              <Carousel activeIndex={index3} onSelect={handleSelect3}>
                {images3.map((image, idx) => (
                  <Carousel.Item key={idx}>
                    <img className="d-block w-100 " src={image} alt={`Slide ${idx}`} style={{ borderRadius: "10px 10px 0 0" }} />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title>Product design and development</Card.Title>
                <Card.Text>
                  the process of creating new products or improving existing ones, from concept to launch. We help you to Idea generation, Concept development, Design, Prototype development, Production.
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


      <section className="features-section text-center headpad ">
        <div className="container service-text animate-slide-in animate-slide-in-left">
          <h2 className="mb-5">Transform Your Ideas into Reality</h2>
          <div className="row">
            <div className="col-lg-4 mb-5">
              <div className="feature-item">
                <i className="fas fa-print fa-4x mb-4"></i>
                <h3>3D Printing</h3>
                <p className="text-muted mb-0">Experience lightning-fast printing speeds with our 3D printer, allowing you to bring your designs to life in record time.</p>
                <p className="text-muted mb-0">Create complex geometries and intricate designs with ease using our high-precision 3D printer, which produces stunning results every time.</p>
                <p className="text-muted mb-0">Get ahead of the competition by using our cutting-edge 3D printing technology, which allows you to rapidly prototype and iterate on your designs.</p>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="feature-item">
                <i className="fas fa-pencil-alt fa-4x mb-4"></i>
                <h3>Product Development & Design</h3>
                <p className="text-muted mb-0">Product development and design by  us involves the creation of new and innovative products, as well as improving existing products. Mechanical engineers play a crucial role in the design and development of products that meet specific requirements and satisfy customer needs.</p>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="feature-item">
                <i className="fas fa-cogs fa-4x mb-4"></i>

                <h3>Automatic baby Cradles</h3>
                <p className="text-muted mb-0">We are the first mover in our state in automatic cradle technology, bringing you the latest and greatest in smart and innovative cradle designs.</p>
                <p className="text-muted mb-0"> Our cradles are designed to provide ultimate safety and comfort to your little ones, while making parenting a lot easier for you. Trust us to give your baby the best possible start in life.</p>

              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="feature-item">
                <i className="fas fa-robot fa-4x mb-4"></i>
                <h3>Custom Solutions</h3>
                <p className="text-muted mb-0">We design and develop custom solutions tailored to your specific business needs.</p>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="feature-item">
                <i className="fas fa-globe fa-4x mb-4"></i>
                <h3>Global Reach</h3>
                <p className="text-muted mb-0">Our services are available worldwide, allowing you to connect with us no matter where you are.</p>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="feature-item">
                <i className="fas fa-headset fa-4x mb-4"></i>
                <h3>Expert Support</h3>
                <p className="text-muted mb-0">Our team of experts is always available to provide you with the support and guidance you need to succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}

export default Home;
