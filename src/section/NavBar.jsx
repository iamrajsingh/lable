import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import navData from "../Data/NavBarData";
import "../styles/navBar.css";

const NavBar = () => {
  return (
    <section className="navbar">
      <div className="container" data-aos="slide-down">
        <div className="navbarInner">
          <div className="logo">
          <Link className="logo" smooth to= "#">Lable.</Link>
        </div>
        <div className="navItems">
          <div className="navItem">
            {navData.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <Link to='#home' smooth className="navLinks"
                    style={{
                      marginRight: "50px",
                      border: "solid #3a22fd 2px",
                      borderRadius: "28px",
                      padding: "8px 30px 8px 30px",
                      color: "#3a22fd"
                    }}
                  >
                    {item.linkOne}
                  </Link>
                  <Link to='#about' smooth className="navLinks" style={{ marginRight: "50px" }}>{item.linkTwo}</Link>
                  <Link to="#work" smooth className="navLinks navLinkThree">{item.linkThree}</Link>
                  <p className="navLinks"
                    style={{
                      color: "white",
                      fontWeight: "500",
                      fontSize: "15px",
                    }}
                  >
                    {item.text}
                  </p>
                  <Link to="#download" smooth className="btn ">{item.btn}</Link>
                </div>
              );
            })}  
          </div>
        </div>

        </div>
        
      </div>
    </section>
  );
};

export default NavBar;
