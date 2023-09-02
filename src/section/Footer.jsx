import React from "react";
import "../styles/footer.css";
import playstore from "../images/play.webp";
import appstore from "../images/app-store.webp";

const Footer = () => {
  return (
    <section className="footerSection" id="download">
      <div className="container">
        <div className="footerInner">
          <div className="footerContent">
            <h1 className="footerHead" data-aos= "fade-down">Download the app</h1>
            <p className="footerText" data-aos= "fade-down">
              Downloading this app, helps us change the world.
            </p>
            <div style={{ marginTop: "70px" }} data-aos= "fade-down">
              <img className="logoPlay footerLogo" style={{width: "160px"}} src={playstore} alt="" />
              <img className="logoApple footerLogo" src={appstore} alt="" />
            </div>

            <div style={{marginTop: "100px", paddingBottom: "20px"}} data-aos= "fade-down">
                <ul>
                    <li>
                        <a href="">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="">Terms & Conditions</a>
                    </li>
                    <li>
                        <a href="">Gift Aid</a>
                    </li>
                    <li>
                        <a href="">Fees</a>
                    </li>
                    <li>
                        <a href="">Complaints</a>
                    </li>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                </ul>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
