import autobind from 'autobind-decorator';
import * as React from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import './hit-projects.scss';

import { fetchData, sendForm } from 'src/actions';
import { LoadStatus } from 'src/enums/enums';
import { Data, State } from 'src/interfaces/interfaces';
import { SvgSpinner } from '../svg-spinner';
import HitCard from './hit-card';

interface ReduxState {
  data: Data;
  loadStatus: LoadStatus | null;
  formSended: string;
}
interface ReduxProps {
  fetchData: (url: string) => void;
  sendForm: (url: string, data: string, method: string) => void;
}

interface Props extends ReduxProps, ReduxState { }

interface ComponentState {
  name: string;
  email: string;
  text: string;
}

const formEnabled = true;
class HitProjects extends React.Component<Props, ComponentState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      text: '',
    }
  }

  public componentWillMount(): void {
    if (this.props.loadStatus !== LoadStatus.Loaded) {
      this.getData();
    }
  }

  public render(): JSX.Element {
    // tslint:disable-next-line:no-console
    console.log(this.props.formSended);
    const projects = this.props.data.projects;
    const projectsHit = [projects[1], projects[2], projects[3]];
    return (
      <div className="hit-projects">
        <div className="container">
          <h2 className="hit-projects__title section-title">
            Популярные проекты каркасных домов
          </h2>
          <ul className="hit-projects__list">
            {this.props.loadStatus === LoadStatus.Loaded
              ? <React.Fragment>
                {projectsHit.map((project: any, index: number) => (
                  <HitCard
                    key={index}
                    id={project.id}
                    totalArea={project.totalArea}
                    price={project.totalArea * project.price}
                    discount={500}
                  />
                ))}
              </React.Fragment>
              : <SvgSpinner size='middle' />
            }
          </ul>

          {formEnabled && <React.Fragment>
            {this.props.formSended === 'OK'
              ? 'ФОРМА ОТПРАВЛЕНА'
              : <div>
                {this.props.formSended !== '' ? 'ЧТО-ТО ПОШЛО НЕ ТАК, ПОПРОБУЙТЕ ЕЩЁ РАЗ' : null}
                <label htmlFor='name'>Имя:</label>
                <input onChange={this.changeNname} value={this.state.name} type="text" id='name' name='name' />
                <label htmlFor='email'>E-mail:</label>
                <input onChange={this.changeEmail} value={this.state.email} type="email" id='email' name='email' />
                <label htmlFor='text'>Сообщение:</label>
                <input onChange={this.changeText} value={this.state.text} type="text" id='text' name='text' />
                <button
                  onClick={this.sendForm}
                  disabled={(!this.state.name || !this.state.email || !this.state.text)}
                >
                  Send
                </button>
              </div>
            }
          </React.Fragment>}
        </div>
      </div>
    );
  }

  @autobind
  private changeNname(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    this.setState({ name: value });
  }
  @autobind
  private changeEmail(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    this.setState({ email: value });
  }
  @autobind
  private changeText(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    this.setState({ text: value });
  }

  @autobind
  private sendForm(): void {
    const { name, email, text } = this.state;
    const data = `name=${name}&email=${email}&text=${text}`;
    this.props.sendForm('http://siptrend.by/send-mail.php', data, 'post');
    this.setState({
      email: '',
      name: '',
      text: '',
    })
  }

  @autobind
  private getData(): void {
    this.props.fetchData('/data/data.json');
  }
}

const mapStateToProps = (state: State): ReduxState => {
  return {
    data: state.root.data,
    formSended: state.root.formSended,
    loadStatus: state.root.loadStatus,
  };
}

const mapDispatchToProps = (dispatch: Dispatch<Action>): ReduxProps => {
  return {
    fetchData: (url) => dispatch(fetchData(url)),
    sendForm: (url, data, method) => dispatch(sendForm(url, data, method)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HitProjects);

