import React from "react";
import "./Skills.css";
import "bootstrap/dist/css/bootstrap.css";
import SkillData from "./SkillData";

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"skill" + (dark ? " section-dark" : "")}>
      <div className="skill-container" id={id}>
        <div clasName="row">
          <h1 className="tstyle">SKILLS</h1>
          <hr className="hrstyle" />
          {SkillData.map(skill => {
            return (
              <img
                className="skills-logo"
                src={require(`./images/${skill.ssrc}`)}
                alt={skill.stitle}
                title={skill.stitle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
