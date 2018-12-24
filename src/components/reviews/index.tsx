import * as React from 'react';

import './index.scss';

import autobind from 'autobind-decorator';

interface State {
  id: number;
}

class Reviews extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      id: 0
    };
  }
  public render(): JSX.Element {
    return (
      <div className="reviews">
        <div className="container">
          <h2 className="reviews__title section-title">
            Отзывы наших клиентов
          </h2>
          <div className="reviews__video">
            <div className="reviews__item" onClick={this.onClick.bind(this, 1)}>
              <img src={`img/projects/1/1m.jpg`} width={'100%'} alt="Проект" />
              {this.state.id === 1 ? (
                <div className="reviews__popup">
                  <div className="reviews__video-wrap">
                    <button onClick={this.onClose}>Закрыть</button>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/Ox0Jw8xHXF0"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen={true}
                    />
                  </div>
                </div>
              ) : null}
            </div>
            <div className="reviews__item" onClick={this.onClick.bind(this, 2)}>
              <img src={`img/projects/2/1m.jpg`} width={'100%'} alt="Проект" />
              {this.state.id === 2 ? (
                <div className="reviews__popup">
                  <div className="reviews__video-wrap">
                    <button onClick={this.onClose}>Закрыть</button>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/ofWZ-Ig5ufI"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen={true}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
  private onClick(idNum: number): void {
    this.setState({ id: idNum });
  }
  @autobind
  private onClose(event: any): void {
    this.setState({ id: 0 });
    event.stopPropagation();
  }
}

export default Reviews;
