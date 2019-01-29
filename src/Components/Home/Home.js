import React from "react";
import "./Home.css";

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"home" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <div className="banner-text">
          <h1>Natarajan Nandagopalan</h1>
          <hr />
          <h3>Full-Stack developer</h3>
          <h3>Based in Los Angeles, CA</h3>
        </div>
      </div>
    </div>
  );
}
