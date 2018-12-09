import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';


class MainNav extends React.Component {
  public render(): JSX.Element {
    
    return (
      <div className="main-nav">
        <div className="container">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <NavLink exact={true} to='/' className='main-nav__link'>Главная</NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink to="/projects" className="main-nav__link">Проекты</NavLink>
            </li>
            {/* <li className="main-nav__item">
              <a href="#" className="main-nav__link">Панели</a>
            </li> */}
            <li className="main-nav__item">
              <NavLink to="/articles" className="main-nav__link">Статьи</NavLink>
            </li>
            {/* <li className="main-nav__item">
              <a href="#" className="main-nav__link">Технологии</a>
            </li> */}
            <li className="main-nav__item">
              <NavLink to="/contacts" className="main-nav__link">Контакты</NavLink>
            </li>
          </ul>
        </div>
        </div>
    );
  }
}

export default MainNav;
