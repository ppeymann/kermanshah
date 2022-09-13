import React from "react";
import "./imgSliderStyle.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// image imports

import twoI from "../../Assets/tekye.jpg";
import threeI from "../../Assets/sarabSahneh.jpg";
import fourI from "../../Assets/ghar.jpg";
import fiveI from "../../Assets/piran.jpg";
import sixI from "../../Assets/parrao.jpg";

const ImgSlider = () => {
  return (
    <div name="slider" dir="ltr" className="container">
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src={sixI} />
        </div>
        <div>
          <img src={twoI} />
        </div>
        <div>
          <img src={threeI} />
        </div>
        <div>
          <img src={fourI} />
        </div>
        <div>
          <img src={fiveI} />
        </div>
      </Carousel>
    </div>
  );
};

export default ImgSlider;
