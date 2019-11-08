import autobind from 'autobind-decorator';
import * as React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { Action, Dispatch } from 'redux';

import './promo-slider.scss';

import { fetchData } from 'src/actions';
import { SvgSpinner } from 'src/components/svg-spinner';
import { LoadStatus } from 'src/enums/enums';
import { Data, State } from 'src/interfaces/interfaces';
import ProjectCard from './project-card';

interface ReduxState {
  data: Data;
  loadStatus: LoadStatus | null;
}
interface ReduxProps {
  fetchData: (url: string) => void;
}

interface Props extends ReduxProps, ReduxState { }

class PromoSlider extends React.Component<Props> {

  public componentWillMount(): void {
    if (this.props.loadStatus !== LoadStatus.Loaded) {
      this.getData();
    }
  }

  public render(): JSX.Element {
    const projects = this.props.data.projects;
    const settings = {
      autoplay: false,
      autoplaySpeed: 3000,
      className: 'promo-slider',
      dots: true,
      infinite: true,
      pauseOnDotsHover: true,
      slidesToScroll: 1,
      slidesToShow: window.innerWidth > 760 ? 2 : 1,
      speed: 500
    };
    return (
      <React.Fragment>
        {this.props.loadStatus === LoadStatus.Loaded
          ? <Slider {...settings}>
            {projects.map((project: any, index: number) => (
              <ProjectCard
                key={index}
                id={index + 1}
                totalArea={project.totalArea}
                price={project.totalArea * project.price}
              />
            ))}
          </Slider>
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
)(PromoSlider);

