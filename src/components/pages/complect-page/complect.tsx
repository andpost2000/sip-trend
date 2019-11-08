import autobind from 'autobind-decorator';
import * as React from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import './complect.scss';

import { fetchData } from 'src/actions';
import { SvgSpinner } from 'src/components/svg-spinner';
import { LoadStatus } from 'src/enums/enums';
import { Data, State } from 'src/interfaces/interfaces';

interface ReduxState {
  data: Data;
  loadStatus: LoadStatus | null;
}
interface ReduxProps {
  fetchData: (url: string) => void;
}

interface Props extends ReduxProps, ReduxState {
  id: number;
}

class Complect extends React.Component<Props> {

  public componentWillMount(): void {
    if (this.props.loadStatus !== LoadStatus.Loaded) {
      this.getData();
    }
  }

  public render(): JSX.Element {
    const complects = this.props.data.complects;
    return (
      <React.Fragment>
        {this.props.loadStatus === LoadStatus.Loaded
          ? <React.Fragment>
              {complects.map((complect: any, index: number) =>
                this.props.id === complect.id ? (
                  <div className="complect" key={index}>
                    <h2 className="complect__title">{complect.name}</h2>
                    <p className="complect__price">
                      В данной комплектации стоимость&nbsp;
                  <b>
                        от {complect.price}$ м<sup>2</sup>
                      </b>
                    </p>
                    <p className="complect__change">Комплектацию можно менять</p>
                    <div className="complect__description">
                      <div className="complect__text">
                        {complect.params.map((param: any, indexParam: number) => (
                          <React.Fragment key={`param${indexParam}`}>
                            <h4>{param.name}</h4>
                            <ul>
                              {param.item.map(
                                (item: any, indexItem: number) => (
                                  <ol key={`paramItem${indexItem}`}>{item}</ol>
                                )
                              )}
                            </ul>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null
              )}
            </React.Fragment>
          : <SvgSpinner size='middle' />
        }
      </React.Fragment>
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
)(Complect);
