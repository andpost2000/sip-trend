import * as React from 'react';
import { connect } from 'react-redux';

import './index.scss';

import { Data } from 'src/interfaces/interfaces';
import ProjectRowItem from './project-row-item';

interface ReduxState {
  checkboxes: any;
}

interface Props extends ReduxState {
  data: Data;
}

class ProjectRowComponent extends React.Component<Props> {
  public render(): JSX.Element {
    const { checkboxes } = this.props;

    let projects = this.props.data.projects;
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
