import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../style/slider.scss";
import { sliderItems } from "../data";

function Slider() {
  const [slideIndex, setslideIndex] = useState(0);
  // to do slider !!!!
  const handleclick = (direction) => {
    if (direction === "left") {
      setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slider-container">
      <button
        direction="left"
        className="arrow"
        id="left"
        onClick={() => handleclick("left")}
      >
        <ArrowBackIcon />
      </button>
      <div className="wrapperr">
        {sliderItems.map((item) => {
          return (
            <div
              className="Slide"
              key={item.id}
              style={{ background: `${item.bg}` }}
            >
              <div className="imgContainer">
                <img className="img" src={item.img} alt="sas"></img>
              </div>
              <div className="containerInfo">
                <span className="title-slider">{item.title}</span>
                <br />
                <span className="description">{item.desc}</span>

                <button className="btn">CLICK ME</button>
              </div>
            </div>
          );
        })}

        <button
          direction="right"
          className="arrow"
          id="right"
          onClick={() => handleclick("right")}
        >
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
}

export default Slider;
