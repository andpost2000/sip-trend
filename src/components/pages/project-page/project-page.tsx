import autobind from 'autobind-decorator';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './project-page.scss';

import ImgGallery from 'src/components/img-gallery';
import ProjectDesc from './project-desc';

class ProjectPage extends React.Component {
  private id = this.getId();
  private data = require('src/data.json');
  public render(): JSX.Element {
    const project = this.data.projects[this.id - 1];
    return (
      <div className="project">
        <div className="container">
          <div className="project__top">
            <div className="project__slider">
              <ImgGallery id={this.id} imgCount={project.pictureCount}/>
            </div>
            <div className="project__content">
              <h3 className="project__title">Проект дома из СИП №{this.id}</h3>
              <ul className="project__list">
                <li className="project__item">
                  <b>Общая площадь:</b>{project.totalArea} м<sup>2</sup>
                </li>
                <li className="project__item">
                  <b>Кол-во этажей:</b>{project.floor}
                </li>
                <li className="project__item">
                  <b>Наличие террасы:</b>{project.terrace ? 'Есть' :  'Нет'}
                </li>
                <li className="project__item">
                  <b>Наличие гаража:</b>{project.garage ? 'Есть' : 'Нет'}
                </li>
              </ul>
              <div className="project__price">
                <span>Цена от:</span> {project.totalArea * project.price} $
                <p className="project__price-descript">
                  * Цена указана для комплектации "Премиум"
                </p>
                <NavLink to="/complect"  className="project__link link">
                  Подробнее о комплектациях
                </NavLink>
              </div>
            </div>
          </div>
          <div className="project__bottom">
            <h2 className="section-title">Описание проекта дома из СИП</h2>
            <ProjectDesc
              buildArea={project.buildArea}
              roofAngle={project.roofAngle}
              floor={project.floor}
              id={this.id}
              totalRoof={project.totalRoof}
              plotSize={project.plotSize}
              advantages={project.advantages}
              planCount={project.planCount}
            />
          </div>
        </div>
      </div>
    );
  }
  @autobind
  private getId(): number {
    const url = window.location.href;
    const id = +url.substring(url.lastIndexOf('#') + 1);
    return id;
  }
}

export default ProjectPage;
