import * as React from 'react';

import './project-card.scss';

import { NavLink } from 'react-router-dom';

interface Props {
  id: number;
  totalArea: number;
  price: number;
}

class ProjectCard extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <div className="promo-slider__item project-card">
        <h3 className="project-card__title">Проект дома из СИП №{this.props.id}</h3>
        <p className="project-card__text">
          Общая площадь: {this.props.totalArea} м<sup>2</sup>
        </p>
        <div className="project-card__content">
          <img src={`img/projects/${this.props.id}/1.jpg`} alt={`Проект ${this.props.id}`} />
          <div className="project-card__description">
            <p className="project-card__price">
              <span>Цена от:</span> {this.props.price} $
            </p>
            <NavLink to={`/project#${this.props.id}`} className="project-card__link btn">
              Подробнее
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
