import * as React from 'react';
import Slider from 'react-slick';

import './promo-slider.scss';

import ProjectCard from './project-card';

class PromoSlider extends React.Component {
  public render(): JSX.Element {
    const data = require('../../data.json');
    const projects = data.projects;
    const settings = {
      autoplay: false,
      autoplaySpeed: 3000,
      className: 'promo-slider',
      dots: true,
      infinite: true,
      pauseOnDotsHover: true,
      slidesToScroll: 1,
      slidesToShow: 2,
      speed: 500
    };
    return (
      <Slider {...settings}>
        {projects.map((project: any, index: number) => (
          <ProjectCard
            key={index}
            id={index + 1}
            totalArea={project.totalArea}
            price={project.totalArea * project.price}
          />
        ))}
      </Slider>
    );
  }
}

export default PromoSlider;
