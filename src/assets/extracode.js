import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import frontcradelimg from './d3printer.jpg';
import d3printerimg from './des11.jpeg';
import croscradleimg from './cradleall.jpeg';
import './App.css';
import cradelv from './cradelv1.mp4'

function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slides',
  };

  return (
    <div className="home-container py-5 headpad text-light">
      <div className="services-background"></div>
      <div className="services-overlay"></div>
      <Container className="headpad">
        <h1 className="services-header service-text animate-slide-in animate-slide-in-left">
          Our Services
        </h1>



        <div className="cradelvideo headpad animate-slide-in animate-slide-in-left">
          <video autoPlay muted loop>
            <source src={cradelv} type="video/mp4" className='cradelvideo' />
          </video>
        </div>

        <div md={6} className="headpad animate-slide-in animate-slide-in-right">
          <h3 className="text">Automatic cradle kit</h3>
          <p className="text">
            An automatic cradle kit is an innovative solution designed to help parents soothe and put their babies to sleep. This kit typically includes a cradle that can swing back and forth, as well as a motor and a timer that control the swinging motion. </p>
          <p className="text">
            One of the key benefits of an automatic cradle kit is that it can provide a calming, rhythmic motion that helps babies relax and fall asleep. This can be particularly useful for parents who are struggling to soothe a fussy or colicky baby.</p>


          <p className="text">
            Our automatic cradle kit is available with both American and Indian voltage support.</p>


        </div>


        <Slider {...settings}>
          <div>
            <Row className="headpad">
              <Col lg={6} className="order-md-1 service-text animate-slide-in animate-slide-in-left">
                <img src={frontcradelimg} alt="Swingtec Cradles" className="service-img" />
              </Col>
              <Col lg={6} className="order-md-2 service-text animate-fade-in">
                <div className="service-box">
                  <h2 className="service-title service-text animate-slide-in animate-slide-in-left">
                    Swingtec Cradles
                  </h2>
                  <p className="service-text animate-slide-in animate-slide-in-right">
                    Our Swingtec Cradles provide a comfortable and secure way to hold and transport infants. With advanced safety features and durable construction, our cradles are trusted by parents and healthcare professionals alike.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="headpad">
              <Col lg={6} className="order-md-1 service-text animate-slide-in animate-slide-in-right">
                <img src={d3printerimg} alt="3D Printing" className="service-img" />
              </Col>
              <Col lg={6} className="text order-md-2 service-text animate-fade-in">
                <div className="service-box">
                  <h2 className="service-title service-text animate-slide-in animate-slide-in-left">
                    3D Printing
                  </h2>
                  <p className="service-text animate-slide-in animate-slide-in-right">
                    Our 3D printing services allow you to bring your ideas to life. From prototypes to fully-functional products, we use state-of-the-art technology and materials to create high-quality prints with precision and speed.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="headpad">
              <Col lg={6} className="order-md-1 service-text animate-slide-in animate-slide-in-left">
                <img src={croscradleimg} alt="Product Design" className="service-img" />
              </Col>
              <Col lg={6} className="order-md-2 service-text animate-fade-in">
                <div className="service-box">
                  <h2 className="service-title service-text animate-slide-in animate-slide-in-left">
                    Product Design
                  </h2>
                  <p className="service-text animate-slide-in animate-slide-in-right">
                    Our product design
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Slider>





        <Slider {...settings}>
          <div>
            <Row >
              <Col lg={6} className="order-md-2 service-text animate-slide-in animate-slide-in-left">
                <img src={frontcradelimg} alt="Swingtec Cradles" className="service-img" />
              </Col>
              <Col lg={6} className="order-md-1 service-text animate-fade-in">
                <div className="service-box">
                  <h2 className="service-title service-text animate-slide-in animate-slide-in-left">
                    Swingtec Cradles
                  </h2>
                  <p className="service-text animate-slide-in animate-slide-in-right">
                    Our Swingtec Cradles provide a comfortable and secure way to hold and transport infants. With advanced safety features and durable construction, our cradles are trusted by parents and healthcare professionals alike.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row >
              <Col lg={6} className="order-md-2 service-text animate-slide-in animate-slide-in-right">
                <img src={d3printerimg} alt="3D Printing" className="service-img" />
              </Col>
              <Col lg={6} className="text order-md-1 service-text animate-fade-in">
                <div className="service-box">
                  <h2 className="service-title service-text animate-slide-in animate-slide-in-left">
                    3D Printing
                  </h2>
                  <p className="service-text animate-slide-in animate-slide-in-right">
                    Our 3D printing services allow you to bring your ideas to life. From prototypes to fully-functional products, we use state-of-the-art technology and materials to create high-quality prints with precision and speed.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="headpad">
              <Col lg={6} className="order-md-2 service-text animate-slide-in animate-slide-in-left">
                <img src={croscradleimg} alt="Product Design" className="service-img" />
              </Col>
              <Col lg={6} className="order-md-1 service-text animate-fade-in">
                <div className="service-box">
                  <h2 className="service-title service-text animate-slide-in animate-slide-in-left">
                    Product Design
                  </h2>
                  <p className="service-text animate-slide-in animate-slide-in-right">
                    Our product design team can help you turn your vision into reality. We offer a full range of design services, from concept development to engineering and manufacturing. Let us help you create a product that stands out in the market.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Slider>


        <Slider {...settings}>
          <div>
            <Row >
              <Col lg={6} className=" service-text animate-slide-in animate-slide-in-left">
                <img src={frontcradelimg} alt="Swingtec Cradles" className="service-img" />
              </Col>
              <Col lg={6} className="order-md-2 service-text animate-fade-in">
                <div className="service-box">
                  <h2 className="service-title service-text animate-slide-in animate-slide-in-left">
                    Swingtec Cradles
                  </h2>
                  <p className="service-text animate-slide-in animate-slide-in-right">
                    Our Swingtec Cradles provide a comfortable and secure way to hold and transport infants. With advanced safety features and durable construction, our cradles are trusted by parents and healthcare professionals alike.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="headpad">
              <Col lg={6} className="order-md-1 service-text animate-slide-in animate-slide-in-right">
                <img src={d3printerimg} alt="3D Printing" className="service-img" />
              </Col>
              <Col lg={6} className="text order-md-2 service-text animate-fade-in">
                <div className="service-box">
                  <h2 className="service-title service-text animate-slide-in animate-slide-in-left">
                    3D Printing
                  </h2>
                  <p className="service-text animate-slide-in animate-slide-in-right">
                    Our 3D printing services allow you to bring your ideas to life. From prototypes to fully-functional products, we use state-of-the-art technology and materials to create high-quality prints with precision and speed.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row >
              <Col lg={6} className="order-md-1 service-text animate-slide-in animate-slide-in-left">
                <img src={croscradleimg} alt="Product Design" className="service-img" />
              </Col>
              <Col lg={6} className="order-md-2 service-text animate-fade-in">
                <div className="service-box">
                  <h2 className="service-title service-text animate-slide-in animate-slide-in-left">
                    Product Design
                  </h2>
                  <p className="service-text animate-slide-in animate-slide-in-right">
                    Our product design
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Slider>


      </Container>
    </div>
  )
}
export default Services;