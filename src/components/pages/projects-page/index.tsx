import * as React from 'react';
import { connect } from 'react-redux';

import './index.scss';

import Filter from 'src/components/filter';
import ProjectRow from 'src/components/project-row';
import { decriment, increment } from '../../../actions';

interface Props {
  increment: any;
  decriment: any;
  value: number;
}

class ProjectsPage extends React.Component<Props> {
  
  public incHandler = () => {
    this.props.increment(1);
  }
  public decHandler = () => {
    this.props.decriment(1);
  }

  public render(): JSX.Element {
    return (
      <div className="projects">
        <div className="container">
        <button onClick={this.incHandler}>plus</button>
        <p>value: {this.props.value}</p>
        <button onClick={this.decHandler}>minus</button>
          <Filter />
          <ProjectRow />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    value: state.value,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    decriment: (value: any) => { dispatch(decriment(value))},
    increment: (value: any) => { dispatch(increment(value))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);


// export default ProjectsPage;
