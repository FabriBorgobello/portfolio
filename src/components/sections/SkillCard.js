import React from "react";
import "./SkillCard.css";

export const SkillCard = (props) => {
  const color = { background: `#${props.color}` };
  const classIcon = `icon ${props.icon}`;

  return (
    <div className="face">
      <div className="content" style={color}>
        <i className={classIcon} aria-hidden="true"></i>
  <span className="text">{props.text}</span>
      </div>
    </div>
  );
};
