import * as React from 'react';
import { connect } from 'react-redux';

import './index.scss';

import ProjectRowItem from './project-row-item';

interface ReduxState {
  checkboxes: any;
}

class ProjectRowComponent extends React.Component<ReduxState> {
  public render(): JSX.Element {
    const { checkboxes } = this.props;
    // tslint:disable-next-line:no-console
    console.log(checkboxes ? checkboxes.Garage : null);

    const data = require('../../data.json');
    let projects = data.projects;
    if (checkboxes)  {
      const areaInMin = checkboxes.Area ? checkboxes.Area - 50 : 0;
      const areaInMax = checkboxes.Area ? checkboxes.Area : 1000;
      const projectsTotal: any[] = projects.filter((item: any) =>
        this.filterTotal(item.totalArea, areaInMin, areaInMax, checkboxes.Area)
      );
      const projectsGarage: any[] = projectsTotal.filter((item: any) =>
        checkboxes.Garage ? item.garage : item
      );
      const projectsTerrace: any[] = projectsGarage.filter((item: any) =>
        checkboxes.Terrace ? item.terrace : item
      );
      const projectsFloor: any[] = projectsTerrace.filter((item: any) =>
        checkboxes.oneFloor ? this.filterBy(1, item.floor) : item
      );
      projects = projectsFloor;
    }
    return (
      <ul className="projects__list">
        {/* {projects.filter((project: any) => project.terrace).map((project: any, index: number) => ( */}
        {projects.map((project: any, index: number) => (
          <ProjectRowItem
            id={project.id}
            garage={project.garage}
            totalArea={project.totalArea}
            terrace={project.terrace}
            floor={project.floor}
            price={project.price}
            key={index}
          />
        ))}
      </ul>
    );
  }
  private filterTotal(check: number, min: number, max: number, area: string) {
    // tslint:disable-next-line:no-console
    console.log("=filter=", area);
    if (area === "0" || (check <= max && check > min)) {
      return true;
    }
    return false;
  }

  private filterBy(key: string | number, item: string) {
    if (item === key) {
      return true;
    }
    return false;
  }
}

function mapStateToProps(state: any) {
  return {
    checkboxes: state.form.post.values
  };
}

const ProjectRow = connect(mapStateToProps)(ProjectRowComponent);

export default ProjectRow;

// function mapDispatchToProps(dispatch: any) {
//   return {
//     decriment: (value: any) => {
//       dispatch(decriment(value));
//     },
//     increment: (value: any) => {
//       dispatch(increment(value));
//     }
//   };
// }

{
  /* <li className="projects__item project-row">
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
       */
}
