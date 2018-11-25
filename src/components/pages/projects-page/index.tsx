import * as React from 'react';

import './index.scss';

import Filter from 'src/components/filter';
import ProjectRow from 'src/components/project-row';

class ProjectsPage extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="projects">
        <div className="container">
          <Filter />
          <ProjectRow />
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
