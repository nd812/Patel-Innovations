import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function About() {
  return (
    <div className="home-container text-light py-5">
      <Container>
        <section className="about-section service-text animate-slide-in animate-slide-in-left">
          <h1 className="text headpad mb-5">About Us</h1>
          <Row>
            <Col md={6} className="mb-4 service-text animate-slide-in animate-slide-in-right">
              <h3 className="text">Our Team</h3>
              <p className="text">
              We are not just any ordinary team, but a team of extraordinary professionals with a passion for creating innovative product and solutions that can take our business to new heights. Our team is comprised of experienced 3d Printing,  cradle making, and  product design who have worked on a wide range of projects and have the expertise to deliver high-quality solutions tailored to your specific requirements. </p>
              <p className="text">
              our mission is to not only help businesses achieve their goals, but to surpass them. We are dedicated to creating innovative products that provide convenience and exceed our clients' expectations. To stay ahead of the curve, we utilize cutting-edge technology and leverage our expert knowledge to develop custom solutions that are specifically tailored to meet the unique needs of each business we work with. We are committed to delivering exceptional results and building long-term partnerships with our clients.
                 </p>
            </Col>
            <Col md={6} className='service-text animate-slide-in animate-slide-in-left'>
              <h3 className="text ">Our Vision</h3>
              <p className="text">
              Our company's vision is to become the leading provider of innovative products and solutions that empower businesses and individuals to achieve their full potential. We are committed to combining our technical expertise with a relentless passion for excellence to deliver products and services that help businesses grow and thrive in today's highly competitive market. With a focus on providing exceptional customer service, fostering long-term relationships, and continually pushing the boundaries of innovation, we believe we can make a significant impact on the success of our clients and the industry as a whole.
                   </p>
            </Col>
          </Row>
          
        </section>
        <hr className="my-5" />
<Row className='service-text animate-slide-in animate-slide-in-left'>
  <Col md={6}>
    <h3>Empowering Quotes to Inspire You</h3>
    <blockquote className="my-4">
      <p>"Believe you can and you're halfway there."</p>
      <footer className="blockquote-footer">Theodore Roosevelt</footer>
    </blockquote>
    <blockquote className="my-4">
      <p>"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."</p>
      <footer className="blockquote-footer">Albert Schweitzer</footer>
    </blockquote>
  </Col>
</Row>






      </Container>
    </div>
  );
}

export default About;
