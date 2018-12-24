import * as React from 'react';
import Helmet from 'react-helmet';
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

const test = false;

class ProjectsPage extends React.Component<Props> {
  public incHandler = () => {
    this.props.increment(1);
  };
  public decHandler = () => {
    this.props.decriment(1);
  };

  public render(): JSX.Element {
    return (
      <div className="projects">
        <Helmet
          title={`Каркасный дом | Проекты домов`}
          meta={[
            {name: 'description', content: `Проекты карканых домов и домов из СИП панелей. Подробное описание и ориентировочные цены.`},
            {name: 'keywords', content: 'Каркасный дом, Дом из сип панелей, Купить СИП панели, дома из сип панели, дома из сип панелей цена, дом из сип Минск, дом из сип Беларусь, Сип панель, строительство дома из сип панелей, дачный домик, проекты, красивые проекты, строительство, каркасный дом, энергоэффективный дом, дом под ключ, сип цена, дачный дом, построить дом, дом из сип панелей цена, дом проект'}
          ]}
        />
        <h1 className="visually-hidden">Проекты каркасных домов и домов из СИП панелей</h1>
        <div className="container">
          {test ? (
            <React.Fragment>
              <button onClick={this.incHandler}>plus</button>
              <p>value: {this.props.value}</p>
              <button onClick={this.decHandler}>minus</button>
            </React.Fragment>
          ) : null}
          <Filter />
          <ProjectRow />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    value: state.value
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    decriment: (value: any) => {
      dispatch(decriment(value));
    },
    increment: (value: any) => {
      dispatch(increment(value));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsPage);

// export default ProjectsPage;
