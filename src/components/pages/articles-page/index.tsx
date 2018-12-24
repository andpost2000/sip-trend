import * as React from 'react';
import Helmet from 'react-helmet';

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
        <Helmet
          title='Каркасный дом | Статьи о строительстве из СИП'
          meta={[
            {"name": "description", "content": "Статьи о каркасных технологиях и строительстве домов из СИП панелей."},
            {"name": "keywords", "content": "Каркасный дом, Дом из сип панелей, Купить СИП панели, дома из сип панели, дома из сип панелей цена, дом из сип Минск, дом из сип Беларусь, Сип панель, строительство дома из сип панелей, дачный домик, проекты, красивые проекты, строительство, каркасный дом, энергоэффективный дом, дом под ключ, сип цена, дачный дом, построить дом, дом из сип панелей цена, дом проект"}
          ]}
        />
        <h1 className="visually-hidden">статья о строительстве из СИП панелей</h1>
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
