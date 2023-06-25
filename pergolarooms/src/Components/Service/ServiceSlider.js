import React, { useState } from "react";
import "../Service/ServiceSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillPlusCircleFill } from "react-icons/bs";

const ServiceSlider = () => {
  const slides = [
    {
      imgSrc: require("../../assets/ServiceImages/Image.jpg"),
      heading: "EXTERIOR",
      subheading: "PERGOLA ROOMS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      bgcolor: "#6c3433",
    },
    {
      imgSrc: require("../../assets/ServiceImages/Image2.jpg"),
      heading: "INTERIOR",
      subheading: "LIVING ROOMS",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      bgcolor: "#77736f",
    },
    {
      imgSrc: require("../../assets/ServiceImages/Image3.jpg"),
      heading: "GARDEN",
      subheading: "LANDSCAPING",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      bgcolor: "#1A5276",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  const currentSlide = slides[activeSlide];

  return (
    <div className="Service container-fluid">
      <div className="row">
        <div className="col-md-6 px-0">
          <img
            src={currentSlide.imgSrc}
            className="img-fluid"
            alt="Service Image"
          />
        </div>
        <div
          className="col-md-6 px-0"
          style={{ backgroundColor: currentSlide.bgcolor }}
        >
          <div className="service-content">
            <h5 className="font-face-rb">{currentSlide.heading}</h5>
            <p className="content-subheading font-face-rr">
              {currentSlide.subheading}
            </p>
            <p className="content-description font-face-rr">
              {currentSlide.description}
            </p>
            <a className="service-readmore-link font-face-rr">
              <BsFillPlusCircleFill />
              READ MORE
            </a>
          </div>
        </div>
      </div>
      <div className="slider-dots">
        {slides.map((slide, index) => (
          <span
            key={index}
            className={`dot ${activeSlide === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ServiceSlider;
