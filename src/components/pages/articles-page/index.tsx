import * as React from 'react';

import './index.scss';

import Article from './article';

interface State {
  id: number;
}

class ArticlesPage extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      id: 1
    };
  }

  public render(): JSX.Element {
    return (
      <div className="articles-page">
        <div className="container">
          <div className="articles-page__title section-title">Статьи</div>
          <div className="articles-page__inner">
            <ul className="articles-page__list">
              <li className="articles-page__item">
                <a
                  href="#"
                  onClick={this.onClick.bind(this, 1)}
                  className="link"
                >
                  Мифы и реальность
                </a>
              </li>
              <li className="articles-page__item">
                <a
                  href="#"
                  onClick={this.onClick.bind(this, 2)}
                  className="link"
                >
                  Преимущества каркасных доиов
                </a>
              </li>
              <li className="articles-page__item">
                <a
                  href="#"
                  onClick={this.onClick.bind(this, 3)}
                  className="link"
                >
                  Модульные дома
                </a>
              </li>
            </ul>
            <div className="articles-page__article">
              <Article id={this.state.id} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private onClick(idNum: number): void {
    this.setState({ id: idNum });
  }
}

export default ArticlesPage;
