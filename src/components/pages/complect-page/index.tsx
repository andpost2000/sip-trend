import * as classNames from 'classnames';
import * as React from 'react';
import Helmet from 'react-helmet';

import './index.scss';

import Complect from './complect';

interface State {
  id: number;
}

class ComplectPage extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      id: 1
    };
  }

  public render(): JSX.Element {
    const { id } = this.state;
    
    return (
      <div className="complect-page">
        <Helmet
          title='Каркасный дом | Комплектации'
          meta={[
            {"name": "description", "content": "Комплектации каркасных домов и домов из СИП панелей."},
            {"name": "keywords", "content": "Каркасный дом, Дом из сип панелей, Купить СИП панели, дома из сип панели, дома из сип панелей цена, дом из сип Минск, дом из сип Беларусь, Сип панель, строительство дома из сип панелей, дачный домик, проекты, красивые проекты, строительство, каркасный дом, энергоэффективный дом, дом под ключ, сип цена, дачный дом, построить дом, дом из сип панелей цена, дом проект"}
          ]}
        />
        <h1 className="visually-hidden">Комплектации каркасных домо и СИП панелей</h1>
        <div className="container">
          <div className="complect-page__title section-title">Комплектации</div>
          <div className="complect-page__inner">
            <ul className="complect-page__list">
              <li className="complect-page__item">
                <a
                  href="#"
                  onClick={this.onClick.bind(this, 1)}
                  className={classNames("complect-page__link", {"current": id === 1})}
                >
                  Базовая
                </a>
              </li>
              <li className="complect-page__item">
                <a
                  href="#"
                  onClick={this.onClick.bind(this, 2)}
                  className={classNames("complect-page__link", {"current": id === 2})}
                >
                  Утеплённая
                </a>
              </li>
              <li className="complect-page__item">
                <a
                  href="#"
                  onClick={this.onClick.bind(this, 3)}
                  className={classNames("complect-page__link", {"current": id === 3})}
                >
                  Премиум
                </a>
              </li>
              <li className="complect-page__item">
                <a
                  href="#"
                  onClick={this.onClick.bind(this, 4)}
                  className={classNames("complect-page__link", {"current": id === 4})}
                >
                  Под ключь
                </a>
              </li>
            </ul>
            <div className="complect-page__article">
              <Complect id={this.state.id} />
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

export default ComplectPage;
