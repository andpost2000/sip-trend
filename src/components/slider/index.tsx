import * as React from 'react';
import Slider from 'react-slick';

import './index.scss';

class MainSlider extends React.Component {
  public render(): JSX.Element {
    const settings = {
      autoplay: false,
      autoplaySpeed: 4000,
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
            <img src='img/slides/tools.jpg' width={1300} height={400} />
            <div className='slider__item-slogan top left'>
              <p>Профессиональный подход к работе</p>
            </div>
          </div>
          <div className="slider__item">
            <img src='img/slides/plan.jpg' width={1300} height={400} />
            <div className='slider__item-slogan bottom left'>
              <p>Точность планирования</p>
            </div>
          </div>
          <div className="slider__item">
            <img src='img/slides/keys.jpg' width={1300} height={400} />
            <div className='slider__item-slogan top right'>
              <p>Ключи через месяц</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default MainSlider;
