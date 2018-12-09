import * as React from 'react';
import Slider from 'react-slick';

import './index.scss';

class MainSlider extends React.Component {
  public render(): JSX.Element {
    const settings = {
      autoplay: false,
      autoplaySpeed: 3000,
      className: 'slider',
      dots: true,
      infinite: true,
      pauseOnDotsHover: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500
    };
    return (
      <div className="slider__wrap">
        <Slider {...settings}>
          <div className="slider__item">
            <h3>1</h3>
          </div>
          <div className="slider__item">
            <h3>2</h3>
          </div>
          <div className="slider__item">
            <h3>3</h3>
          </div>
          <div className="slider__item">
            <h3>4</h3>
          </div>
          <div className="slider__item">
            <h3>5</h3>
          </div>
          <div className="slider__item">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default MainSlider;
