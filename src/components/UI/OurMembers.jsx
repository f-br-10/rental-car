import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import {Link} from "react-router-dom";
import firas from "../../assets/all-images/firas.jpg";
import sadok from "../../assets/all-images/sadok.jpg";
import iheb from "../../assets/all-images/iheb.jpg";
import rayen from "../../assets/all-images/rayen.jpg";
const OUR__MEMBERS = [
  {
    name: "Firas",
    experience: "3 years of experience",
    fbUrl:"https://www.facebook.com/firas.brinis/",
    instUrl: "https://www.instagram.com/firas_brinis/",
    imgUrl: firas,
  },

  {
    name: "Sadok",
    experience: "3 years of experience",
    fbUrl: "https://www.facebook.com/sadok.drawil.9/",
    instUrl: "https://www.instagram.com/s_p_0_0_ky/",
    imgUrl: sadok,
  },

  {
    name: "Rayen",
    experience: "3 years of experience",
    fbUrl: "https://www.facebook.com/rayen.gasmi.14/",
    instUrl: "https://www.instagram.com/rayen__26/",
    imgUrl: rayen,
  },

  {
    name: "Iheb",
    experience: "3 years of experience",
    fbUrl: "https://www.facebook.com/fallagiheb/",
    instUrl: "https://www.instagram.com/iheb.khemiri/",
    imgUrl: iheb,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link 
                to={`${item.fbUrl}`} 
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                 e.preventDefault();
                 window.open(`${item.fbUrl}`);
                }}
                  >
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link 
                to={`${item.instUrl}`} 
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                 e.preventDefault();
                 window.open(`${item.instUrl}`);
                }}
                  >
                   <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
