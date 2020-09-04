import React from "react";
import "./SocialCard.css";

export const SocialCard = (props) => {
  const bgColor = { background: `#${props.color}` };
  return (
    <div className="face">
      <div className="icon" style={bgColor}>
        <i className={props.icon} aria-hidden="true"></i>
      </div>
    </div>
  );
};
