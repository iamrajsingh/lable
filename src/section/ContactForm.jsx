import React from "react";
import "../styles/form.css";

const ContactForm = () => {
  return (
    <section className="formSection">
      <div className="container">
        <div className="formInner">
          <div className="formText">
            <h1 className="formTitle" data-aos= "fade-up">Register your interest today</h1>
            <p className="formMail" data-aos= "fade-up">info@lable.com</p>
          </div>
          <div className="formLayout">
            <form data-aos= "fade-up">
              <label >Your Name</label>
              <input className="formInput" />
              <label>Email</label>
              <input className="formInput " />
              <label>Message</label>
              <input className="formInput formMessage" />
              <div className="formBtn">Submit</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
