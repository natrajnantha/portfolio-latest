import React from "react";
import "./About.css";

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"about" + (dark ? " section-dark" : "")}>
      <div className="section-content contentbox" id={id}>
        <div class="row">
          <div class="col-lg-12">
            <h1> About Me </h1>
            <hr />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <img
              src={require("./images/DSC_0022.jpg")}
              alt="Profile pic"
              id="imgplace"
            />

            <div className="txtstyle">
              <p>
                {" "}
                I work as a product manager at a technology company and head an
                excellent team that develop Medicare management software
                products for Healthcare companies. I am a firm believer in team
                work and collaboration, so I enjoy learning and mentoring my
                team, without whom I believe my organization cannot deliver
                quality products.
              </p>

              <p>
                {" "}
                I wear many hats, another one of which is a Full-Stack Web
                Developer.
              </p>

              <p>
                {" "}
                I manage my time well and during my free time I enjoy variety of
                activities. I am a passionate gardener, self-taught Woodworker
                and Photographer. When I am not doing the above, I enjoy playing
                social league cricket.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
