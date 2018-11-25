import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

import SocialLink from '../social-link';

class Footer extends React.Component {
  public render(): JSX.Element {
    return (
      <footer className='footer'>
        <div className='container'>
          <div className='footer__navigation'>
            <NavLink exact={true} to='/'  className='footer__link current'>Главная</NavLink>
            <NavLink to="/projects" className='footer__link'>Проекты</NavLink>
            <a href='#' className='footer__link'>Панели</a>
            <a href='#' className='footer__link'>О нас</a>
            <NavLink to="/contacts" className='footer__link'>Контакты</NavLink>
          </div>
          <SocialLink />
          <div className='footer__contacts'>
            Беларусь, 211875<br/>
            г. Поставы,<br/>
            ул. Ленинская д. 150<br/>
            +375 29 000 00 00
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
