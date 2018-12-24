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
            <NavLink to="/articles" className='footer__link'>Статьи</NavLink>
            <NavLink to="/complect" className='footer__link'>Комплектации</NavLink>
            {/* <a href='#' className='footer__link'>Панели</a> */}
            {/* <a href='#' className='footer__link'>О нас</a> */}
            <NavLink to="/contacts" className='footer__link'>Контакты</NavLink>
          </div>
          <SocialLink />
          <div className='footer__contacts'>
            Беларусь, 211875,
            г.&nbsp;Поставы,
            ул.&nbsp;Космонавтов 66-6,
            +375 33 320 90 08
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
