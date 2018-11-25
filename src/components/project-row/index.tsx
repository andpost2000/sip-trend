import * as React from 'react';

import './index.scss';

class ProjectRow extends React.Component {
  public render(): JSX.Element {
    return (
      <ul className="projects__list">
        <li className="projects__item project-row">
          <img className="project-row__img" src="img/3.jpg" alt="Поект 11"/>
          <div className="project-row__content">
            <h3 className="project-row__title">Проект дома из СИП №11</h3>
            <ul className="project-row__list">
              <li className="project-row__item"><b>Общая площадь:</b>148 м<sup>2</sup></li>
              <li className="project-row__item"><b>Кол-во этажей:</b>2</li>
              <li className="project-row__item"><b>Наличие террасы:</b>Да</li>
              <li className="project-row__item"><b>Наличие гаража:</b>Нет</li>
            </ul>
            <p className="project-row__price">
              <span>Цена от:</span> 16 050 $
            </p>
            <a href="project.html" className="project-row__link btn">Подробнее</a>
          </div>
        </li>
        <li className="projects__item project-row">
          <img className="project-row__img" src="img/2.jpg" alt="Поект 11"/>
          <div className="project-row__content">
            <h3 className="project-row__title">Проект дома из СИП №11</h3>
            <ul className="project-row__list">
              <li className="project-row__item"><b>Общая площадь:</b>68 м<sup>2</sup></li>
              <li className="project-row__item"><b>Кол-во этажей:</b>1</li>
              <li className="project-row__item"><b>Наличие террасы:</b>Да</li>
              <li className="project-row__item"><b>Наличие гаража:</b>Нет</li>
            </ul>
            <p className="project-row__price">
              <span>Цена от:</span> 9 050 $
            </p>
            <a href="#" className="project-row__link btn">Подробнее</a>
          </div>
        </li>
        <li className="projects__item project-row">
          <img className="project-row__img" src="img/1.jpg" alt="Поект 11"/>
          <div className="project-row__content">
            <h3 className="project-row__title">Проект дома из СИП №11</h3>
            <ul className="project-row__list">
              <li className="project-row__item"><b>Общая площадь:</b>48 м<sup>2</sup></li>
              <li className="project-row__item"><b>Кол-во этажей:</b>1</li>
              <li className="project-row__item"><b>Наличие террасы:</b>Да</li>
              <li className="project-row__item"><b>Наличие гаража:</b>Нет</li>
            </ul>
            <p className="project-row__price">
              <span>Цена от:</span> 6 050 $
            </p>
            <a href="#" className="project-row__link btn">Подробнее</a>
          </div>
        </li>
      </ul>
    );
  }

}

export default ProjectRow;
