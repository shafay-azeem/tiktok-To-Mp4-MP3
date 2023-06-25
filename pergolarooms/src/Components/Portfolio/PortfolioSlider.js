import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioSlider = () => {
  const [PortfolioImages, setPortfolioImages] = useState([
    {
      id: 1,
      image: require("../../assets/PortfolioImages/400-x-400.jpg"),
    },
    {
      id: 2,
      image: require("../../assets/PortfolioImages/400-x-550.jpg"),
    },
    {
      id: 3,
      image: require("../../assets/PortfolioImages/400-x-400.jpg"),
    },
    {
      id: 4,
      image: require("../../assets/PortfolioImages/400-x-550.jpg"),
    },
    {
      id: 5,
      image: require("../../assets/PortfolioImages/400-x-400.jpg"),
    },
    {
      id: 6,
      image: require("../../assets/PortfolioImages/400-x-550.jpg"),
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="Portfolio-Slider py-5">
        <div className="row">
          <Slider {...settings}>
            {PortfolioImages.map((x, index) => {
              return (
                <div key={index} className={`col-lg-4 col-md-4 col-sm-4 ${index % 2 === 0 ? "py-5" : ""
                  } `}>
                  <div className="Portfolio-inner justify-content-center align-items-center d-flex px-3">
                    <img className="d-block img-fluid" src={x.image} alt="1" />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default PortfolioSlider;