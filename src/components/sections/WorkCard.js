import React from "react";
import "./WorkCard.css";

export const WorkCard = (props) => {

  return (
    <div id="workCard">
      <div id="top">
        <img
          id="workCardPhoto"
          src={props.photo}
          alt="top"
          width="300px"
          height="200px"
        />
      </div>
      <div id="bottom">
          <h3>{props.projectName}</h3>
          <p>{props.projectInfo}</p>
      </div>
    </div>
  );
};
