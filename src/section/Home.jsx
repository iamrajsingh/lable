import React from "react";
import "../styles/home.css";
import Homedata from "../Data/Homedata";

const Home = () => {
  return (
    <section className="homeSection" id="home">
      <div className="container">
        {Homedata.map((item, index) => (
          <div key={index} className="homeInner">
            <div style={{ inlineSize: "450px" }}>
              <h1 className="homeTitle" data-aos = "slide-down">
                {item.title}
              </h1>
              <img src={item.downImg} />
              <p style={{ color: "#3a22fd" }}>{item.text}</p>
            </div>
            <div className="homeImgSection">
              <img data-aos="zoom-in" className="homeImg" src={item.img} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
