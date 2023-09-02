import React from "react";
import WorkData from "../Data/WorkData";
import "../styles/work.css";

const Work = () => {
  return (
    <section className="workSection" id="work">
      <div className="container">
        <div className="workContent">
          <h1 className="workTitle" data-aos= "fade-up">How it works</h1>
        </div>
        <div className="workCards">
          {WorkData.map((item, index) => (
            <div className={item.className} key={index}>
              <div style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                {" "}
                <img className="cardImage"src={item.image} data-aos= "zoom-in"/>
              </div>

              <div className="card">
                {" "}
                <h1 className="cardTitle" data-aos= "fade-up">{item.title}</h1>
                <p className="cardPara" data-aos= "fade-up">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
