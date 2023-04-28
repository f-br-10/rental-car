import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import image1 from "../../assets/all-images/1.jpg";
import image2 from "../../assets/all-images/2.png";
import image3 from "../../assets/all-images/3.jpg";
import image4 from "../../assets/all-images/4.png";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Renting a car from Manar Car was an excellent experience. The process was smooth, and the car was in great condition.
         The staff was friendly and accommodating, providing helpful tips and recommendations for our road trip. 
         The rates were reasonable, and the customer service was top-notch. We had a fantastic time exploring the beautiful scenery
          with the convenience and comfort of a rented car. Highly recommend Manar Car for anyone looking for a reliable car rental
           service!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={image1} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">houssem</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Our family recently rented a car from Manar Car for our vacation, and we were thoroughly impressed. 
        The booking process was easy, and the car was ready for us when we arrived. The vehicle was clean, well-maintained,
         and exactly what we needed for our trip. The staff was friendly and provided us with all the necessary 
         information and directions. We were able to travel comfortably and explore the area at our own pace. Manar Car
          exceeded our expectations, and we would choose them again for our future car rental needs.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={image2} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">amine</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I had a fantastic experience renting a car from Manar Car. The entire process was seamless, 
        from booking online to picking up the car. The car was in excellent condition, and the staff was professional and friendly.
         They answered all my questions and provided me with helpful tips for my trip. The rental rates were competitive, 
         and the service was exceptional. I had a smooth and enjoyable trip thanks to Manar Car, and I would highly recommend 
         them to anyone in need of a reliable car rental service.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={image3} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">sonia</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I recently rented a car from Manar Car, and it was a great experience. 
        The car was clean, well-maintained, and performed flawlessly throughout my trip. 
        The customer service was outstanding, and the staff went above and beyond to ensure that I had a smooth rental experience.
         The flexibility and convenience of having a rental car allowed me to explore the area at my own pace and made my trip even more enjoyable.
          I highly recommend Manar Car for their excellent service and reliable rental cars
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={image4} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">sonia</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
