import autobind from 'autobind-decorator';
import * as classNames from 'classnames';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

import { Burger } from './burger';

interface State {
  open: boolean;
}

class MainNav extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      open: false,
    }
  }
  public render(): JSX.Element {
    
    return (
      <div className="main-nav">
        <div className="container">
          <ul className={classNames("main-nav__list",  {"open": this.state.open})}>
            <li className='main-nav__toggle'>
              <button onClick={this.toggle}><Burger /></button>
            </li>
            <li className="main-nav__item">
              <NavLink exact={true} to='/' className='main-nav__link' onClick={this.toggle}>Главная</NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink to="/projects" className="main-nav__link" onClick={this.toggle}>Проекты</NavLink>
            </li>
            {window.innerWidth > 767 ? null :
              <li className="main-nav__item">
                <NavLink to="/project" className="main-nav__link project-link" onClick={this.toggle}>Проект</NavLink>
              </li>
            }
            <li className="main-nav__item">
              <NavLink to="/articles" className="main-nav__link" onClick={this.toggle}>Статьи</NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink to="/complect" className="main-nav__link" onClick={this.toggle}>Комплектации</NavLink>
            </li>
            {/* <li className="main-nav__item">
              <a href="#" className="main-nav__link">Технологии</a>
            </li> */}
            <li className="main-nav__item">
              <NavLink to="/contacts" className="main-nav__link" onClick={this.toggle}>Контакты</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  @autobind
  private toggle(): void {
    this.setState({ open: !this.state.open });
  }
}

export default MainNav;
