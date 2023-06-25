import React from "react";
import NavigationBar from "../Miscellaneous/NavigationBar";
import "../../Components/Service/BbqArea.css";
import ServiceGallery from "./ServiceGallery";

const BbqArea = () => {
  const imageData = [
    {
      src: require("../../assets/ServiceImages/i1.avif"),
    },
    {
      src: require("../../assets/ServiceImages/i2.avif"),
    },
    {
      src: require("../../assets/ServiceImages/i3.avif"),
    },

    {
      src: require("../../assets/ServiceImages/i4.avif"),
    },
    {
      src: require("../../assets/ServiceImages/i2.avif"),
    },
    {
      src: require("../../assets/ServiceImages/i1.avif"),
    },
    {
      src: require("../../assets/ServiceImages/i2.avif"),
    },
    {
      src: require("../../assets/ServiceImages/i3.avif"),
    },
  ];
  return (
    <>
      <NavigationBar />
      <div className="BBQ-Area">
        <h2 className="text-white text-center py-5 font-face-re">BBQ AREA</h2>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 py-5">
            <p className="my-0 py-0 font-face-rb">EXTERIOR</p>
            <p className="font-face-rr">BBQ AREAS</p>
            <p className="font-face-rr">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore, sapiente? Porro corrupti omnis cum, praesentium iste
              commodi itaque, quo asperiores incidunt, nobis nulla magni.
              Deserunt vero cupiditate suscipit autem culpa!
            </p>
            <p className="font-face-rr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque vel necessitatibus reiciendis fuga quasi iste neque
              delectus, exercitationem facilis quidem, sequi molestiae illum!
              Nam tempora sed odit, quasi, porro natus ipsam iure error
              explicabo assumenda ipsa voluptas, delectus harum sit?
            </p>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
      <ServiceGallery imageData={imageData} />
    </>
  );
};

export default BbqArea;
