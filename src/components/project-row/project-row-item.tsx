import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  id: number;
  totalArea: number;
  floor: number;
  terrace: boolean;
  garage: boolean;
  price: number;
}

class ProjectRowItem extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <li className="projects__item project-row">
        <img
          className="project-row__img"
          src={`img/projects/${this.props.id}/1.jpg`}
          alt={`Проект №${this.props.id}`}
        />
        <div className="project-row__content">
          <h3 className="project-row__title">
            Проект дома из СИП №{this.props.id}
          </h3>
          <ul className="project-row__list">
            <li className="project-row__item">
              <b>Общая площадь:</b>
              {this.props.totalArea} м<sup>2</sup>
            </li>
            <li className="project-row__item">
              <b>Кол-во этажей:</b>
              {this.props.floor}
            </li>
            <li className="project-row__item">
              <b>Наличие террасы:</b>
              {this.props.terrace ? 'Да' : 'Нет'}
            </li>
            <li className="project-row__item">
              <b>Наличие гаража:</b>
              {this.props.garage ? 'Да' : 'Нет'}
            </li>
          </ul>
          <p className="project-row__price">
            <span>Цена от:</span> {this.props.price} $
          </p>
          <NavLink
            to={`project#${this.props.id}`}
            className="project-row__link btn"
          >
            Подробнее
          </NavLink>
        </div>
      </li>
    );
  }
}

export default ProjectRowItem;
