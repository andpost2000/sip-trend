import * as React from 'react';

import './project-desc.scss';

interface Props {
  buildArea: number;
  roofAngle: number;
  floor: number;
}

class ProjectDesc extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <div className="project__description project-desc">
        <div className="project-desc__list-wrap">
          <ul className="project-desc__list">
            <li className="project-desc__item">
              <span className="project-desc__name">Площадь застройки</span>
              <span className="project-desc__value">
                {this.props.buildArea} <i>м</i>
                <sup>2</sup>
              </span>
            </li>
            <li className="project-desc__item">
              <span className="project-desc__name">Угол крыши</span>
              <span className="project-desc__value">
                {this.props.roofAngle}
                <sup>0</sup>
              </span>
            </li>
          </ul>
          <ul className="project-desc__list">
            <li className="project-desc__item">
              <span className="project-desc__name">Первый этаж</span>
              <span className="project-desc__value">
                45.5 <i>м</i>
                <sup>2</sup>
              </span>
            </li>
            <li className="project-desc__item">
              <span className="project-desc__name">Прихожая</span>
              <span className="project-desc__value">
                3.12 <i>м</i>
                <sup>2</sup>
              </span>
            </li>
            <li className="project-desc__item">
              <span className="project-desc__name">Гостинная</span>
              <span className="project-desc__value">
                21.2 <i>м</i>
                <sup>2</sup>
              </span>
            </li>
            <li className="project-desc__item">
              <span className="project-desc__name">Терраса</span>
              <span className="project-desc__value">
                14.9 <i>м</i>
                <sup>2</sup>
              </span>
            </li>
          </ul>
          {this.props.floor === 2 ? (
            <ul className="project-desc__list">
              <li className="project-desc__item">
                <span className="project-desc__name">Второй этаж</span>
                <span className="project-desc__value">
                  25 <i>м</i>
                  <sup>2</sup>
                </span>
              </li>
              <li className="project-desc__item">
                <span className="project-desc__name">Комната</span>
                <span className="project-desc__value">
                  12.8 <i>м</i>
                  <sup>2</sup>
                </span>
              </li>
              <li className="project-desc__item">
                <span className="project-desc__name">Комната</span>
                <span className="project-desc__value">
                  14.2 <i>м</i>
                  <sup>2</sup>
                </span>
              </li>
            </ul>
          ) : null}
        </div>
        <div className="project-desc__img-wrap">
          <img className="project-desc__img" src="img/1.jpg" alt="Поект 11" />
          {this.props.floor === 2 ? (
            <img className="project-desc__img" src="img/3.jpg" alt="Поект 11" />
          ) : null}
        </div>
      </div>
    );
  }
}

export default ProjectDesc;
