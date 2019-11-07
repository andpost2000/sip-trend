import autobind from 'autobind-decorator';
import * as React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import './index.scss';


import Filter from 'src/components/filter';
import ProjectRow from 'src/components/project-row';
import { State } from 'src/store';
import { decrement, fetchData, increment } from '../../../actions';

interface ReduxState {
  data: any;
  loadStatus: string | null;
}
interface ReduxProps {
  increment: any;
  decrement: any;
  fetchData: (url: string) => void;
}

interface Props extends ReduxProps, ReduxState {
  value: number;
}

const test = false;

class ProjectsPage extends React.Component<Props> {
  public incHandler = () => {
    this.props.increment(1);
  };
  public decHandler = () => {
    this.props.decrement(1);
  };

  public componentWillMount(): void {
    this.getData();
  }

  public render(): JSX.Element {
    return (
      <div className="projects">
        <Helmet
          title={`Каркасный дом | Проекты домов`}
          meta={[
            {name: 'description', content: `Проекты каркасных домов и домов из СИП панелей. Подробное описание и ориентировочные цены.`},
            {name: 'keywords', content: 'Каркасный дом, Дом из сип панелей, Купить СИП панели, дома из сип панели, дома из сип панелей цена, дом из сип Минск, дом из сип Беларусь, Сип панель, строительство дома из сип панелей, дачный домик, проекты, красивые проекты, строительство, каркасный дом, энергоэффективный дом, дом под ключ, сип цена, дачный дом, построить дом, дом из сип панелей цена, дом проект'}
          ]}
        />
        <h1 className="visually-hidden">Проекты каркасных домов и домов из СИП панелей</h1>
        {this.props.loadStatus}
        <div className="container">
          {test ? (
            <React.Fragment>
              <button onClick={this.incHandler}>plus</button>
              <p>value: {this.props.value}</p>
              <button onClick={this.decHandler}>minus</button>
            </React.Fragment>
          ) : null}
          <Filter />
          {this.props.loadStatus === 'loaded' ? <ProjectRow projects={this.props.data.projects} /> : 'zero'}
        </div>
      </div>
    );
  }

  @autobind
  private getData(): void {
    this.props.fetchData('/data/data.json');
  }
}

const mapStateToProps = (state: State): ReduxState => {
  return {
    data: state.root.data,
    loadStatus: state.root.loadStatus,
  };
}

const mapDispatchToProps = (dispatch: Dispatch<Action>): ReduxProps => {
  return {
    decrement: (value: any) => dispatch(decrement(value)),
    fetchData: (url) => dispatch(fetchData(url)),
    increment: (value: any) => dispatch(increment(value)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsPage);

// export default ProjectsPage;
