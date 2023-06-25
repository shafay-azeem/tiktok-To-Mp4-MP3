import React from "react";
import "../Featured/FeaturedImage.css";
import fbIcon from "../../assets/FeaturedImages/face-icon.png";
import instaIcon from "../../assets/FeaturedImages/insta-icon.png";
import { useState } from "react";
import { useEffect } from "react";
import Image1 from "../../assets/FeaturedImages/h1-port-slider-img-1.jpg";
import Image2 from "../../assets/FeaturedImages/34_1-1.jpg";
import Image3 from "../../assets/FeaturedImages/34_1-2.jpg";

const FeaturedImage = () => {
  const images = [Image1, Image2, Image3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="Featured">
      <div className="container-fluid">
        <div className="row">
          <div className="py-5 Featured-Left-Image col-lg-1 col-md-1 shadow">
            <img className="img-fluid" src={fbIcon} alt="fb" />
            <p className="pt-2 font-face-rr">Facebook</p>
            <img className="img-fluid" src={instaIcon} alt="insta" />
            <p className="pt-2 font-face-rr">Instagram</p>
          </div>
          <div
            className="py-5 Featured-Right-Image col-lg-11 col-md-11"
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "650px",
            }}
          >
            <div className="Feature-Architecture">
              <button className="">Architecture With Meaning</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedImage;
