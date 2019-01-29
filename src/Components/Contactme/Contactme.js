import React from "react";
import "./Contact.css";

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"contactme" + (dark ? " section-dark" : "")}>
      <div className="contact-container" id={id}>
        <div clasName="row">
          <h1 className="t1style">Contact Me @</h1>
          <hr className="hrstyle" />
          <div>
            <img
              className="contact-logo"
              src={require("./images/in.png")}
              alt="Linkedin"
              title="Linkedin"
            />{" "}
            <a href="https://www.linkedin.com/in/natarajan-nandagopalan-pmp-2859628a/">
              <h5>Linkedin</h5>
            </a>{" "}
          </div>
          <div>
            <img
              className="contact-logo"
              src={require("./images/mail.png")}
              alt="email"
              title="email"
            />{" "}
            <p>rajnanda6161@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
