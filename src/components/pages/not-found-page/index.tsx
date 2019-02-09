import * as React from 'react';
import Helmet from 'react-helmet';

import './index.scss';

import { NavLink } from 'react-router-dom';

class NotFoundPage extends React.Component {
  public render(): JSX.Element {
    return (
      <React.Fragment>
        <Helmet
          title='Каркасный дом | Page 404'
          meta={[
            {"name": "description", "content": "Страница не найдена 'ООО СипТренд'."},
            {"name": "keywords", "content": "Каркасный дом, Дом из сип панелей, Купить СИП панели, дома из сип панели, дома из сип панелей цена, дом из сип Минск, дом из сип Беларусь, Сип панель, строительство дома из сип панелей, дачный домик, проекты, красивые проекты, строительство, каркасный дом, энергоэффективный дом, дом под ключ, сип цена, дачный дом, построить дом, дом из сип панелей цена, дом проект"}
          ]}
        />
        <div className="not-found">
          <div className="container">
            <h2>Страница не найдена</h2>
            <NavLink to="/" className="project__link link">Перейти на главную</NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NotFoundPage;
