import React from "react";
import "../ClientTestimony/ClientTestimony.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon from "../../assets/ClientTestimonyImages/MArks.png";

const ClientTestimony = () => {
  const testimonyData = [
    {
      id: "1",
      testimonyReview:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis numquam, minus saepe doloribus ab deserunt voluptatum obcaecati mollitia, veritatis, recusandae consequuntur. Hic non eligendi laboriosam impedit nam? Quibusdam, ab veritatis!",
      testimonyName: "JOSEPH KENT / ARCHITECT",
    },
    {
      id: "2",
      testimonyReview:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis numquam, minus saepe doloribus ab deserunt voluptatum obcaecati mollitia, veritatis, recusandae consequuntur. Hic non eligendi laboriosam impedit nam? Quibusdam, ab veritatis!",
      testimonyName: "JOSEPH KENT / ARCHITECT",
    },
    {
      id: "3",
      testimonyReview:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis numquam, minus saepe doloribus ab deserunt voluptatum obcaecati mollitia, veritatis, recusandae consequuntur. Hic non eligendi laboriosam impedit nam? Quibusdam, ab veritatis!",
      testimonyName: "JOSEPH KENT / ARCHITECT",
    },
    {
      id: "4",
      testimonyReview:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis numquam, minus saepe doloribus ab deserunt voluptatum obcaecati mollitia, veritatis, recusandae consequuntur. Hic non eligendi laboriosam impedit nam? Quibusdam, ab veritatis!",
      testimonyName: "JOSEPH KENT / ARCHITECT",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div id="testimonial-header" className="container-fluid">
        <div className="container py-2">
          <div className="row py-5 d-flex flex-column align-items-center justify-content-between">
            <div className="Testimoni-first col-lg-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in
              magnam ipsa quas enim consequuntur, omnis eum non accusamus eos.
            </div>
            <div className="py-4 bg-white shadow col-lg-8 col-md-12 text-center">
              <img className="img-fluid" src={icon} alt="img" />
              <div className="Test-inner p-5">
                <Slider {...settings}>
                  {testimonyData.map((x, index) => {
                    return (
                      <div key={index} className="">
                        <p className="testimony-review font-face-rr">
                          {x.testimonyReview}
                        </p>
                        <p>
                          <b className="font-face-rb">{x.testimonyName}</b>
                        </p>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
            <div className="d-none col-lg-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
              accusantium. Libero temporibus consectetur dolorum. Fugiat at modi
              labore ipsam quo laudantium! Ipsum hic nostrum blanditiis sint
              magnam necessitatibus laboriosam quae soluta exercitationem
              commodi?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientTestimony;
