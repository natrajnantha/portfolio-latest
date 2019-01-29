import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import { Container, Row, Col } from "../Grid";
import "./Portfolio.css";
import Projectcard from "./Projectcard";
import "bootstrap/dist/css/bootstrap.css";
import PortfolioData from "./PortfolioData";

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"portfolio" + (dark ? " section-dark" : "")}>
      <div className="port-container" id={id}>
        <div className="row">
          {PortfolioData.map(prdata => {
            return (
              <Projectcard
                ptext={prdata.ptext}
                purl={prdata.purl}
                pimg={prdata.pimg}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
