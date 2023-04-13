import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import frontcradelimg from './images/crpink1.jpeg';
import d3printerimg from './images/R.NRI.png';
import printop1 from './images/printop1.jpg';
import cradelv from './images/cradelv1.mp4'
import pushbutton from './images/pushbutton.mp4'

function Services() {

  
  return (
    <div className="home-container py-5 headpad text-light bootomspace">
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


       
          <div>
            <Row className="headpad">
              <Col lg={6} className="order-md-1 service-text animate-slide-in animate-slide-in-left">
                <img src={frontcradelimg} alt="Swingtec Cradles" className="service-img" />
              </Col>
              <Col lg={6} className="order-md-2 service-text animate-fade-in">
                <div className="service-box">
                  <h2 className="service-title service-text animate-slide-in animate-slide-in-left">
                    Simple 2-Fold Cradle
                  </h2>
                  <p className="service-text animate-slide-in animate-slide-in-right">
                  The 2-Fold Cradle weighs 4.5 KG and has a width of 119cm and a height of 81cm. This versatile piece of furniture is designed to provide a comfortable and secure sleeping environment for infants while also being easy to move and store.  </p>
                  <p className="service-text animate-slide-in animate-slide-in-right">
                    Our Swingtec Cradles provide a comfortable and secure way to hold and transport infants. With advanced safety features and durable construction, our cradles are trusted by parents and healthcare professionals alike.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="headpad">
              <Col lg={6} className="order-md-2 service-text animate-slide-in animate-slide-in-right">
                <img src={d3printerimg} alt="3D Printing" className="service-img" />
              </Col>
              <Col lg={6} className="text order-md-1 service-text animate-fade-in">
                <div className="service-box">
                  <h2 className="service-title service-text animate-slide-in animate-slide-in-left">
                    NRI 4-Fold Cradle
                  </h2>
                  <p className="service-text animate-slide-in animate-slide-in-right">
                 
                  The NRI 4-Fold Cradle is a portable and convenient option for parents on the go. With a weight of 7.5 KG, a width of 120cm, and a height of 81cm, it provides a comfortable and secure sleeping environment for infants.<br></br><br></br> 
                  When it folded, it becomes 2.5ft, making it easy to carry and store while still maintaining its durability and stability.
                  <br></br><br></br>
                  Moreover, Automatic cradle kit is available with both American and Indian voltage support.


                  </p>  </div>
              </Col>
            </Row>
          </div>
          <div>
  <Row className="headpad ">
    <Col lg={6} className="order-md-1 service-text animate-slide-in animate-slide-in-left">
      <video  autoPlay muted loop className='service-img'>
        <source src={pushbutton} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Col>
    <Col lg={6} className="order-md-2 service-text animate-fade-in">
      <div className="service-box">
        <h2 className="service-title service-text animate-slide-in animate-slide-in-left">
           Push-Button 3-Fold Caradle
        </h2>
        <p className="service-text animate-slide-in animate-slide-in-right">
        One of its key features is the push-button mechanism that allows for the legs to be separated. <br></br><br></br>
        providing additional stability and safety for the infant. Overall, this cradle offers a convenient and practical solution for families with young children.        </p>
      </div>
    </Col>
  </Row>
</div>


<div>
            <Row >
              <Col lg={6} className="order-md-2 service-text animate-slide-in animate-slide-in-right">
                <img src={printop1} alt="3D Printing" className="service-img" />
              </Col>
              <Col lg={6} className="text order-md-1 service-text animate-fade-in">
                <div className="service-box">
                  <h2 className="service-title service-text animate-slide-in animate-slide-in-left">
                   3D Printing
                  </h2>
                  <p className="service-text animate-slide-in animate-slide-in-right">
                 
                  3D printing has revolutionized the manufacturing industry by providing a cost-effective and efficient way to produce complex parts and products. At our company, we have been at the forefront of this innovation since 2017, serving a wide range of industries with our 3D printing services.<br></br><br></br> 
                          
                  Our team of experts is equipped with the latest 3D printing technology and software to provide customized solutions tailored to the specific needs of each project. Whether you need rapid prototyping, small batch production, or large-scale manufacturing, we have the expertise and resources to deliver high-quality results on time and within budget.
                  <br></br><br></br>
                  In addition to our 3D printing services, we also offer design and cutting-edge product development solutions. Our team of experienced designers works closely with clients to create unique and functional products that meet their specific requirements.
                  </p>  </div>
              </Col>
            </Row>
          </div>
          

          
        </Container>
  
   
    </div>
  )
}
export default Services;