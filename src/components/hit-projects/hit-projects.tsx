import * as React from 'react';

import './hit-projects.scss';

import HitCard from './hit-card';

class HitProjects extends React.Component {
  public render(): JSX.Element {
    const data = require('../../data.json');
    const projects = data.projects;
    const projectsHit = [projects[1], projects[2], projects[3]];
    return (
      <div className="hit-projects">
        <div className="container">
          <h2 className="hit-projects__title section-title">
            Популярные проекты каркасных домов
          </h2>
          <ul className="hit-projects__list">
            {projectsHit.map((project: any, index: number) => (
              <HitCard
                key={index}
                id={index + 1}
                totalArea={project.totalArea}
                price={project.price}
                discount={500}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default HitProjects;
