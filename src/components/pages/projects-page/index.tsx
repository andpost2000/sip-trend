import autobind from 'autobind-decorator';
import * as React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import './index.scss';

import Filter from 'src/components/filter';
import ProjectRow from 'src/components/project-row';
import { SvgSpinner } from 'src/components/svg-spinner';
import { LoadStatus } from 'src/enums/enums';
import { Data, State } from 'src/interfaces/interfaces';
import { fetchData } from '../../../actions';

interface ReduxState {
  data: Data;
  loadStatus: LoadStatus | null;
}
interface ReduxProps {
  fetchData: (url: string) => void;
}

interface Props extends ReduxProps, ReduxState {}

class ProjectsPage extends React.Component<Props> {

  public componentWillMount(): void {
    if (this.props.loadStatus !== LoadStatus.Loaded) {
      this.getData();
    }
  }

  public render(): JSX.Element {
    return (
      <div className="projects">
        <Helmet
          title={`Каркасный дом | Проекты домов`}
          meta={[
            { name: 'description', content: `Проекты каркасных домов и домов из СИП панелей. Подробное описание и ориентировочные цены.` },
            { name: 'keywords', content: 'Каркасный дом, Дом из сип панелей, Купить СИП панели, дома из сип панели, дома из сип панелей цена, дом из сип Минск, дом из сип Беларусь, Сип панель, строительство дома из сип панелей, дачный домик, проекты, красивые проекты, строительство, каркасный дом, энергоэффективный дом, дом под ключ, сип цена, дачный дом, построить дом, дом из сип панелей цена, дом проект' }
          ]}
        />
        <h1 className="visually-hidden">Проекты каркасных домов и домов из СИП панелей</h1>
        <div className="container">
          <Filter />
          {this.props.loadStatus === LoadStatus.Loaded
            ? <ProjectRow data={this.props.data} />
            : <SvgSpinner size='middle' />
          }
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
    fetchData: (url) => dispatch(fetchData(url)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsPage);
