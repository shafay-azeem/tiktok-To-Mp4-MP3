import React, { useState } from "react";
import "../WorkFlow/WorkFlow.css";

const WorkFlow = () => {
  const [workFlowItems, setWorkFlowItems] = useState([
    {
      id: 1,
      image: require("../../assets/WorkFlowImages/icons-1.png"),
      heading: "Planning Stage",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae iusto eos, ab qui ipsa",
    },
    {
      id: 2,
      image: require("../../assets/WorkFlowImages/icons-2.png"),
      heading: "Exterior Design",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae iusto eos, ab qui ipsa",
    },
    {
      id: 3,
      image: require("../../assets/WorkFlowImages/icons-3.png"),
      heading: "Building Stage",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae iusto eos, ab qui ipsa",
    },
    {
      id: 4,
      image: require("../../assets/WorkFlowImages/icons-4.png"),
      heading: "Pro Support",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae iusto eos, ab qui ipsa",
    },
  ]);
  return (
    <>
      <section class="workflow-section">
        <div class="container py-5 px-lg-5">
          <div class="row py-5 px-lg-5">
            {workFlowItems.map((x, index) => {
              return (
                <div key={index} class="col-sm-3 ">
                  <div className="workflow-box">
                    <img src={x.image} class="img-fluid " alt="img" />
                    <h5 className="font-face-rb">{x.heading}</h5>
                    <p className="font-face-rr">{x.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkFlow;
