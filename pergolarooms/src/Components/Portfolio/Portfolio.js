import React from "react";
import "../Portfolio/Portfolio.css";
import PortfolioSlider from "./PortfolioSlider";
import { BsFillPlusCircleFill } from "react-icons/bs";

const Portfolio = () => {
  return (
    <div className="portfolio container-fluid">
      <div className="container">
        <div className="row py-5 d-md-flex">
          <div className="col-md-6">
            <h4 className="portfolio-heading text-start font-face-rb">
              MODERN WORLD EXTERIORS
            </h4>
            <p className="portfolio-subheading text-start font-face-rl">
              PERGOLAS DESIGNS
            </p>
          </div>
          <div className="col-md-6">
            <p className="portfolio-description font-face-rr  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nihil
              perferendis quidem, voluptatum assumenda fugit cum sequi hic
              repudiandae est recusandae harum inventore reiciendis ipsam sit
              animi maxime corrupti ipsum similique. Maxime temporibus dolorum
              minima velit ullam sapiente enim, esse optio, nihil eius itaque
              amet deleniti voluptates accusamus rerum, quam maiores odit quiz.
            </p>
            <p className="text-white font-face-rr">BBQ AREAS GLASS ROOMS</p>
            <a className="portfolio-link font-face-rr">
              <BsFillPlusCircleFill />
              READ MORE
            </a>
          </div>
        </div>
      </div>

      <PortfolioSlider />
    </div>
  );
};

export default Portfolio;
