import * as React from 'react';
import ImgGallery from 'src/components/img-gallery';

import './project-desc.scss';

interface Props {
  buildArea: number;
  roofAngle: number;
  floor: number;
  id: number;
  totalRoof: number;
  plotSize: string;
  advantages: any[];
  planCount: number;
}

class ProjectDesc extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <div className="project__description project-desc">
        <div className="project-desc__list-wrap">
          <ul className="project-desc__list">
            <li className="project-desc__item">
              <span className="project-desc__name">Мин. размер участка:</span>
              <span className="project-desc__value">
                {this.props.plotSize} <i>м</i>
              </span>
            </li>
            <li className="project-desc__item">
              <span className="project-desc__name">Площадь застройки:</span>
              <span className="project-desc__value">
                {this.props.buildArea} <i>м</i>
                <sup>2</sup>
              </span>
            </li>
            <li className="project-desc__item">
              <span className="project-desc__name">Угол крыши:</span>
              <span className="project-desc__value">
                {this.props.roofAngle}
                <sup>0</sup>
              </span>
            </li>
            <li className="project-desc__item">
              <span className="project-desc__name">Площадь крыши:</span>
              <span className="project-desc__value">
                {this.props.totalRoof} <i>м</i>
                <sup>2</sup>
              </span>
            </li>
          </ul>
          <div className="project-desc__text">
            <h3>Приемущества проекта</h3>
            <ul>
              {this.props.advantages.map((item: any, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="project-desc__img-wrap">
          <ImgGallery id={this.props.id} plan={true} imgCount={this.props.planCount}/>
        </div>
      </div>
    );
  }
}

export default ProjectDesc;
