import React from "react";
import "./Portfolio.css";

const Projectcard = props => (
  <div key={props.ptext} className="card">
    <div className="img-container">
      <a href={props.purl} target="_blank">
        <img alt="test" src={props.pimg} />{" "}
      </a>
    </div>
    <div class="desc">
      <h3>{props.ptext}</h3>
    </div>
  </div>
);

export default Projectcard;
