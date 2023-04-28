import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import driveImg from "../assets/all-images/drive.jpeg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Safe Ride 
                </h2>

                <p className="section__description">
                As a leading transportation service provider, our commitment to safety is unwavering. 
                We prioritize the well-being of our passengers and take every measure to provide safe ride solutions. 
                Our fleet of vehicles is regularly maintained to ensure they are in optimal condition, and we adhere 
                to stringent safety standards in accordance with industry regulations. 
                Our drivers undergo thorough screening and training to ensure they are qualified and responsible,
                 and we continuously monitor their performance to maintain the highest level of safety.
                </p>

                <p className="section__description">
                Additionally, we invest in advanced technology to enhance safety, 
                including real-time GPS tracking, emergency response systems, and safety protocols
                 for unexpected situations. We understand the importance of safety in transportation, 
                 and our team is dedicated to providing reliable and secure rides for our valued customers.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
