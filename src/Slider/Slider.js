import React, { Component } from 'react';
import Slider from "react-slick";

class SliderDom extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      lazyLoad: 'progressive',
      arrows: false,
      centerPadding: '0px'
    };
    return (
      <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/400/200" alt="Cat 1" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" alt="kitten 2" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" alt="kitty 3" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" alt="meow 4" />
          </div>
      </Slider>
    );
  }
}

export default SliderDom;
