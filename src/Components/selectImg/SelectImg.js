import React from "react";
import "./selectImgStyle.css";
import one from "../../Assets/Taqbostan.jpg";

const SelectImg = (props) => {
  return (
    <div className="selects-location">
      <img src={props.bgImg} alt="/" />
      <div className="overlay">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default SelectImg;
